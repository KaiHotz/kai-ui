import React, { FC, ReactNode } from 'react';
import cx from 'clsx';
import './Step.scss';

export interface IStepProps {
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
  isCompleted: boolean;
  index: number;
  title: ReactNode;
  hideTitle?: boolean;
  onClick?: () => void;
  canNavigateTo?: boolean;
  testId?: string;
}

export const Step: FC<IStepProps> = ({
  isFirst,
  isLast,
  index,
  isActive,
  isCompleted,
  title,
  hideTitle,
  onClick,
  canNavigateTo,
  testId = 'ui-step',
}) => {
  return (
    <div className="ui-step" data-testid={testId}>
      {!isFirst && (
        <div
          className={cx('ui-step__line', {
            'ui-step__line--active': isActive,
            'ui-step__line--completed': isCompleted,
          })}
        />
      )}
      <div className="ui-step__button-wrapper">
        <button
          className={cx('ui-step__button', {
            'ui-step__button--active': isActive,
            'ui-step__button--completed': isCompleted,
            'ui-step__button--can-navigate-to': canNavigateTo,
          })}
          type="button"
          onClick={onClick}
          data-testid={`${testId}-btn`}
        >
          {`${index + 1}`}
        </button>
        {!hideTitle && (
          <div
            data-testid={`${testId}-title`}
            className={cx('ui-step__title', {
              'ui-step__title--active': isActive,
              'ui-step__title--completed': isCompleted,
            })}
          >
            {title}
          </div>
        )}
      </div>
      {!isLast && (
        <div
          className={cx('ui-step__line', {
            'ui-step__line--completed': isCompleted,
          })}
        />
      )}
    </div>
  );
};
