import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import cx from 'clsx';
import { omit } from 'lodash';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import {
  AllCommunityModule,
  ColDef,
  colorSchemeDark,
  colorSchemeLight,
  ColumnResizedEvent,
  GridApi,
  GridOptions,
  GridPreDestroyedEvent,
  GridReadyEvent,
  SelectionChangedEvent,
  SortChangedEvent,
  themeQuartz,
} from 'ag-grid-community';

import { useTheme } from '../../hooks';
import { EThemeOptions } from '../../providers';
import { LoadingOverlayRenderer } from './renderers/LoadingOverlayRenderer';
import { NoRowsOverlayRenderer } from './renderers/NoRowsOverlayRenderer';
import { hasConfiguredInitialSort } from './utils';
import { ColumnDef, DataTableGridOptions, SortOperator } from './types';
import './DataTable.css';

interface DataTableProps<DataType extends NonNullable<unknown>> extends Omit<
  AgGridReactProps,
  'columnDefs' | 'rowData' | 'gridOptions' | 'showToolPanel' | 'sideBar'
> {
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
  className,
  onCellClicked,
  rowHeight = ROW_HEIGHT,
  ...rest
}: DataTableProps<DataType>) {
  const { theme } = useTheme();
  const gridRef = useRef<AgGridReact>(null);
  const overlayTimeoutRef = useRef<number>(0);
  const isDestroyedRef = useRef(false);
  const mutableRowData = useMemo(() => cloneDeep(rowData), [rowData]);
  const hasColumnAutoHeight = useMemo(() => columnDefs.some((colDef) => colDef.autoHeight), [columnDefs]);

  // Helper to safely get the grid API only if the grid is alive
  const getGridApi = useCallback((): GridApi | undefined => {
    if (isDestroyedRef.current) {
      return undefined;
    }
    const api = gridRef.current?.api;
    if (api && !api.isDestroyed()) {
      return api;
    }

    return undefined;
  }, []);

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

  const showNoRowsOverlay = useCallback(() => {
    window.clearInterval(overlayTimeoutRef.current);
    overlayTimeoutRef.current = window.setTimeout(() => {
      const api = getGridApi();
      if (api) {
        api.showNoRowsOverlay();
      }
    }, 50);
  }, [getGridApi]);

  const hideOverlay = useCallback(() => {
    window.clearTimeout(overlayTimeoutRef.current);
    const api = getGridApi();
    if (api) {
      api.hideOverlay();
    }
  }, [getGridApi]);

  const sizeColumnsToFitIsEnabled = useCallback(() => {
    const api = getGridApi();
    if (api) {
      if (!hasColumnAutoHeight) {
        api.resetRowHeights();
      }
      if (!disableFitSizeColumns) {
        api.sizeColumnsToFit();
      }
    }
  }, [disableFitSizeColumns, getGridApi, hasColumnAutoHeight]);

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
      const isGridInitialized = Boolean(getGridApi());
      if (onSortChange && isGridInitialized) {
        // we use suppressMultiSort to enforce sorting by 1 column only, which is at 0 index
        const oneColumnSortModel = event.api.getColumnState().find((colState) => colState.sort);
        if (oneColumnSortModel?.colId) {
          onSortChange(oneColumnSortModel.colId, oneColumnSortModel.sort as SortOperator);
        }
      }
    },
    [getGridApi, onSortChange],
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

  const headerHeightGetter = useCallback(() => {
    const columnHeaderTexts = [...document.querySelectorAll('.ag-header-cell-text')];
    const clientHeights = columnHeaderTexts.map((headerText) => headerText.clientHeight);
    const tallestHeaderTextHeight = Math.max(...clientHeights);

    return tallestHeaderTextHeight;
  }, []);

  const headerHeightSetter = useCallback(() => {
    const defaultHeight = 20;
    const height = headerHeightGetter() + defaultHeight;
    const api = getGridApi();
    if (api) {
      api.setGridOption('headerHeight', height);

      if (hasFloatingFilters) {
        api.setGridOption('floatingFiltersHeight', ROW_HEIGHT);
      }
      if (!hasColumnAutoHeight) {
        api.resetRowHeights();
      }
    }
  }, [getGridApi, hasColumnAutoHeight, headerHeightGetter, hasFloatingFilters]);

  const handleGridReady = useCallback(
    (event: GridReadyEvent) => {
      setInitialSorting(event);
      if (!isLoading) {
        sizeColumnsToFitIsEnabled();
      }
      if (onGridReadyEvent) {
        onGridReadyEvent(event);
      }
    },
    [isLoading, onGridReadyEvent, setInitialSorting, sizeColumnsToFitIsEnabled],
  );

  const handleGridPreDestroy = useCallback((_event: GridPreDestroyedEvent) => {
    window.clearTimeout(overlayTimeoutRef.current);
    isDestroyedRef.current = true;
  }, []);

  useEffect(() => {
    if (!getGridApi()) {
      return;
    }
    hideOverlay(); //hideOverlay must be called before the following functions
    if (mutableRowData?.length === 0) {
      return showNoRowsOverlay();
    }
    headerHeightSetter();
    sizeColumnsToFitIsEnabled();
  }, [
    getGridApi,
    isLoading,
    mutableRowData,
    hideOverlay,
    sizeColumnsToFitIsEnabled,
    showNoRowsOverlay,
    headerHeightSetter,
  ]);

  useEffect(() => {
    return () => {
      window.clearTimeout(overlayTimeoutRef.current);
      isDestroyedRef.current = true;
    };
  }, []);

  const themeOption = themeQuartz.withPart(theme === EThemeOptions.DARK ? colorSchemeDark : colorSchemeLight);

  return (
    <div className={cx('ag-theme-quartz', className)}>
      <AgGridReact
        ref={gridRef}
        {...omit(rest, 'defaultColDef')}
        rowData={mutableRowData}
        columnDefs={columnDefs as ColDef[]}
        modules={[AllCommunityModule]}
        theme={themeOption}
        loading={isLoading}
        defaultColDef={{
          suppressColumnsToolPanel: true,
          suppressHeaderFilterButton: true,
          suppressHeaderMenuButton: true,
          suppressFloatingFilterButton: true,
          suppressHeaderContextMenu: true,
          sortable: false,
          resizable: false,
          unSortIcon: true,
          sortingOrder: ['asc', 'desc'],
          ...rest.defaultColDef,
        }}
        domLayout={isAutoHeight ? 'autoHeight' : 'normal'}
        gridOptions={{
          ...(gridOptions as GridOptions),
        }}
        suppressCellFocus
        suppressMultiSort
        suppressMovableColumns
        enableCellTextSelection
        enableBrowserTooltips
        enableFilterHandlers
        tooltipShowDelay={200}
        onGridReady={handleGridReady}
        onGridPreDestroyed={handleGridPreDestroy}
        onCellClicked={onCellClicked}
        onSortChanged={handleSort}
        onGridColumnsChanged={sizeColumnsToFitIsEnabled}
        onSelectionChanged={handleSelectionChanged}
        rowSelection={rowSelection}
        loadingOverlayComponent={loadingOverlayComponent}
        loadingOverlayComponentParams={loadingOverlayComponentParams}
        noRowsOverlayComponent={noRowsOverlayComponent}
        noRowsOverlayComponentParams={noRowsOverlayComponentParams}
        rowHeight={rowHeight}
        onColumnResized={(event: ColumnResizedEvent) => {
          if (isDestroyedRef.current) {
            return;
          }
          const isColumnResized = event.type === 'columnResized' && event.finished;
          if (isColumnResized) {
            headerHeightSetter();
          }
          if (isColumnResized && !hasColumnAutoHeight && !event.api.isDestroyed()) {
            event.api.resetRowHeights();
          }
        }}
      />
    </div>
  );
}
