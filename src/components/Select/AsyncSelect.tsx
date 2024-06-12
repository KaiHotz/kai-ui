/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { ReactNode } from 'react';
import cx from 'clsx';
import AsyncCreatable from 'react-select/async-creatable';
import { GroupBase } from 'react-select';
import Async, { AsyncProps } from 'react-select/async';

import { Label } from '../Label';
import { Hint } from '../Hint';
import { useCommonProps } from './useCommonProps';
import { ISelectOption } from './types';
import './Select.scss';

export interface IAsyncSelectProps<OptionType extends ISelectOption>
  extends AsyncProps<OptionType, false, GroupBase<OptionType>> {
  small?: boolean;
  label?: string;
  required?: boolean;
  hintText?: string;
  errorMsg?: ReactNode;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  isCreatable?: boolean;
  centerOptinons?: boolean;
  labelEndAdornment?: ReactNode;
}
export const AsyncSelect = <OptionType extends ISelectOption>({
  name,
  label,
  hintText,
  errorMsg,
  disabled,
  reserveSpaceForError,
  required,
  isCreatable,
  menuPlacement = 'auto',
  menuPosition = 'absolute',
  defaultOptions = false,
  loadOptions,
  formatOptionLabel,
  options,
  onChange,
  small,
  centerOptinons,
  labelEndAdornment,
  ...rest
}: IAsyncSelectProps<OptionType>) => {
  const AsyncSelectComponent = isCreatable ? AsyncCreatable : Async;
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const commonProps = useCommonProps({
    disabled,
    menuPlacement,
    menuPosition,
    onChange,
    formatOptionLabel,
    centerOptinons,
    options,
    ...rest,
  });

  return (
    <div className="ui-select">
      {label && (
        <Label
          htmlFor={name}
          required={required}
          disabled={disabled}
          isError={!!errorMsg}
          endAdornment={labelEndAdornment}
          className="ui-select__label"
          small={small}
        >
          {label}
        </Label>
      )}
      <div
        className={cx(`ui-select__container `, {
          'ui-select__container--small': small,
          'ui-select__container--disabled': disabled,
          'ui-select__container--error': !!errorMsg,
        })}
      >
        <AsyncSelectComponent {...commonProps} defaultOptions={defaultOptions} loadOptions={loadOptions} />
      </div>
      {shouldShowValidationWrapper && (
        <div className="ui-select__validation-wrapper">
          {errorMsg && <Hint variant="error">{errorMsg}</Hint>}
          {!errorMsg && hintText && <Hint>{hintText}</Hint>}
        </div>
      )}
    </div>
  );
};
