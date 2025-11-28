import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputFilter } from './InputFilter';
import { DataTable } from '../DataTable';
import { ColumnDef } from '../types';

interface TableData {
  id: string;
  first_name: string;
  last_name: string;
}

const rowData: TableData[] = [
  { id: '1', first_name: 'First name 1', last_name: 'Last name 1' },
  { id: '2', first_name: 'First name 2', last_name: 'Last name 2' },
  { id: '3', first_name: 'First name 3', last_name: 'Last name 3' },
  { id: '4', first_name: 'First name 4', last_name: 'Last name 4' },
  { id: '5', first_name: 'First name 5', last_name: 'Last name 5' },
  { id: '6', first_name: 'First name 6', last_name: 'Last name 6' },
];

const columnDefs: ColumnDef<TableData>[] = [
  {
    headerName: 'First name',
    field: 'first_name',
    flex: 1,
    sortable: true,
    filter: 'agTextColumnFilter', // Explicitly specify text filter
    floatingFilter: true,
    floatingFilterComponent: InputFilter,
    floatingFilterComponentParams: {
      placeholder: 'Filter by first name...',
      submitOnChange: true,
    },
  },
  {
    headerName: 'Last name',
    field: 'last_name',
    flex: 1,
    sortable: true,
    floatingFilter: true,
    filter: 'agTextColumnFilter', // Explicitly specify text filter
    floatingFilterComponent: InputFilter,
    floatingFilterComponentParams: {
      placeholder: 'Filter by last name...',
      submitOnChange: true,
    },
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable/floatingFilters',
  component: DataTable,
  argTypes: {
    gridOptions: {
      control: false,
    },
    className: {
      control: false,
    },
  },
  args: {
    rowData,
    loadingMessage: 'Loading message',
    noRowsMessage: 'No rows message',
    isAutoHeight: true,
    isLoading: false,
    disableFitSizeColumns: false,
  },
};

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: (args) => {
    return <DataTable {...args} />;
  },
  args: {
    columnDefs: columnDefs as ColumnDef<NonNullable<unknown>>[],
  },
};

export default meta;
