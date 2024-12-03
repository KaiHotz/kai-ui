import { ReactNode } from 'react';
import cx from 'clsx';
import Creatable, { CreatableProps } from 'react-select/creatable';
import SelectComp, { GroupBase, Props as ReactSelectProps } from 'react-select';

import { ILabelProps, Label } from '../Label';
import { Hint } from '../Hint';
import { useCommonProps } from './useCommonProps';
import { ISelectOption } from './types';
import './Select.scss';

export interface ISelectProps<OptionType extends ISelectOption, IsMulti extends boolean = false>
  extends ReactSelectProps<OptionType, IsMulti>,
    CreatableProps<OptionType, IsMulti, GroupBase<OptionType>> {
  small?: boolean;
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ReactNode;
  required?: boolean;
  hintText?: string;
  errorMsg?: string;
  disabled?: boolean;
  reserveSpaceForError?: boolean;
  isCreatable?: boolean;
  centerOptinons?: boolean;
  isValid?: boolean;
  options: OptionType[];
}

export const Select = <OptionType extends ISelectOption>({
  name,
  label,
  labelPosition = 'top',
  labelEndAdornment,
  hintText,
  errorMsg,
  isValid,
  disabled,
  reserveSpaceForError,
  required,
  isCreatable,
  onChange,
  menuPlacement = 'auto',
  menuPosition = 'fixed',
  formatOptionLabel,
  placeholder,
  options,
  small,
  centerOptinons,
  ...rest
}: ISelectProps<OptionType>) => {
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const placeholderText =
    typeof placeholder === 'string' ? `${placeholder}${required && !label ? ' *' : ''}` : placeholder;
  const commonProps = useCommonProps({
    disabled,
    menuPlacement,
    menuPosition,
    placeholder: placeholderText,
    onChange,
    formatOptionLabel,
    options,
    small,
    centerOptinons,
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
          {isCreatable ? <Creatable isCreatable {...commonProps} /> : <SelectComp {...commonProps} />}
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
