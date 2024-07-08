import React, { forwardRef, useEffect } from 'react';
import { FieldError, RegisterOptions, useController, useFormContext } from 'react-hook-form';
import { FaCheck, FaExclamation } from 'react-icons/fa6';
import cx from 'clsx';

import { getCSSVariable } from '../../../utils';
import { IInputProps, Input } from '../../Input';
import './FormInput.scss';

export interface IFormInputProps extends Omit<IInputProps, 'errorMsg'> {
  name: string;
  onChange?: RegisterOptions['onChange'];
  errorMsg?: FieldError;
  withVaildationIcon?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ name, required, disabled, errorMsg, onChange, endAdornment, withVaildationIcon, ...rest }, ref) => {
    const {
      setError,
      control,
      getFieldState,
      formState: { errors },
    } = useFormContext();

    const {
      field: { value, onChange: onChangeField },
    } = useController({ name, control, disabled });

    useEffect(() => {
      if (errorMsg?.message) {
        setError(name, errorMsg);
      }
    }, [name, setError, errorMsg]);

    const isInValid = getFieldState(name).invalid;
    const isValid = !isInValid && getFieldState(name).isDirty;
    const iconValidation = isInValid ? (
      <FaExclamation color={getCSSVariable('--error')} />
    ) : isValid ? (
      <FaCheck />
    ) : undefined;

    return (
      <Input
        {...rest}
        onChange={onChange ? onChange : (e) => onChangeField(e.target.value)}
        errorMsg={errors?.[name] ? (errors[name]?.message as string) : undefined}
        endAdornment={
          <>
            <span className={cx('ui-form-input__icon', { 'ui-form-input__icon--error': isInValid })}>
              {withVaildationIcon && iconValidation}
            </span>
            {endAdornment}
          </>
        }
        required={required}
        value={value}
        ref={ref}
      />
    );
  },
);
