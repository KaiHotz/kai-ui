import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import cx from 'clsx';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import {
  ColDef,
  ColumnResizedEvent,
  GridApi,
  GridOptions,
  GridReadyEvent,
  SelectionChangedEvent,
  SortChangedEvent,
} from 'ag-grid-community';

import { useTheme } from '../../hooks';
import { EThemeOptions } from '../../providers';
import { LoadingOverlayRenderer } from './renderers/LoadingOverlayRenderer';
import { NoRowsOverlayRenderer } from './renderers/NoRowsOverlayRenderer';
import { hasConfiguredInitialSort } from './utils';
import { ColumnDef, DataTableGridOptions, SortOperator } from './types';
import './DataTable.scss';

interface DataTableProps<DataType extends NonNullable<unknown>>
  extends Omit<AgGridReactProps, 'columnDefs' | 'rowData' | 'gridOptions' | 'showToolPanel' | 'sideBar'> {
  /** Column definitions used for the Data to be shown */
  columnDefs: ColumnDef<DataType>[];
  /** Array of the data to shown in the grid  */
  rowData?: DataType[];
  readonly onSortChange?: (order_by: string, sort_order: SortOperator) => void;
  isLoading?: boolean;
  /** If isAutoHeight is set to true the grid automatically uses the height of its parent container */
  isAutoHeight?: boolean;
  loadingMessage?: ReactNode;
  noRowsMessage?: ReactNode;
  initialSortField?: string;
  initialSortOperator?: SortOperator;
  rowSelection?: 'single' | 'multiple';
  /** Disables the automatic resizing of the columns */
  disableFitSizeColumns?: boolean;
  /** properties and callbacks used to configure the grid */
  gridOptions?: DataTableGridOptions<DataType>;
  sortingOrder?: SortOperator[];
  /** Callback function to handle the Row selection when changed.
   * by using the grid API `getSelectedNodes()`
   * to get the new list of selected nodes / row data.
   */
  onChangeSelection?: (selection: DataType[]) => void;
  /** Callback function that executes when the grid has initialised and is ready for most api calls,
   * but may not be fully rendered yet
   */
  onGridReadyEvent?: (event: GridReadyEvent) => void;
  className?: string;
}

const DEFAULT_NO_ROWS_TEXT = 'No data has been found.';
const DEFAULT_LOADING_TEXT = 'Loading...';
const ROW_HEIGHT = 35;

