import React, { ReactNode } from 'react';
import Select, { components, Props as ReactSelectProps } from 'react-select';
import cx from 'clsx';
import omit from 'lodash/omit';

import { ISelectOption } from './types';
import { Hint } from '../Hint';
import { ILabelProps, Label } from '../Label';
import { useCommonProps } from './useCommonProps';

import './Select.scss';

export interface ICheckboxSelectProps<OptionType extends ISelectOption, IsMulti extends boolean = false>
  extends ReactSelectProps<OptionType, IsMulti> {
  small?: boolean;
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ReactNode;
  required?: boolean;
  hintText?: string;
  errorMsg?: string;
  isValid?: boolean;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  options: OptionType[];
}

export const CheckboxSelect = <OptionType extends ISelectOption>({
  options,
  isMulti,
  name,
  label,
  labelPosition = 'top',
  labelEndAdornment,
  isSearchable = true,
  backspaceRemovesValue = false,
  closeMenuOnSelect = false,
  hideSelectedOptions = false,
  menuPortalTarget = document.body,
  menuPlacement = 'auto',
  menuPosition = 'fixed',
  reserveSpaceForError,
  onChange,
  placeholder,
  hintText,
  errorMsg,
  isValid,
  disabled,
  required,
  small,
  ...rest
}: ICheckboxSelectProps<OptionType>) => {
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const placeholderText = typeof placeholder === 'string' ? `${placeholder}${required ? ' *' : ''}` : placeholder;
  const commonProps = useCommonProps({
    disabled,
    menuPlacement,
    menuPosition,
    placeholder: placeholderText,
    onChange,
    options,
    small,
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
        small={small}
        className="ui-select__label"
      >
        <div
          className={cx(`ui-select__container `, {
            'ui-select__container--small': small,
            'ui-select__container--disabled': disabled,
            'ui-select__container--error': !!errorMsg,
            'ui-select__container--success': isValid && !errorMsg,
          })}
        >
          <Select
            closeMenuOnSelect={closeMenuOnSelect}
            isMulti={isMulti}
            menuPortalTarget={menuPortalTarget}
            menuPlacement={menuPlacement}
            menuPosition={menuPosition}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 10002 }) }}
            {...omit(commonProps, 'components')}
            components={{
              ...commonProps.components,
              Option: (props) => {
                return (
                  <components.Option {...props}>
                    <div className="ui-select__checkbox-option">
                      <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                        className="ui-select__checkbox-input"
                      />
                      <label>{props.label}</label>
                    </div>
                  </components.Option>
                );
              },
              MultiValue: (props) => (
                <components.MultiValue {...props}>
                  <span>{props.data.label}</span>
                </components.MultiValue>
              ),
              MultiValueRemove: () => null,
            }}
            options={options}
            hideSelectedOptions={hideSelectedOptions}
            backspaceRemovesValue={backspaceRemovesValue}
            isSearchable={isSearchable}
            {...rest}
          />
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
