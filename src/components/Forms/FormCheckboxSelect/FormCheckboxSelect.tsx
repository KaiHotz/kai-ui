import { MutableRefObject, useEffect, useImperativeHandle } from 'react';
import { ActionMeta, Props as ReactSelectProps, SingleValue } from 'react-select';
import { FieldError, useController, useFormContext } from 'react-hook-form';
import noop from 'lodash/noop';

import { ILabelProps } from '../../Label';
import { IFormSelectFieldError } from '../FormSelect';
import { CheckboxSelect, ISelectOption } from '../../Select';

export interface IFormCheckboxSelectProps<OptionType extends ISelectOption, IsMulti extends boolean = false>
  extends ReactSelectProps<OptionType, IsMulti> {
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

export const FormCheckboxSelect = <OptionType extends ISelectOption>({
  name,
  options,
  required,
  reserveSpaceForError,
  errorMsg,
  onChange = noop,
  placeholder,
  selectRef,
  small,
  ...rest
}: IFormCheckboxSelectProps<OptionType>) => {
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

  const isValid = !getFieldState(name).invalid && Boolean(value);

  return (
    <CheckboxSelect
      {...rest}
      options={options || []}
      value={value}
      errorMsg={
        error?.message ||
        (error as IFormSelectFieldError)?.value.message ||
        (error as IFormSelectFieldError)?.label.message
      }
      isValid={isValid}
      onChange={onHandleChange}
      reserveSpaceForError={reserveSpaceForError}
      placeholder={placeholder}
      required={required}
      small={small}
    />
  );
};
