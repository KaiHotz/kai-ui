import { useCallback, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, FormProvider, Resolver, useForm } from 'react-hook-form';

import { TFormProps } from './types';

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  validationSchema,
  onError,
  defaultValues,
  disabled,
  validationMode = 'onChange',
  reValidateMode = 'onChange',
  submitOnChange,
  shouldFocusError = true,
  shouldUnregister = false,
  formProps,
  ...rest
}: TFormProps<T>) {
  const methods = useForm<T>({
    resolver: validationSchema ? (yupResolver(validationSchema) as unknown as Resolver<T>) : undefined,
    defaultValues,
    disabled,
    mode: validationMode,
    reValidateMode,
    shouldFocusError,
    shouldUnregister,
    ...rest,
  });

  const { handleSubmit, reset, watch, resetField } = methods;

  const handleFormSubmit = useCallback(
    (data: T) => onSubmit({ data, reset, resetField }),
    [onSubmit, reset, resetField],
  );

  const handleFormReset = useCallback(() => reset(), [reset]);

  useEffect(() => {
    if (!submitOnChange) {
      return;
    }
    // eslint-disable-next-line react-hooks/incompatible-library -- react-hook-form provides a stable watch function for subscription usage
    const subscription = watch(() => handleSubmit(handleFormSubmit)());

    return () => subscription.unsubscribe();
  }, [handleFormSubmit, handleSubmit, submitOnChange, watch]);

  return (
    <FormProvider {...methods}>
      <form {...formProps} onSubmit={handleSubmit(handleFormSubmit, onError)} onReset={handleFormReset}>
        {typeof children === 'function' ? children({ ...methods }) : children}
      </form>
    </FormProvider>
  );
}
