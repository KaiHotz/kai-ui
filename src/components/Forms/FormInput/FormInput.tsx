import { forwardRef, useEffect } from 'react';
import { FieldError, RegisterOptions, useController, useFormContext } from 'react-hook-form';

import { IInputProps, Input } from '../../Input';

export interface IFormInputProps extends Omit<IInputProps, 'errorMsg'> {
  name: string;
  onChange?: RegisterOptions['onChange'];
  errorMsg?: FieldError;
}

export const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ name, required, disabled, errorMsg, onChange, ...rest }, ref) => {
    const {
      control,
      setError,
      getFieldState,
      formState: { errors },
    } = useFormContext();

    const {
      field: { value, onChange: onChangeField },
    } = useController({ name, control, disabled });

    const isValid = !getFieldState(name).invalid && Boolean(value);

    useEffect(() => {
      if (errorMsg?.message) {
        setError(name, errorMsg);
      }
    }, [name, setError, errorMsg]);

    return (
      <Input
        {...rest}
        onChange={onChange ? onChange : (e) => onChangeField(e.target.value)}
        errorMsg={errors?.[name] ? (errors[name]?.message as string) : undefined}
        required={required}
        value={value}
        isValid={isValid}
        ref={ref}
      />
    );
  },
);
