/* eslint-disable no-console */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FaPencil, FaGear, FaTrashCan } from 'react-icons/fa6';

import { DataTable } from './DataTable';
import { selectorColumn } from './columns';
import { ActionsCellRenderer, PseudoLinkCellRenderer } from './renderers';
import { ColumnDef } from './types';

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
  },
  {
    headerName: 'Pseudo Link Cell renderer',
    field: 'last_name',
    flex: 1,
    cellRenderer: PseudoLinkCellRenderer,
    cellRendererParams: ({ data }) => ({
      onClick: () => {
        console.log({ data });
      },
    }),
  },
];

const columnDefsWithLargeheaderText: ColumnDef<TableData>[] = [
  {
    headerName: 'This is a large header text that wraps into multiple lines',
    field: 'first_name',
    width: 200,
    sortable: true,
  },
  {
    headerName: 'Last name',
    field: 'last_name',
    flex: 1,
    sortable: true,
  },
];

const columnDefsWithSelector: ColumnDef<TableData>[] = [
  selectorColumn(),
  {
    headerName: 'First name',
    field: 'first_name',
    flex: 1,
    sortable: true,
  },
  {
    headerName: 'Last name',
    field: 'last_name',
    flex: 1,
  },
];

const columnDefsWithActions: ColumnDef<TableData>[] = [
  {
    headerName: 'First name',
    field: 'first_name',
    flex: 1,
    sortable: true,
  },
  {
    headerName: 'Last name',
    field: 'last_name',
    flex: 1,
  },
  {
    headerName: 'Actions',
    width: 150,
    field: 'id',
    pinned: 'right',
    cellClass: 'text-center',
    headerClass: 'text-center',
    suppressSizeToFit: true,
    cellRenderer: ActionsCellRenderer,
    cellRendererParams: {
      actions: [
        {
          Icon: FaPencil,
          tooltip: 'Edit',
          onClick: (row: TableData) => {
            console.log('Edit', row);
          },
        },
        {
          Icon: FaGear,
          tooltip: 'Config',
          checkVisibility: (row: TableData) => row.first_name !== 'First name 4',
          onClick: (row: TableData) => {
            console.log('Config', row);
          },
        },
        {
          Icon: FaTrashCan,
          tooltip: 'Trash',
          onClick: (row: TableData) => {
            console.log('Trash', row);
          },
        },
      ],
    },
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Table/DataTable',
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

export const WithSelectorColumn: Story = {
  render: function useTable(args) {
    const [selected, setSelected] = useState<NonNullable<unknown>[]>([]);

    console.log(selected);

    return <DataTable {...args} onChangeSelection={setSelected} />;
  },
  args: {
    columnDefs: columnDefsWithSelector as ColumnDef<NonNullable<unknown>>[],
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
  },
};

export const WithActionColumn: Story = {
  render: (args) => {
    return <DataTable {...args} />;
  },
  args: {
    columnDefs: columnDefsWithActions as ColumnDef<NonNullable<unknown>>[],
  },
};

export const WithMultiLineHeader: Story = {
  render: (args) => {
    return <DataTable {...args} />;
  },
  args: {
    columnDefs: columnDefsWithLargeheaderText as ColumnDef<NonNullable<unknown>>[],
  },
};

export default meta;
