import { ForwardedRef, ReactNode } from 'react';
import * as yup from 'yup';
import {
  DefaultValues,
  FieldValues,
  Mode,
  SubmitErrorHandler,
  UseFormProps,
  UseFormReset,
  UseFormResetField,
  UseFormReturn,
} from 'react-hook-form';

export interface IOnsubmitProps<T extends FieldValues> {
  data: T;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
}

export interface IFormRef<T extends FieldValues> {
  methods: UseFormReturn<T, unknown, T>;
  form: HTMLFormElement | null;
}

export interface IFormProps<T extends FieldValues> extends Omit<UseFormProps<T>, 'mode'> {
  onSubmit: ({ data, reset, resetField }: IOnsubmitProps<T>) => void;
  children?: ((props: UseFormReturn<T, unknown, T>) => ReactNode) | ReactNode;
  validationSchema?: yup.ObjectSchema<T>;
  defaultValues?: DefaultValues<T>;
  onError?: SubmitErrorHandler<T>;
  disabled?: boolean;
  validationMode?: Mode;
  reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
  submitOnChange?: boolean;
  ref?: ForwardedRef<IFormRef<T>>;
}
