import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'clsx';

import { TBasicSizes } from '../../types';
import './Button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  square?: boolean;
  iconPosition?: 'left' | 'right';
  size?: TBasicSizes;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  testId?: string;
}

export const Button: FC<IButtonProps> = ({
  icon,
  square,
  iconPosition = 'left',
  size = 'medium',
  type = 'button',
  disabled,
  children,
  onClick,
  variant = 'primary',
  testId = 'ui-btn',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cx('ui-btn', `ui-btn--${size}`, `ui-btn--${variant}`, {
        'ui-btn--square': square,
        'ui-btn--icon': !!icon && !children,
        'ui-btn--icon-text-left': !!icon && children,
        'ui-btn--icon-text-right': !!icon && children && iconPosition === 'right',
        'ui-btn--disabled': disabled,
      })}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      data-testid={testId}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
