import { ReactNode } from 'react';
import * as yup from 'yup';
import { DefaultValues, FieldValues, Mode, SubmitErrorHandler, UseFormReset, UseFormResetField, UseFormReturn } from 'react-hook-form';

export interface IOnsubmitProps<T extends FieldValues> {
  data: T;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
}

export interface IFormProps<T extends FieldValues> {
  children?: ((props: UseFormReturn<T, unknown, T>) => ReactNode) | ReactNode;
  onSubmit: ({ data, reset, resetField }: IOnsubmitProps<T>) => void;
  validationSchema?: yup.ObjectSchema<T>;
  reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
  disabled?: boolean;
  defaultValues?: DefaultValues<T>;
  onError?: SubmitErrorHandler<T>;
  validationMode?: Mode;
  submitOnChange?: boolean;
  shouldFocusError?: boolean;
  shouldUnregister?: boolean;
}
