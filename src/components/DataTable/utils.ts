import { ColumnDef, SortOperator } from './types';

export const hasConfiguredInitialSort = (colDefs: ColumnDef<never>[], initialField?: string, initialOperator?: SortOperator) => {
  if (initialField && initialOperator) {
    return colDefs.some(({ field, sortable }) => field === initialField && sortable);
  }

  return false;
};
