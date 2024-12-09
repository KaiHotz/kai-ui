import { FC, useEffect } from 'react';
import { FieldError, RegisterOptions, useController, useFormContext } from 'react-hook-form';

import { IPasswordInputProps, PasswordInput } from '../../Input';

export interface IFormPasswordInputProps extends Omit<IPasswordInputProps, 'errorMsg'> {
  name: string;
  onChange?: RegisterOptions['onChange'];
  errorMsg?: FieldError;
}

export const FormPasswordInput: FC<IFormPasswordInputProps> = ({
  name,
  required,
  disabled,
  errorMsg,
  onChange,
  ref,
  ...rest
}) => {
  const {
    setError,
    control,
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

  return (
    <PasswordInput
      {...rest}
      onChange={onChange ? onChange : (e) => onChangeField(e.target.value)}
      errorMsg={errors?.[name] ? (errors[name]?.message as string) : undefined}
      required={required}
      value={value}
      ref={ref}
    />
  );
};
