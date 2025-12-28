import { Children, FC, InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import cx from 'clsx';

import { TBasicSizes } from '../../types';
import { Hint } from '../Hint';
import { RadioOptionContext } from './context';
import './Radio.scss';

export interface IRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  selected?: string | number;
  errorMsg?: ReactNode;
  hintText?: string;
  reserveSpaceForError?: boolean;
  labelPosition?: 'left' | 'right';
  variant?: 'text';
  isInline?: boolean;
  size?: TBasicSizes;
}

export const Radio: FC<PropsWithChildren<IRadioProps>> = ({
  children,
  errorMsg,
  hintText,
  onChange,
  disabled,
  reserveSpaceForError,
  labelPosition = 'left',
  selected,
  isInline,
  variant,
  size = 'medium',
  ...rest
}) => {
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);

  return (
    <>
      <div
        className={cx('ui-radio', `ui-radio--${size}`, {
          'ui-radio--inline': isInline,
        })}
      >
        <RadioOptionContext value={{ onChange, disabled, selected, labelPosition, variant, isInline, size, ...rest }}>
          {Children.map(children, (child) => {
            return child;
          })}
        </RadioOptionContext>
      </div>
      {shouldShowValidationWrapper && (
        <div className="ui-radio__validation-wrapper">
          {errorMsg && <Hint variant="error">{errorMsg}</Hint>}
          {!errorMsg && hintText && <Hint>{hintText}</Hint>}
        </div>
      )}
    </>
  );
};
