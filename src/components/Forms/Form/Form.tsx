import { useCallback, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, FormProvider, Resolver, useForm } from 'react-hook-form';

import { IFormProps } from './types';

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  onError,
  validationSchema,
  defaultValues,
  disabled,
  validationMode = 'onSubmit',
  reValidateMode,
  submitOnChange,
  shouldFocusError = true,
  shouldUnregister = false,
  ...rest
}: IFormProps<T>) {
  const methods = useForm<T>({
    resolver: validationSchema ? (yupResolver(validationSchema) as unknown as Resolver<T>) : undefined,
    defaultValues,
    disabled,
    mode: validationMode,
    reValidateMode,
    shouldFocusError,
    shouldUnregister,
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
      <form {...rest} onSubmit={handleSubmit(handleFormSubmit, onError)} onReset={handleFormReset}>
        {typeof children === 'function' ? children({ ...methods }) : children}
      </form>
    </FormProvider>
  );
}
