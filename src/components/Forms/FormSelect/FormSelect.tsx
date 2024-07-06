import React, { MutableRefObject, useEffect, useImperativeHandle } from 'react';
import { AsyncProps } from 'react-select/async';
import { ActionMeta, GroupBase, Props as SelectProps, SingleValue } from 'react-select';
import { FieldError, useController, useFormContext } from 'react-hook-form';
import { noop } from 'lodash';

import { ILabelProps } from '../../Label';
import { AsyncSelect, ISelectOption, Select } from '../../Select';

interface ICustomFieldError extends FieldError {
  label: FieldError;
  value: FieldError;
}

export interface IFormSelectProps<OptionType extends ISelectOption, IsMulti extends boolean = false>
  extends SelectProps<OptionType, IsMulti>,
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
  const { control, setError } = useFormContext();
  const {
    field: { value, onChange: onOptionChange, onBlur },
    fieldState: { error },
  } = useController({ name, control });

  const onHandleChange = (option: SingleValue<OptionType>, action: ActionMeta<OptionType>) => {
    onOptionChange(option);
    onChange(option, action);
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

  return loadOptions ? (
    <AsyncSelect
      {...rest}
      defaultOptions={defaultOptions}
      value={value}
      errorMsg={
        error?.message || (error as ICustomFieldError)?.value.message || (error as ICustomFieldError)?.label.message
      }
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
      errorMsg={
        error?.message || (error as ICustomFieldError)?.value.message || (error as ICustomFieldError)?.label.message
      }
      onChange={onHandleChange}
      reserveSpaceForError={reserveSpaceForError}
      placeholder={placeholder}
      required={required}
      small={small}
    />
  );
};
