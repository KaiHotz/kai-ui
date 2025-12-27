import { ReactNode } from 'react';
import cx from 'clsx';
import AsyncCreatable from 'react-select/async-creatable';
import { GroupBase } from 'react-select';
import Async, { AsyncProps } from 'react-select/async';

import { TBasicSizes } from '../../types';
import { ILabelProps, Label } from '../Label';
import { Hint } from '../Hint';
import { useCommonProps } from './useCommonProps';
import { ISelectOption } from './types';
import './Select.scss';

export interface IAsyncSelectProps<
  OptionType extends ISelectOption,
  IsMulti extends boolean = false,
> extends AsyncProps<OptionType, IsMulti, GroupBase<OptionType>> {
  size?: TBasicSizes;
  label?: string;
  labelPosition?: ILabelProps['position'];
  required?: boolean;
  hintText?: string;
  errorMsg?: ReactNode;
  isValid?: boolean;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  isCreatable?: boolean;
  centerOptinons?: boolean;
  labelEndAdornment?: ReactNode;
  options?: OptionType[];
}
export const AsyncSelect = <OptionType extends ISelectOption>({
  name,
  label,
  labelPosition = 'top',
  hintText,
  errorMsg,
  isValid,
  disabled,
  reserveSpaceForError,
  required,
  isCreatable,
  menuPlacement = 'auto',
  menuPosition = 'absolute',
  placeholder,
  defaultOptions = false,
  loadOptions,
  formatOptionLabel,
  options = [],
  onChange,
  size = 'medium',
  centerOptinons,
  labelEndAdornment,
  ...rest
}: IAsyncSelectProps<OptionType>) => {
  const AsyncSelectComponent = isCreatable ? AsyncCreatable : Async;
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const placeholderText = typeof placeholder === 'string' ? `${placeholder}${required ? ' *' : ''}` : placeholder;

  const commonProps = useCommonProps({
    disabled,
    menuPlacement,
    menuPosition,
    placeholder: placeholderText,
    onChange,
    formatOptionLabel,
    centerOptinons,
    options,
    size,
    ...rest,
  });

  return (
    <div className="ui-select">
      <Label
        text={label}
        htmlFor={name}
        required={required}
        disabled={disabled}
        position={labelPosition}
        endAdornment={labelEndAdornment}
        className="ui-select__label"
        size={size}
      >
        <div
          className={cx(`ui-select__container `, `ui-select__container--${size}`, {
            'ui-select__container--disabled': disabled,
            'ui-select__container--error': !!errorMsg,
            'ui-select__container--success': isValid && !errorMsg,
          })}
        >
          <AsyncSelectComponent {...commonProps} defaultOptions={defaultOptions} loadOptions={loadOptions} />
        </div>
      </Label>
      {shouldShowValidationWrapper && (
        <div className="ui-select__validation-wrapper">
          {errorMsg && <Hint variant="error">{errorMsg}</Hint>}
          {!errorMsg && hintText && <Hint>{hintText}</Hint>}
        </div>
      )}
    </div>
  );
};
