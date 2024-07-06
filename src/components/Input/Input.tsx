import React, { forwardRef, InputHTMLAttributes, ReactElement, useState } from 'react';
import cx from 'clsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

import { ILabelProps, Label } from '../Label';
import { Button } from '../Button';
import { Hint } from '../Hint';

import './Input.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  hintText?: string;
  errorMsg?: string;
  hideError?: boolean;
  small?: boolean;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  startAdornment?: string | ReactElement;
  endAdornment?: string | ReactElement;
  passwordToggle?: boolean;
  passwordToggleTooltip?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      name,
      type,
      label,
      labelPosition = 'top',
      small,
      disabled,
      hintText,
      errorMsg,
      hideError,
      placeholder,
      reserveSpaceForError,
      startAdornment,
      endAdornment,
      labelEndAdornment,
      passwordToggle,
      passwordToggleTooltip,
      required,
      ...rest
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const shouldShowValidationWrapper = Boolean(reserveSpaceForError || (errorMsg && !hideError) || hintText);
    const placeholderText = `${placeholder}${required ? ' *' : ''}`;
    const iconSize = small ? 14 : 18;

    return (
      <div
        className={cx('ui-input', {
          'ui-input--error': errorMsg,
          'ui-input--disabled': disabled,
        })}
      >
        <Label
          text={label}
          htmlFor={name}
          required={required}
          disabled={disabled}
          isError={!!errorMsg}
          position={labelPosition}
          endAdornment={labelEndAdornment}
          className="ui-input__label"
          small={small}
        >
          <div
            className={cx('ui-input__wrapper', {
              'ui-input__wrapper--small': small,
              'ui-input__wrapper--error': errorMsg,
              'ui-input__wrapper--disabled': disabled,
            })}
          >
            {startAdornment && <div className="ui-input__start-adornment">{startAdornment}</div>}
            <input
              ref={ref}
              name={name}
              type={showPassword ? 'text' : type}
              placeholder={placeholderText}
              disabled={disabled}
              {...rest}
            />
            {type === 'password'
              ? (endAdornment || passwordToggle) && (
                  <div className="ui-input__end-adornment">
                    {endAdornment}
                    {passwordToggle && (
                      <Button
                        variant="ghost"
                        title={passwordToggleTooltip}
                        icon={showPassword ? <FaEye size={iconSize} /> : <FaEyeSlash size={iconSize} />}
                        onClick={toggleShowPassword}
                      />
                    )}
                  </div>
                )
              : endAdornment && <div className="ui-input__end-adornment">{endAdornment}</div>}
          </div>
        </Label>
        {shouldShowValidationWrapper && (
          <div className="ui-input__validation-wrapper">
            <div className="ui-input__validation-messages">
              {errorMsg && (
                <Hint className="ui-input__error-msg" variant="error">
                  {errorMsg}
                </Hint>
              )}
              {!errorMsg && hintText && <Hint className="ui-input__hint-text">{hintText}</Hint>}
            </div>
          </div>
        )}
      </div>
    );
  },
);
