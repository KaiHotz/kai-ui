import { FormHTMLAttributes, ReactNode } from 'react';
import * as yup from 'yup';
import { FieldValues, Mode, SubmitErrorHandler, UseFormProps, UseFormReset, UseFormResetField, UseFormReturn } from 'react-hook-form';

export interface IOnsubmitProps<T extends FieldValues> {
  data: T;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
}

export type TFormProps<T extends FieldValues> = Omit<UseFormProps<T>, 'mode' | 'resolver'> & {
  children?: ((props: UseFormReturn<T, unknown, T>) => ReactNode) | ReactNode;
  onSubmit: ({ data, reset, resetField }: IOnsubmitProps<T>) => void;
  validationSchema?: yup.ObjectSchema<T>;
  validationMode?: Mode;
  onError?: SubmitErrorHandler<T>;
  submitOnChange?: boolean;
  formProps?: FormHTMLAttributes<HTMLFormElement>;
};
