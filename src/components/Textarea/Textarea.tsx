import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import { ILabelProps, Label } from '../Label';
import { Hint } from '../Hint';
import './Textarea.scss';

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  hintText?: string;
  errorMsg?: string;
  reserveSpaceForError?: boolean;
  testId?: string;
  children?: ReactNode;
  isValid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      label,
      labelPosition = 'top',
      labelEndAdornment,
      children,
      errorMsg,
      hintText,
      onChange,
      disabled,
      required,
      reserveSpaceForError,
      value,
      name,
      placeholder,
      maxLength,
      isValid,
      testId = 'ui-textarea',
      ...rest
    },
    ref,
  ) => {
    const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText || maxLength);
    const symbolsLength = typeof value === 'string' ? value?.length : 0;

    return (
      <div
        className={cx('ui-textarea', {
          'ui-textarea--error': errorMsg,
          'ui-textarea--success': isValid && !errorMsg,
          'ui-textarea--disabled': disabled,
        })}
      >
        <Label text={label} required={required} position={labelPosition} endAdornment={labelEndAdornment}>
          <textarea
            ref={ref}
            name={name}
            data-testid={testId}
            placeholder={placeholder}
            onChange={disabled ? undefined : onChange}
            value={value}
            disabled={disabled}
            {...rest}
          >
            {children}
          </textarea>
        </Label>
        {shouldShowValidationWrapper && (
          <div className="ui-textarea__validation-wrapper">
            <div className="ui-textarea__validation-messages">
              {errorMsg && (
                <Hint className="ui-textarea__error-message" variant="error">
                  {errorMsg}
                </Hint>
              )}
              {!errorMsg && hintText && <Hint className="ui-textarea__hint-text">{hintText}</Hint>}
            </div>
            {!disabled && !!maxLength && (
              <div className="ui-textarea__validation-counter">
                <Hint variant={symbolsLength > maxLength ? 'error' : 'info'}>{`${symbolsLength} / ${maxLength}`}</Hint>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
