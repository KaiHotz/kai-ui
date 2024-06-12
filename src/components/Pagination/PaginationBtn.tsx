import React, { FC, ReactNode, useCallback } from 'react';
import cx from 'clsx';

export interface IPaginationBtnProps {
  isDisabled?: boolean;
  page?: number;
  icon?: ReactNode;
  onClick: (page: number) => void;
  testId?: string;
}

export const PaginationBtn: FC<IPaginationBtnProps> = ({
  isDisabled = false,
  page = 0,
  icon,
  onClick,
  testId = 'ui-pagination-btn',
}) => {
  const hanldeClick = useCallback(() => {
    if (!isDisabled) {
      onClick(page);
    }
  }, [isDisabled, onClick, page]);

  return (
    <div
      className={cx('ui-pagination-btn', {
        'ui-pagination-btn--disabled': isDisabled,
      })}
      onClick={hanldeClick}
      role="presentation"
      data-testid={testId}
    >
      {icon}
    </div>
  );
};
