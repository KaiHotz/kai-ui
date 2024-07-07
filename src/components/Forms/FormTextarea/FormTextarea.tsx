import React, { forwardRef, useEffect } from 'react';
import { FieldError, RegisterOptions, useController, useFormContext } from 'react-hook-form';

import { ITextareaProps, Textarea } from '../../Textarea';

export interface IFormTextareaProps extends Omit<ITextareaProps, 'errorMsg'> {
  name: string;
  onChange?: RegisterOptions['onChange'];
  errorMsg?: FieldError;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, IFormTextareaProps>(
  ({ name, required, disabled, errorMsg, onChange, ...rest }, ref) => {
    const {
      formState: { errors },
      setError,
      control,
    } = useFormContext();

    const {
      field: { value, onChange: onChangeField },
    } = useController({ name, control, disabled });

    useEffect(() => {
      if (errorMsg?.message) {
        setError(name, errorMsg);
      }
    }, [name, setError, errorMsg]);

    return (
      <Textarea
        {...rest}
        onChange={onChange ? onChange : (e) => onChangeField(e.target.value)}
        errorMsg={errors?.[name] ? (errors[name]?.message as string) : undefined}
        required={required}
        value={value}
        ref={ref}
      />
    );
  },
);
