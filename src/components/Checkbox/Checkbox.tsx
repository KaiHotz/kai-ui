import { FC, InputHTMLAttributes, Ref } from 'react';
import cx from 'clsx';

import { ILabelProps, Label } from '../Label';
import { Hint } from '../Hint';
import './Checkbox.scss';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: 'left' | 'right';
  labelEndAdornment?: ILabelProps['endAdornment'];
  variant?: 'checkmark' | 'square';
  hintText?: string;
  errorMsg?: string;
  reserveSpaceForError?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export const Checkbox: FC<ICheckboxProps> = ({
  name,
  label,
  labelPosition = 'right',
  labelEndAdornment,
  required,
  disabled,
  hintText,
  checked,
  errorMsg,
  variant = 'checkmark',
  reserveSpaceForError,
  ref,
  ...rest
}) => {
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);

  return (
    <div
      className={cx('ui-checkbox', {
        'ui-checkbox--disabled': disabled,
        'ui-checkbox--square-checked': checked && variant === 'square',
        'ui-checkbox--checkmark-checked': checked && variant === 'checkmark',
      })}
    >
      <div className="ui-checkbox__wrapper">
        <Label
          text={label}
          required={required}
          disabled={disabled}
          position={labelPosition}
          endAdornment={labelEndAdornment}
        >
          <div className="ui-checkbox__input-wrapper">
            <input
              id={name}
              required={required}
              disabled={disabled}
              checked={checked}
              ref={ref}
              {...rest}
              type="checkbox"
              aria-hidden="true"
            />
            <div className="ui-checkbox__icon" />
          </div>
        </Label>
      </div>
      {shouldShowValidationWrapper && (
        <div className="ui-checkbox__validation-wrapper">
          {errorMsg && <Hint variant="error">{errorMsg}</Hint>}
          {!errorMsg && hintText && <Hint>{hintText}</Hint>}
        </div>
      )}
    </div>
  );
};
