import { FC, KeyboardEvent, MouseEvent } from 'react';
import ReactDatepicker from 'react-datepicker';
import type { DatePickerProps } from 'react-datepicker';
import { FaCalendarDays } from 'react-icons/fa6';

import { TBasicSizes } from '../../types';
import { ILabelProps } from '../Label';
import { Input } from '../Input';
import './Datepicker.scss';

type BaseDatePickerProps = Omit<DatePickerProps, 'onChange'>;

export type TDatepickerProps = {
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  hintText?: string;
  errorMsg?: string;
  placeholder?: string;
  reserveSpaceForError?: boolean;
  dropdownMode?: 'scroll' | 'select';
  autoComplete?: 'on' | 'off';
  inputSize?: TBasicSizes;
  isValid?: boolean;
  onChange?: (
    date: Date | Array<Date | null> | Date[] | null,
    event?: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
  ) => void;
} & BaseDatePickerProps;

export const Datepicker: FC<TDatepickerProps> = ({
  name,
  label,
  labelPosition,
  labelEndAdornment,
  hintText,
  errorMsg,
  onChange,
  disabled,
  required,
  placeholder,
  selected,
  reserveSpaceForError,
  dateFormat = 'd MMMM, yyyy',
  dropdownMode = 'scroll',
  autoComplete = 'off',
  showPopperArrow,
  popperModifiers,
  inputSize = 'medium',
  isValid,
  ...rest
}) => {
  const shouldModifyPopperOffeset = reserveSpaceForError || Boolean(hintText) || Boolean(errorMsg);
  const iconSize = inputSize === 'small' ? 14 : inputSize === 'medium' ? 16 : 18;

  const datePickerProps: DatePickerProps = {
    ...rest,
    selectsRange: rest.selectsRange,
    selectsMultiple: rest.selectsMultiple,
    name,
    showPopperArrow,
    onChange,
    dateFormat,
    selected,
    placeholderText: placeholder,
    disabled,
    required,
    dropdownMode,
    autoComplete,
    popperModifiers: shouldModifyPopperOffeset
      ? [
          {
            name: 'offset',
            fn(state: { y: number }) {
              state.y = state.y - 30;

              return state;
            },
          },
        ]
      : popperModifiers,
    customInput: (
      <Input
        label={label}
        labelPosition={labelPosition}
        labelEndAdornment={labelEndAdornment}
        errorMsg={errorMsg}
        hintText={hintText}
        reserveSpaceForError={reserveSpaceForError}
        size={inputSize}
        endAdornment={<FaCalendarDays size={iconSize} />}
        isValid={isValid}
      />
    ),
  } as DatePickerProps;

  return (
    <div className="ui-datepicker">
      <ReactDatepicker {...datePickerProps} />
    </div>
  );
};
