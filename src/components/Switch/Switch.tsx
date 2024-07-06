import React, { forwardRef } from 'react';
import cx from 'clsx';

import './Switch.scss';
import { ILabelProps, Label } from '../Label';

export interface ISwitchProps {
  name?: string;
  value?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium';
  label?: string;
  labelPosition?: ILabelProps['position'];
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  testId?: string;
}

export const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
  (
    {
      onChange,
      disabled,
      name,
      value,
      label,
      labelPosition = 'right',
      size = 'medium',
      testId = 'ui-switch',
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <Label text={label} position={labelPosition}>
        <span
          className={cx(
            'ui-switch',
            {
              'ui-switch--disabled': disabled,
              'ui-switch--small': size === 'small',
              'ui-switch--medium': size === 'medium',
            },
            className,
          )}
          data-testid={testId}
        >
          <input
            className="ui-switch__input"
            onChange={onChange}
            ref={ref}
            {...rest}
            name={name}
            checked={value}
            disabled={disabled}
            type="checkbox"
            data-testid={`${testId}-input`}
          />
          <span className="ui-switch__slider" data-testid={`${testId}-slider`} />
        </span>
      </Label>
    );
  },
);
