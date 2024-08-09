import { ReactNode } from 'react';

import { TNestedKeyOf } from '../../types';

export type IDataRowsdDef<DataType extends NonNullable<unknown>> = {
  label: ((data: DataType) => string) | string;
  field?: TNestedKeyOf<DataType>;
  valueFormatter?: ((value: DataType) => ReactNode) | ReactNode;
  hide?: ((data: DataType) => boolean) | boolean;
  onClick?: (data: DataType) => void;
};

export type IDataRowsProps<T extends NonNullable<unknown>> = {
  data: T;
  rowDef: IDataRowsdDef<T>[];
  hasDivider?: boolean;
};
