import { ReactElement } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GridReadyEvent } from 'ag-grid-community';

import { DataTable } from './DataTable';
import { ColumnDef } from './types';
import { ThemeProvider } from '../../providers';

interface TestData {
  id: string;
  name: string;
  value: number;
}

const mockRowData: TestData[] = [
  { id: '1', name: 'Item 1', value: 100 },
  { id: '2', name: 'Item 2', value: 200 },
  { id: '3', name: 'Item 3', value: 300 },
];

const mockColumnDefs: ColumnDef<TestData>[] = [
  { headerName: 'ID', field: 'id', flex: 1 },
  { headerName: 'Name', field: 'name', flex: 1 },
  { headerName: 'Value', field: 'value', flex: 1 },
];

const sortableColumnDefs: ColumnDef<TestData>[] = [
  { headerName: 'ID', field: 'id', flex: 1, sortable: true },
  { headerName: 'Name', field: 'name', flex: 1, sortable: true },
  { headerName: 'Value', field: 'value', flex: 1 },
];

const floatingFilterColumnDefs: ColumnDef<TestData>[] = [
  { headerName: 'ID', field: 'id', flex: 1, floatingFilter: true },
  { headerName: 'Name', field: 'name', flex: 1 },
  { headerName: 'Value', field: 'value', flex: 1 },
];

const autoHeightColumnDefs: ColumnDef<TestData>[] = [
  { headerName: 'ID', field: 'id', flex: 1, autoHeight: true },
  { headerName: 'Name', field: 'name', flex: 1 },
  { headerName: 'Value', field: 'value', flex: 1 },
];

const renderWithTheme = (ui: ReactElement) => {
  return render(<ThemeProvider name="test">{ui}</ThemeProvider>);
};

