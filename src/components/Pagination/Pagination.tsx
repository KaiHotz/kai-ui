import React, { FC, useCallback } from 'react';
import cx from 'clsx';
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

import { PaginationBtn } from './PaginationBtn';
import './Pagination.scss';

export interface IPaginationProps {
  current: number;
  pages: number;
  onChange: (page: number) => void;
  fullPagination?: boolean;
  small?: boolean;
  testId?: string;
}

export const Pagination: FC<IPaginationProps> = ({
  current = 1,
  pages,
  onChange,
  small,
  fullPagination = false,
  testId = 'ui-pagination',
}) => {
  const iconSIze = small ? 14 : 16;

  const setCurrentPage = useCallback(
    (page: number) => {
      onChange(page);
    },
    [onChange],
  );

  const pageFirst = useCallback(() => {
    setCurrentPage(0);
  }, [setCurrentPage]);

  const pagePrev = useCallback(() => {
    if (current > 0) {
      setCurrentPage(current - 1);
    }
  }, [current, setCurrentPage]);

  const pageNext = useCallback(() => {
    if (current + 1 < pages) {
      setCurrentPage(current + 1);
    }
  }, [current, pages, setCurrentPage]);

  const pageLast = useCallback(() => {
    setCurrentPage(pages - 1);
  }, [pages, setCurrentPage]);

  const isDisabledLeftIcons = current === 0;
  const isDisabledRightIcons = current + 1 === Math.max(1, pages);

  return (
    <div className={cx('ui-pagination', { 'ui-pagination--small': small })} data-testid={testId}>
      {fullPagination && (
        <PaginationBtn
          icon={
            <FaAnglesLeft
              size={iconSIze}
              className={cx('ui-pagination__icon', { 'ui-pagination__icon--disabled': isDisabledLeftIcons })}
            />
          }
          isDisabled={isDisabledLeftIcons}
          key="first_page"
          onClick={pageFirst}
          testId={`${testId}-first-btn`}
        />
      )}
      <PaginationBtn
        icon={
          <FaAngleLeft
            size={iconSIze}
            className={cx('ui-pagination__icon', { 'ui-pagination__icon--disabled': isDisabledLeftIcons })}
          />
        }
        isDisabled={isDisabledLeftIcons}
        key="page_prev"
        onClick={pagePrev}
        testId={`${testId}-prev-btn`}
      />

      <div className="ui-pagination__description">
        <span>Page</span>
        <span className="ui-pagination__number">{`${current + 1}`}</span>
        <span>of</span>
        <span className="ui-pagination__number">{`${pages}`}</span>
      </div>

      <PaginationBtn
        icon={
          <FaAngleRight
            size={iconSIze}
            className={cx('ui-pagination__icon', { 'ui-pagination__icon--disabled': isDisabledRightIcons })}
          />
        }
        isDisabled={isDisabledRightIcons}
        key="page_next"
        onClick={pageNext}
        testId={`${testId}-next-btn`}
      />
      {fullPagination && (
        <PaginationBtn
          icon={
            <FaAnglesRight
              size={iconSIze}
              className={cx('ui-pagination__icon', { 'ui-pagination__icon--disabled': isDisabledRightIcons })}
            />
          }
          isDisabled={isDisabledRightIcons}
          key="last_page"
          onClick={pageLast}
          testId={`${testId}-last-btn`}
        />
      )}
    </div>
  );
};
