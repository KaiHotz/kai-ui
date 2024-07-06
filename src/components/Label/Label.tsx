import React, { FC, LabelHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';
import './Label.scss';

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  isError?: boolean;
  position?: 'top' | 'bottom' | 'right' | 'left';
  endAdornment?: ReactNode;
  className?: string;
  small?: boolean;
}

export const Label: FC<ILabelProps> = ({
  text,
  htmlFor,
  children,
  disabled,
  required,
  position = 'top',
  isError,
  endAdornment,
  className,
  small,
  ...rest
}) => {
  const shouldShowLabel = Boolean(text || text === 0);
  const labelText = typeof text === 'string' ? `${text}${required ? ' *' : ''}` : text;
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
        {
          'ui-label--small': small,
          'ui-label--error': isError,
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
      {(isTopPosition || isLeftPosition) && shouldShowLabel && (
        <>
          <span className={cx('ui-label__text', `ui-label__text--${position}`)}>{labelText}</span>
          {!!endAdornment && text && <div className="ui-label__end-adornment">{endAdornment}</div>}
        </>
      )}
      {children}
      {(isRightPosition || isBottomPosition) && shouldShowLabel && (
        <>
          <span className={cx('ui-label__text', `ui-label__text--${position}`)}>{labelText}</span>
          {!!endAdornment && text && <div className="ui-label__end-adornment">{endAdornment}</div>}
        </>
      )}
    </label>
  );
};
