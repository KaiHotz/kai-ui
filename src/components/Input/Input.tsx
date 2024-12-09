import { FC, InputHTMLAttributes, ReactElement, Ref } from 'react';
import cx from 'clsx';

import { ILabelProps, Label } from '../Label';
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
  isValid?: boolean;
  reserveSpaceForError?: boolean;
  startAdornment?: string | ReactElement;
  endAdornment?: string | ReactElement;
  ref?: Ref<HTMLInputElement>;
}

export const Input: FC<IInputProps> = ({
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
  required,
  isValid,
  ref,
  ...rest
}) => {
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || (errorMsg && !hideError) || hintText);
  const placeholderText = `${placeholder}${required && !label ? ' *' : ''}`;

  return (
    <div className="ui-input">
      <Label
        text={label}
        htmlFor={name}
        required={required}
        disabled={disabled}
        position={labelPosition}
        endAdornment={labelEndAdornment}
        small={small}
      >
        <div
          className={cx('ui-input__wrapper', {
            'ui-input__wrapper--small': small,
            'ui-input__wrapper--error': errorMsg,
            'ui-input__wrapper--success': isValid && !errorMsg,
            'ui-input__wrapper--disabled': disabled,
          })}
        >
          {startAdornment && <div className="ui-input__start-adornment">{startAdornment}</div>}
          <input ref={ref} name={name} type={type} placeholder={placeholderText} disabled={disabled} {...rest} />
          {endAdornment && <div className="ui-input__end-adornment">{endAdornment}</div>}
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
};
