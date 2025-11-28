import { ChangeEvent, FC, FocusEvent, Ref } from 'react';
import cx from 'clsx';

import './Switch.scss';
import { ILabelProps, Label } from '../Label';

export interface ISwitchProps {
  name?: string;
  value?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  testId?: string;
  ref?: Ref<HTMLInputElement>;
}

export const Switch: FC<ISwitchProps> = ({
  onChange,
  disabled,
  name,
  value,
  label,
  labelPosition = 'right',
  labelEndAdornment,
  size = 'medium',
  testId = 'ui-switch',
  className,
  ref,
  ...rest
}) => {
  return (
    <Label text={label} position={labelPosition} endAdornment={labelEndAdornment}>
      <span
        className={cx(
          `ui-switch ui-switch--${size}`,
          {
            'ui-switch--disabled': disabled,
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
};
