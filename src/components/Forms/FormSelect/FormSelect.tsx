import React, { MutableRefObject, useEffect, useImperativeHandle } from 'react';
import { AsyncProps } from 'react-select/async';
import { ActionMeta, GroupBase, Props as ReactSelectProps, SingleValue } from 'react-select';
import { FieldError, useController, useFormContext } from 'react-hook-form';
import noop from 'lodash/noop';

import { ILabelProps } from '../../Label';
import { AsyncSelect, ISelectOption, Select } from '../../Select';

export interface IFormSelectFieldError extends FieldError {
  label: FieldError;
  value: FieldError;
}

export interface IFormSelectProps<OptionType extends ISelectOption, IsMulti extends boolean = false>
  extends ReactSelectProps<OptionType, IsMulti>,
    AsyncProps<OptionType, IsMulti, GroupBase<OptionType>> {
  name: string;
  small?: boolean;
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  required?: boolean;
  hintText?: string;
  errorMsg?: FieldError;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  isCreatable?: boolean;
  options?: OptionType[];
  selectRef?: MutableRefObject<{
    setValue?: (option: ISelectOption) => void;
    onBlur?: () => void;
  }>;
}

export const FormSelect = <OptionType extends ISelectOption>({
  name,
  options,
  required,
  defaultOptions,
  reserveSpaceForError,
  loadOptions,
  errorMsg,
  onChange = noop,
  placeholder,
  selectRef,
  small,
  ...rest
}: IFormSelectProps<OptionType>) => {
  const { control, setError, resetField, getFieldState } = useFormContext();
  const {
    field: { value, onChange: onOptionChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  const onHandleChange = (option: SingleValue<OptionType>, triggeredAction: ActionMeta<OptionType>) => {
    if (triggeredAction.action === 'clear') {
      resetField(name);
    } else {
      onOptionChange(option);
      onChange(option, triggeredAction);
    }
  };

  useImperativeHandle(selectRef, () => ({
    setValue: onOptionChange,
    onBlur,
  }));

  useEffect(() => {
    if (errorMsg) {
      setError(name, errorMsg);
    }
  }, [name, setError, errorMsg]);

  const selectErrorMsg =
    error?.message ||
    (error as IFormSelectFieldError)?.value.message ||
    (error as IFormSelectFieldError)?.label.message;

  const isValid = !getFieldState(name).invalid && Boolean(value);

  return loadOptions ? (
    <AsyncSelect
      {...rest}
      defaultOptions={defaultOptions}
      value={value}
      errorMsg={selectErrorMsg}
      isValid={isValid}
      onChange={onHandleChange}
      loadOptions={loadOptions}
      reserveSpaceForError={reserveSpaceForError}
      placeholder={placeholder}
      required={required}
      small={small}
    />
  ) : (
    <Select
      {...rest}
      options={options || []}
      value={value}
      errorMsg={selectErrorMsg}
      isValid={isValid}
      onChange={onHandleChange}
      reserveSpaceForError={reserveSpaceForError}
      placeholder={placeholder}
      required={required}
      small={small}
    />
  );
};
