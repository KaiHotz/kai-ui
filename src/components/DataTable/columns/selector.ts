import { ColumnDef } from '../types';

export const selectorColumn = <DataType extends NonNullable<unknown>>(extra: ColumnDef<DataType> = {}): ColumnDef<DataType> => ({
  colId: 'checkbox',
  minWidth: 28,
  maxWidth: 28,
  sortable: false,
  ...extra,
});
