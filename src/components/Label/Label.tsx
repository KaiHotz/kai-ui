import { FC, LabelHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

import { TBasicSizes } from '../../types';
import './Label.scss';

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  required?: boolean;
  disabled?: boolean;
  position?: 'top' | 'bottom' | 'right' | 'left';
  endAdornment?: ReactNode;
  className?: string;
  size?: TBasicSizes;
}

export const Label: FC<ILabelProps> = ({
  text,
  htmlFor,
  children,
  disabled,
  required,
  position = 'top',
  endAdornment,
  className,
  size = 'medium',
  ...rest
}) => {
  const labelText = required ? `${text}${required ? ' *' : ''}` : text;
  const isTopPosition = position === 'top';
  const isBottomPosition = position === 'bottom';
  const isRightPosition = position === 'right';
  const isLeftPosition = position === 'left';

  return (
    <label
      id={htmlFor}
      htmlFor={htmlFor}
      className={cx(
        'ui-label',
        `ui-label--${size}`,
        {
          'ui-label--top': isTopPosition,
          'ui-label--right': isRightPosition,
          'ui-label--bottom': isBottomPosition,
          'ui-label--left': isLeftPosition,
          'ui-label--disabled': disabled,
        },
        className,
      )}
      {...rest}
    >
      {(isTopPosition || isLeftPosition) && text && (
        <div className="ui-label__text">
          {labelText}
          {!!endAdornment && <div className="ui-label__end-adornment">{endAdornment}</div>}
        </div>
      )}
      {children}
      {(isRightPosition || isBottomPosition) && text && (
        <div className="ui-label__text">
          {labelText}
          {!!endAdornment && <div className="ui-label__end-adornment">{endAdornment}</div>}
        </div>
      )}
    </label>
  );
};