export function DataTable<DataType extends NonNullable<unknown>>({
  columnDefs,
  rowData,
  isAutoHeight,
  onSortChange,
  gridOptions,
  isLoading,
  loadingMessage,
  noRowsMessage,
  rowSelection,
  onChangeSelection,
  onGridReadyEvent,
  disableFitSizeColumns,
  initialSortField,
  initialSortOperator,
  sortingOrder,
  className,
  onCellClicked,
  rowHeight = ROW_HEIGHT,
  ...rest
}: DataTableProps<DataType>) {
  const { theme } = useTheme();
  const loadingRef = useRef(isLoading);
  const apiRef = useRef<GridApi | undefined>(undefined);
  const overlayTimeoutRef = useRef<number>(0);
  const mutableRowData = useMemo(() => cloneDeep(rowData), [rowData]);
  const hasColumnAutoHeight = useMemo(() => columnDefs.some((colDef) => colDef.autoHeight), [columnDefs]);
  const hasFloatingFilters = useMemo(() => {
    return columnDefs.some((colDef) => Boolean(colDef.floatingFilter));
  }, [columnDefs]);

  const loadingOverlayComponent = useMemo(() => {
    return LoadingOverlayRenderer;
  }, []);

  const loadingOverlayComponentParams = useMemo(() => {
    return {
      loadingMessage: loadingMessage || DEFAULT_LOADING_TEXT,
    };
  }, [loadingMessage]);

  const noRowsOverlayComponent = useMemo(() => {
    return NoRowsOverlayRenderer;
  }, []);

  const noRowsOverlayComponentParams = useMemo(() => {
    return {
      noRowsMessage: noRowsMessage || DEFAULT_NO_ROWS_TEXT,
    };
  }, [noRowsMessage]);

  const showLoadingOverlay = useCallback(() => {
    window.clearInterval(overlayTimeoutRef.current);
    overlayTimeoutRef.current = window.setTimeout(() => {
      if (apiRef.current && (isLoading || loadingRef.current)) {
        apiRef.current.setGridOption('loading', true);
      }
    }, 100);
  }, [isLoading]);

  const showNoRowsOverlay = useCallback(() => {
    window.clearInterval(overlayTimeoutRef.current);
    overlayTimeoutRef.current = window.setTimeout(() => {
      if (apiRef.current) {
        apiRef.current.showNoRowsOverlay();
      }
    }, 50);
  }, []);

  const hideOverlay = useCallback(() => {
    window.clearTimeout(overlayTimeoutRef.current);
    if (apiRef.current) {
      apiRef.current.hideOverlay();
    }
  }, []);

  const sizeColumnsToFitIsEnabled = useCallback(() => {
    if (apiRef.current) {
      if (!hasColumnAutoHeight) {
        apiRef.current.resetRowHeights();
      }
      if (!disableFitSizeColumns) {
        apiRef.current.sizeColumnsToFit();
      }
    }
  }, [disableFitSizeColumns, hasColumnAutoHeight]);

  const setInitialSorting = useCallback(
    (event: GridReadyEvent) => {
      if (initialSortField && hasConfiguredInitialSort(columnDefs, initialSortField, initialSortOperator)) {
        event.api.applyColumnState({
          state: [
            {
              colId: initialSortField,
              sort: initialSortOperator,
            },
          ],
          applyOrder: true,
        });
      }
    },
    [columnDefs, initialSortField, initialSortOperator],
  );

  const handleSort = useCallback(
    (event: SortChangedEvent) => {
      // Initial sorting trigger unnecessary onSortChanged event.
      // To avoid this we trigger sorting even to only after the table init
      const isGridInitialized = Boolean(apiRef.current);
      if (onSortChange && isGridInitialized) {
        // we use suppressMultiSort to enforce sorting by 1 column only, which is at 0 index
        const oneColumnSortModel = event.api.getColumnState().find((colState) => colState.sort);
        if (oneColumnSortModel?.colId) {
          onSortChange(oneColumnSortModel.colId, oneColumnSortModel.sort as SortOperator);
        }
      }
    },
    [onSortChange],
  );

  const handleSelectionChanged = useCallback(
    (event: SelectionChangedEvent) => {
      if (onChangeSelection) {
        const selection = event.api.getSelectedRows();
        onChangeSelection(selection);
      }
    },
    [onChangeSelection],
  );

  const handleGridReady = useCallback(
    (event: GridReadyEvent) => {
      setInitialSorting(event);
      apiRef.current = event.api;
      if (isLoading || loadingRef.current) {
        showLoadingOverlay();
      } else {
        sizeColumnsToFitIsEnabled();
      }
      if (onGridReadyEvent) {
        onGridReadyEvent(event);
      }
    },
    [isLoading, onGridReadyEvent, setInitialSorting, showLoadingOverlay, sizeColumnsToFitIsEnabled],
  );

  const headerHeightGetter = useCallback(() => {
    const columnHeaderTexts = [...document.querySelectorAll('.ag-header-cell-text')];
    const clientHeights = columnHeaderTexts.map((headerText) => headerText.clientHeight);
    const tallestHeaderTextHeight = Math.max(...clientHeights);

    return tallestHeaderTextHeight;
  }, []);

  const headerHeightSetter = useCallback(() => {
    const defaultHeight = 20;
    const height = headerHeightGetter() + defaultHeight;
    if (apiRef.current) {
      apiRef.current.setGridOption('headerHeight', height);

      if (hasFloatingFilters) {
        apiRef.current.setGridOption('floatingFiltersHeight', ROW_HEIGHT);
      }
      if (!hasColumnAutoHeight) {
        apiRef.current.resetRowHeights();
      }
    }
  }, [hasColumnAutoHeight, headerHeightGetter, hasFloatingFilters]);

  useEffect(() => {
    loadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    if (!apiRef.current) {
      return;
    }
    if (isLoading || loadingRef.current) {
      return showLoadingOverlay();
    }
    hideOverlay(); //hideOverlay must be called before the following functions
    if (mutableRowData?.length === 0) {
      return showNoRowsOverlay();
    }
    headerHeightSetter();
    sizeColumnsToFitIsEnabled();
  }, [
    isLoading,
    mutableRowData,
    hideOverlay,
    sizeColumnsToFitIsEnabled,
    showLoadingOverlay,
    showNoRowsOverlay,
    headerHeightSetter,
  ]);

  useEffect(() => {
    return () => {
      window.clearTimeout(overlayTimeoutRef.current);
    };
  }, []);

  const isClickableRow = gridOptions?.onRowClicked || onChangeSelection || Boolean(onCellClicked);

  return (
    <div
      className={cx(
        'ui-data-table',
        {
          'ag-theme-quartz': theme === EThemeOptions.LIGHT,
          'ag-theme-quartz-dark': theme === EThemeOptions.DARK,
          'ui-data-table--fixed-height': !isAutoHeight,
          'ui-data-table--row-clickable': isClickableRow,
        },
        className,
      )}
    >
      <AgGridReact
        {...rest}
        rowData={mutableRowData}
        columnDefs={columnDefs as ColDef[]}
        defaultColDef={{
          suppressColumnsToolPanel: true,
          suppressHeaderMenuButton: true,
          suppressFloatingFilterButton: true,
          sortable: false,
          resizable: false,
          ...rest.defaultColDef,
        }}
        domLayout={isAutoHeight ? 'autoHeight' : 'normal'}
        gridOptions={{
          ...(gridOptions as GridOptions),
        }}
        unSortIcon
        suppressCellFocus
        suppressMultiSort
        suppressMovableColumns
        enableCellTextSelection
        enableBrowserTooltips
        tooltipShowDelay={200}
        onGridReady={handleGridReady}
        onCellClicked={onCellClicked}
        onSortChanged={handleSort}
        sortingOrder={sortingOrder || ['asc', 'desc', null]}
        onGridColumnsChanged={sizeColumnsToFitIsEnabled}
        onSelectionChanged={handleSelectionChanged}
        rowSelection={rowSelection}
        loadingOverlayComponent={loadingOverlayComponent}
        loadingOverlayComponentParams={loadingOverlayComponentParams}
        noRowsOverlayComponent={noRowsOverlayComponent}
        noRowsOverlayComponentParams={noRowsOverlayComponentParams}
        rowHeight={rowHeight}
        onColumnResized={(event: ColumnResizedEvent) => {
          const isColumnResized = event.type === 'columnResized' && event.finished;
          if (isColumnResized) {
            headerHeightSetter();
          }
          if (isColumnResized && !hasColumnAutoHeight) {
            event.api.resetRowHeights();
          }
        }}
      />
    </div>
  );
}
