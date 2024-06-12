import {
  CellClickedEvent,
  ColDef,
  GridOptions,
  ICellRendererParams,
  ITooltipParams,
  RowClickedEvent,
  ValueGetterParams,
} from 'ag-grid-community';

import { TNestedKeyOf } from '../../types';

interface ValueGetterParamsT<T> extends Omit<ValueGetterParams, 'data'> {
  data: T;
}
interface ValueFormatterParamsT extends Omit<ValueGetterParams, 'value'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

interface CellRendererParamsT<T> extends Omit<ICellRendererParams, 'data'> {
  data: T;
}

interface TooltipParams<T> extends ITooltipParams {
  data: T;
}

export interface ColumnDef<DataType extends NonNullable<unknown>>
  extends Omit<ColDef, 'field' | 'valueFormatter' | 'tooltipField' | 'tooltipValueGetter' | 'cellRendererParams'> {
  field?: TNestedKeyOf<DataType>;
  tooltipField?: TNestedKeyOf<DataType>;
  valueGetter?: ((params: ValueGetterParamsT<DataType>) => unknown) | string;
  cellRendererParams?: ((params: CellRendererParamsT<DataType>) => unknown) | { [key: string]: unknown };
  tooltipValueGetter?: ((params: TooltipParams<DataType>) => unknown) | string;
  valueFormatter?: ((params: ValueFormatterParamsT) => boolean | number | string | string[]) | string;
  children?: ColumnDef<DataType>[];
}
export interface DataTableRowClickedEvent<DataType> extends RowClickedEvent {
  data: DataType;
}
export interface DataTableCellClickedEvent<DataType extends NonNullable<unknown>> extends Omit<CellClickedEvent, 'colDef'> {
  data: DataType;
  colDef: ColumnDef<DataType>;
}
export interface DataTableGridOptions<DataType extends NonNullable<unknown>> extends Omit<GridOptions, 'onCellClicked'> {
  onRowClicked?: (event: DataTableRowClickedEvent<DataType>) => void;
  onCellClicked?: (event: DataTableCellClickedEvent<DataType>) => void;
}

export type SortOperator = 'asc' | 'desc';