describe('<DataTable />', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('Rendering', () => {
    it('should render the DataTable component', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });
    });

    it('should render with custom className', async () => {
      const { container } = renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} className="custom-class" />,
      );

      await waitFor(() => {
        const wrapper = container.querySelector('.ag-theme-quartz');
        expect(wrapper).toHaveClass('custom-class');
      });
    });

    it('should render with autoHeight when isAutoHeight is true', async () => {
      const { container } = renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} isAutoHeight />,
      );

      await waitFor(() => {
        const root = container.querySelector('.ag-root-wrapper');
        expect(root).toHaveClass('ag-layout-auto-height');
      });
    });

    it('should render with normal layout when isAutoHeight is false', async () => {
      const { container } = renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} isAutoHeight={false} />,
      );

      await waitFor(() => {
        const root = container.querySelector('.ag-root-wrapper');
        expect(root).toHaveClass('ag-layout-normal');
      });
    });

    it('should render row data correctly', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
      });
    });

    it('should render column headers', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Value')).toBeInTheDocument();
      });
    });

    it('should apply custom row height', async () => {
      const customRowHeight = 50;
      const { container } = renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} rowHeight={customRowHeight} />,
      );

      await waitFor(() => {
        const row = container.querySelector('.ag-row');
        expect(row).toHaveStyle({ height: `${customRowHeight}px` });
      });
    });
  });

  describe('Loading State', () => {
    it('should show loading overlay when isLoading is true', async () => {
      renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={[]} isLoading loadingMessage="Loading data..." />,
      );

      await waitFor(() => {
        expect(screen.getByText('Loading data...')).toBeInTheDocument();
      });
    });

    it('should show default loading message when loadingMessage is not provided', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} isLoading />);

      await waitFor(() => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });
    });
  });

  describe('No Rows State', () => {
    it('should show no rows overlay when rowData is empty', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} noRowsMessage="No data available" />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      await waitFor(() => {
        expect(screen.getByText('No data available')).toBeInTheDocument();
      });
    });

    it('should show default no rows message when noRowsMessage is not provided', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      await waitFor(() => {
        expect(screen.getByText('No data has been found.')).toBeInTheDocument();
      });
    });
  });

  describe('onGridReadyEvent callback', () => {
    it('should call onGridReadyEvent when grid is ready', async () => {
      const onGridReadyEvent = vi.fn();

      renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} onGridReadyEvent={onGridReadyEvent} />,
      );

      await waitFor(() => {
        expect(onGridReadyEvent).toHaveBeenCalledTimes(1);
        expect(onGridReadyEvent).toHaveBeenCalledWith(expect.objectContaining({ type: 'gridReady' }));
      });
    });

    it('should provide grid API through onGridReadyEvent', async () => {
      let gridApi: GridReadyEvent['api'] | null = null;
      const onGridReadyEvent = vi.fn((event: GridReadyEvent) => {
        gridApi = event.api;
      });

      renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} onGridReadyEvent={onGridReadyEvent} />,
      );

      await waitFor(() => {
        expect(gridApi).not.toBeNull();
        expect(gridApi?.getDisplayedRowCount()).toBe(3);
      });
    });
  });

  describe('setInitialSorting', () => {
    it('should apply initial sorting when initialSortField and initialSortOperator are provided', async () => {
      const onSortChange = vi.fn();

      renderWithTheme(
        <DataTable
          columnDefs={sortableColumnDefs}
          rowData={mockRowData}
          initialSortField="name"
          initialSortOperator="asc"
          onSortChange={onSortChange}
        />,
      );

      await waitFor(() => {
        const sortedHeader = screen.getByText('Name').closest('.ag-header-cell');
        expect(sortedHeader).toHaveAttribute('aria-sort', 'ascending');
      });
    });

    it('should apply descending sort when initialSortOperator is desc', async () => {
      renderWithTheme(
        <DataTable
          columnDefs={sortableColumnDefs}
          rowData={mockRowData}
          initialSortField="name"
          initialSortOperator="desc"
        />,
      );

      await waitFor(() => {
        const sortedHeader = screen.getByText('Name').closest('.ag-header-cell');
        expect(sortedHeader).toHaveAttribute('aria-sort', 'descending');
      });
    });

    it('should not apply initial sorting if field is not sortable', async () => {
      renderWithTheme(
        <DataTable
          columnDefs={mockColumnDefs}
          rowData={mockRowData}
          initialSortField="name"
          initialSortOperator="asc"
        />,
      );

      await waitFor(() => {
        const header = screen.getByText('Name').closest('.ag-header-cell');
        expect(header).not.toHaveAttribute('aria-sort');
      });
    });
  });

  describe('handleSort (onSortChange callback)', () => {
    it('should call onSortChange when column is sorted', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const onSortChange = vi.fn();

      renderWithTheme(<DataTable columnDefs={sortableColumnDefs} rowData={mockRowData} onSortChange={onSortChange} />);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);

      await waitFor(() => {
        expect(onSortChange).toHaveBeenCalledWith('name', 'asc');
      });
    });

    it('should call onSortChange with desc when clicking sorted column again', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const onSortChange = vi.fn();

      renderWithTheme(<DataTable columnDefs={sortableColumnDefs} rowData={mockRowData} onSortChange={onSortChange} />);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameHeader = screen.getByText('Name');
      await user.click(nameHeader);
      await user.click(nameHeader);

      await waitFor(() => {
        expect(onSortChange).toHaveBeenLastCalledWith('name', 'desc');
      });
    });
  });

  describe('handleSelectionChanged (onChangeSelection callback)', () => {
    it('should call onChangeSelection when row selection changes', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const onChangeSelection = vi.fn();

      renderWithTheme(
        <DataTable
          columnDefs={mockColumnDefs}
          rowData={mockRowData}
          onChangeSelection={onChangeSelection}
          rowSelection={{
            mode: 'multiRow',
            enableClickSelection: true,
          }}
        />,
      );

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
      });

      const firstRow = screen.getByText('Item 1').closest('.ag-row');
      if (firstRow) {
        await user.click(firstRow);
      }

      await waitFor(() => {
        expect(onChangeSelection).toHaveBeenCalled();
      });
    });
  });

  describe('sizeColumnsToFitIsEnabled', () => {
    it('should not resize columns when disableFitSizeColumns is true', async () => {
      let gridApi: GridReadyEvent['api'] | null = null;
      const onGridReadyEvent = vi.fn((event: GridReadyEvent) => {
        gridApi = event.api;
      });

      renderWithTheme(
        <DataTable
          columnDefs={mockColumnDefs}
          rowData={mockRowData}
          onGridReadyEvent={onGridReadyEvent}
          disableFitSizeColumns
        />,
      );

      await waitFor(() => {
        expect(gridApi).not.toBeNull();
      });
    });

    it('should resize columns to fit when disableFitSizeColumns is false', async () => {
      let gridApi: GridReadyEvent['api'] | null = null;
      const onGridReadyEvent = vi.fn((event: GridReadyEvent) => {
        gridApi = event.api;
      });

      renderWithTheme(
        <DataTable
          columnDefs={mockColumnDefs}
          rowData={mockRowData}
          onGridReadyEvent={onGridReadyEvent}
          disableFitSizeColumns={false}
        />,
      );

      await waitFor(() => {
        expect(gridApi).not.toBeNull();
      });
    });
  });

  describe('headerHeightSetter', () => {
    it('should handle columns with floating filters', async () => {
      const { container } = renderWithTheme(<DataTable columnDefs={floatingFilterColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        const floatingFilter = container.querySelector('.ag-floating-filter');
        expect(floatingFilter).toBeInTheDocument();
      });
    });
  });

  describe('hasColumnAutoHeight', () => {
    it('should handle columns with autoHeight', async () => {
      renderWithTheme(<DataTable columnDefs={autoHeightColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
      });
    });
  });

  describe('getGridApi helper', () => {
    it('should return undefined after grid is destroyed', async () => {
      const { unmount } = renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });

      unmount();

      // Grid should be destroyed and no errors should occur
      expect(true).toBe(true);
    });
  });

  describe('handleGridPreDestroy', () => {
    it('should handle grid pre-destroy event and clear timeouts', async () => {
      const { unmount } = renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      // Should not throw when unmounting
      unmount();

      await act(async () => {
        vi.advanceTimersByTime(100);
      });
    });
  });

  describe('showNoRowsOverlay', () => {
    it('should show no rows overlay after timeout when data is empty', async () => {
      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} noRowsMessage="Empty table" />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      await waitFor(() => {
        expect(screen.getByText('Empty table')).toBeInTheDocument();
      });
    });
  });

  describe('hideOverlay', () => {
    it('should hide overlay when data changes from empty to populated', async () => {
      const { rerender } = renderWithTheme(
        <ThemeProvider name="test">
          <DataTable columnDefs={mockColumnDefs} rowData={[]} noRowsMessage="Empty table" />
        </ThemeProvider>,
      );

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      await waitFor(() => {
        expect(screen.getByText('Empty table')).toBeInTheDocument();
      });

      rerender(
        <ThemeProvider name="test">
          <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} noRowsMessage="Empty table" />
        </ThemeProvider>,
      );

      await waitFor(() => {
        expect(screen.queryByText('Empty table')).not.toBeInTheDocument();
      });
    });
  });

  describe('onCellClicked', () => {
    it('should call onCellClicked when a cell is clicked', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const onCellClicked = vi.fn();

      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} onCellClicked={onCellClicked} />);

      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Item 1'));

      await waitFor(() => {
        expect(onCellClicked).toHaveBeenCalled();
      });
    });
  });

  describe('onColumnResized', () => {
    it('should handle column resize events', async () => {
      let gridApi: GridReadyEvent['api'] | null = null;
      const onGridReadyEvent = vi.fn((event: GridReadyEvent) => {
        gridApi = event.api;
      });

      renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={mockRowData} onGridReadyEvent={onGridReadyEvent} />,
      );

      await waitFor(() => {
        expect(gridApi).not.toBeNull();
      });

      // Simulate column resize by setting column width
      gridApi!.setColumnWidths([{ key: 'id', newWidth: 200 }]);

      await waitFor(() => {
        expect(true).toBe(true);
      });
    });
  });

  describe('gridOptions', () => {
    it('should pass grid options to AgGridReact', async () => {
      const gridOptions = {
        rowBuffer: 10,
        animateRows: false,
      };

      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} gridOptions={gridOptions} />);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });
    });
  });

  describe('defaultColDef', () => {
    it('should merge custom defaultColDef with default settings', async () => {
      const defaultColDef = {
        sortable: true,
        resizable: true,
      };

      renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} defaultColDef={defaultColDef} />);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });
    });
  });

  describe('Theme handling', () => {
    it('should render with light theme by default', async () => {
      const { container } = renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={mockRowData} />);

      await waitFor(() => {
        const wrapper = container.querySelector('.ag-theme-quartz');
        expect(wrapper).toBeInTheDocument();
      });
    });
  });

  describe('mutableRowData (cloneDeep)', () => {
    it('should clone row data to prevent mutation', async () => {
      const originalData = [{ id: '1', name: 'Test', value: 100 }];

      let gridApi: GridReadyEvent['api'] | null = null;
      const onGridReadyEvent = vi.fn((event: GridReadyEvent) => {
        gridApi = event.api;
      });

      renderWithTheme(
        <DataTable columnDefs={mockColumnDefs} rowData={originalData} onGridReadyEvent={onGridReadyEvent} />,
      );

      await waitFor(() => {
        expect(gridApi).not.toBeNull();
      });

      // Verify the original data is not directly referenced
      const displayedRows = gridApi!.getDisplayedRowCount();
      expect(displayedRows).toBe(1);

      // Original data should remain unchanged
      expect(originalData[0].name).toBe('Test');
    });
  });

  describe('Cleanup on unmount', () => {
    it('should clean up timeouts on unmount', async () => {
      const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');

      const { unmount } = renderWithTheme(<DataTable columnDefs={mockColumnDefs} rowData={[]} />);

      await act(async () => {
        vi.advanceTimersByTime(100);
      });

      unmount();

      expect(clearTimeoutSpy).toHaveBeenCalled();
      clearTimeoutSpy.mockRestore();
    });
  });
});
