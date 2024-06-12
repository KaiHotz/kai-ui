import { forwardRef, useImperativeHandle, useCallback } from 'react';
import { IDoesFilterPassParams } from 'ag-grid-community';
import { CustomFilterProps, useGridFilter } from 'ag-grid-react';

/** @see https://www.ag-grid.com/documentation/react/component-filter/#react-filtering */
interface FilterModel {
  value: string | number | (string | null)[] | null;
}

export const VirtualFilter = forwardRef(({ getValue }: CustomFilterProps, ref) => {
  const doesFilterPass = useCallback(
    (params: IDoesFilterPassParams) => {
      const { node } = params;

      const value = getValue<FilterModel>(node);

      if (value === null) {
        return false;
      }

      return true;
    },
    [getValue],
  );

  useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return false;
      },
    };
  });

  useGridFilter({
    doesFilterPass,
  });

  return null;
});
