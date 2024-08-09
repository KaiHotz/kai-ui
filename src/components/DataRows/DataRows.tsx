import React, { Fragment, ReactNode } from 'react';
import cx from 'clsx';
import get from 'lodash/get';
import { FaChevronRight } from 'react-icons/fa6';

import { IDataRowsProps } from './types';
import './DataRows.scss';

export const DataRows = <DataType extends NonNullable<unknown>>({
  data,
  rowDef,
  hasDivider = true,
}: IDataRowsProps<DataType>) => {
  const visibleRows = rowDef.filter((row) => (typeof row.hide === 'function' ? !row.hide(data) : !row.hide));

  return (
    <div className="ui-data-rows">
      {visibleRows.map(({ field, label, valueFormatter, onClick }, idx) => {
        const value = valueFormatter
          ? typeof valueFormatter === 'function'
            ? valueFormatter(data)
            : valueFormatter
          : field
            ? get(data, field)
            : '';

        const rowLabel = typeof label === 'function' ? label(data) : label;

        const handleRowClick = () => {
          if (onClick) {
            onClick(data);
          }
        };

        return (
          <Fragment key={rowLabel}>
            <div
              onClick={handleRowClick}
              role="button"
              tabIndex={idx}
              className={cx('ui-data-rows__row', {
                'ui-data-rows__row--divider': hasDivider,
                'ui-data-rows__row--clickable': !!onClick,
              })}
            >
              <div className="ui-data-rows__label">{rowLabel}</div>
              <div className="ui-data-rows__value">
                {value as ReactNode}
                {!!onClick && <FaChevronRight />}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
