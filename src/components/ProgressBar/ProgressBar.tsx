import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import { clamb } from '../../utils';
import './styles.scss';

export interface IProgressBarProps {
  variant?: 'primary' | 'darkGray' | 'lightGray' | 'blue';
  total: number;
  value: number;
  valueMessage?: ReactNode;
  totalMessage?: ReactNode;
  testId?: string;
}

export const ProgressBar: FC<IProgressBarProps> = ({
  value,
  total,
  valueMessage = value,
  totalMessage = total,
  variant = 'blue',
  testId = 'ui-progress-bar',
}) => {
  const percents = Math.round((value * 100) / total);

  return (
    <div
      data-testid={testId}
      className={cx('ui-progress-bar', {
        'ui-progress-bar--primary': variant === 'primary',
        'ui-progress-bar--dark-gray': variant === 'darkGray',
        'ui-progress-bar--light-gray': variant === 'lightGray',
        'ui-progress-bar--blue': variant === 'blue',
      })}
    >
      <div className="ui-progress-bar__labels" data-testid={`${testId}-labels`}>
        <div data-testid={`${testId}-value`}>{valueMessage}</div>
        <div className="ui-progress-bar__label-right" data-testid={`${testId}-total`}>
          {totalMessage}
        </div>
      </div>
      <div className="ui-progress-bar__progress">
        <div
          data-testid={`${testId}-progress`}
          className="ui-progress-bar__fill"
          style={{ width: `${clamb(0, percents, 100)}%` }}
        />
      </div>
    </div>
  );
};
