import { FC } from 'react';
import { omit } from 'lodash';
import cx from 'clsx';

import { useRadioOption } from './context';
import { ILabelProps, Label } from '../Label';
import './RadioOption.scss';

export interface IRadioOptionProps {
  value: string | number;
  label: string;
  labelEndAdornment?: ILabelProps['endAdornment'];
  disabled?: boolean;
}

export const RadioOption: FC<IRadioOptionProps> = ({ value, label = 'right', labelEndAdornment, disabled }) => {
  const optionsAttr = useRadioOption();
  const isOptionDisabled = disabled || optionsAttr?.disabled;
  const isChecked = value === optionsAttr?.selected;
  const rest = omit(optionsAttr, ['disabled', 'selected', 'onChange', 'name', 'variant', 'isInline', 'labelPosition']);

  return (
    <div
      key={value}
      className={cx('ui-radio-option', {
        'ui-radio-option--disabled': isOptionDisabled,
        [`ui-radio-option--${optionsAttr?.size}`]: optionsAttr?.size,
        'ui-radio-option--checked': isChecked,
        'ui-radio-option--inline': optionsAttr?.isInline,
        'ui-radio-option--text': optionsAttr?.variant === 'text',
      })}
    >
      <Label
        className={cx('ui-radio-option__label', {
          [`ui-radio-option__label--${optionsAttr?.size}`]: optionsAttr?.size,
        })}
        position={optionsAttr?.labelPosition}
        size={optionsAttr?.size}
        text={label}
        disabled={isOptionDisabled}
        endAdornment={labelEndAdornment}
      >
        <div className="ui-radio-option__input-wrapper">
          <input
            onChange={isOptionDisabled ? undefined : optionsAttr?.onChange}
            name={optionsAttr?.name}
            checked={isChecked}
            value={value}
            disabled={isOptionDisabled}
            {...omit(rest, 'size')}
            type="radio"
          />
          <span
            className={cx('ui-radio-option__icon', {
              [`ui-radio-option__icon--${optionsAttr?.size}`]: optionsAttr?.size,
            })}
          />
        </div>
      </Label>
    </div>
  );
};
