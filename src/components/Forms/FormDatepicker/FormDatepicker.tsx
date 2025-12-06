import { FC, useEffect } from 'react';
import { FieldError, useController, useFormContext } from 'react-hook-form';

import { Datepicker, TDatepickerProps } from '../../DatePicker';

export interface IFormDatepickerProps extends Omit<TDatepickerProps, 'onChange' | 'errorMsg'> {
  name: string;
  onChange?: (date: Date | Array<Date | null> | Date[] | null) => void;
  errorMsg?: FieldError;
}

export const FormDatepicker: FC<IFormDatepickerProps> = ({ name, required, errorMsg, ...rest }) => {
  const { control, setError, getFieldState } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  useEffect(() => {
    if (errorMsg) {
      setError(name, errorMsg);
    }
  }, [name, setError, errorMsg]);

  const isValid = !getFieldState(name).invalid && Boolean(value);

  return (
    <Datepicker
      {...rest}
      name={name}
      required={required}
      onChange={(date) => onChange(date)}
      value={value}
      errorMsg={error?.message}
      selected={value}
      isValid={isValid}
    />
  );
};
