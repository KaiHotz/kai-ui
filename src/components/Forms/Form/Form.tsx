import { ForwardedRef, ReactNode, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Resolver,
  SubmitErrorHandler,
  useForm,
  UseFormReset,
  UseFormResetField,
  UseFormReturn,
  useWatch,
  ValidationMode,
} from 'react-hook-form';

export interface IOnsubmitProps<T extends FieldValues> {
  data: T;
  reset: UseFormReset<T>;
  resetField: UseFormResetField<T>;
}

export interface IFormProps<T extends FieldValues> {
  onSubmit: ({ data, reset, resetField }: IOnsubmitProps<T>) => void;
  children?: ((props: UseFormReturn<T, unknown, T>) => ReactNode) | ReactNode;
  validationSchema?: yup.ObjectSchema<T>;
  defaultValues?: DefaultValues<T>;
  onError?: SubmitErrorHandler<T>;
  disabled?: boolean;
  validationMode?: keyof ValidationMode;
  submitOnChange?: boolean;
  ref?: ForwardedRef<UseFormReturn<T, unknown, T>>;
}

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  onError,
  validationSchema,
  defaultValues,
  disabled,
  validationMode = 'onSubmit',
  submitOnChange,
  ref,
  ...rest
}: IFormProps<T>) {
  const hasMounted = useRef(false);
  const methods = useForm<T>({
    //due to a type error in react-hook-form/resolvers, we need to cast the yupResolver to Resolver<T>
    resolver: validationSchema ? (yupResolver(validationSchema) as unknown as Resolver<T>) : undefined,
    defaultValues,
    disabled,
    mode: validationMode,
  });

  useImperativeHandle(ref, () => {
    return methods;
  }, [methods]);

  const { handleSubmit, reset, resetField } = methods;

  const watchedValues = useWatch<T>({ control: methods.control });

  const handleFormSubmit = useCallback(
    (data: T) => onSubmit({ data, reset, resetField }),
    [onSubmit, reset, resetField],
  );

  const handleFormReset = useCallback(() => reset(), [reset]);

  useEffect(() => {
    if (!submitOnChange) {
      return;
    }

    if (!hasMounted.current) {
      hasMounted.current = true;

      return;
    }

    void handleSubmit(handleFormSubmit)();
  }, [watchedValues, handleFormSubmit, handleSubmit, submitOnChange]);

  return (
    <FormProvider {...methods}>
      <form {...rest} onSubmit={handleSubmit(handleFormSubmit, onError)} onReset={handleFormReset}>
        {typeof children === 'function' ? children({ ...methods }) : children}
      </form>
    </FormProvider>
  );
}
