import { forwardRef, useCallback, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

import { Button } from '../Button';
import { IInputProps, Input } from '../Input';
import './Input.scss';

export interface IPasswordInputProps extends Omit<IInputProps, 'type'> {
  passwordToggle?: boolean;
  passwordToggleTooltip?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
  ({ endAdornment, passwordToggle, passwordToggleTooltip, small, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);
    const iconSize = small ? 14 : 18;

    return (
      <Input
        ref={ref}
        {...rest}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          passwordToggle ? (
            <>
              {endAdornment}
              {passwordToggle && (
                <Button
                  variant="ghost"
                  title={passwordToggleTooltip}
                  icon={showPassword ? <FaEye size={iconSize} /> : <FaEyeSlash size={iconSize} />}
                  onClick={toggleShowPassword}
                />
              )}
            </>
          ) : (
            endAdornment
          )
        }
      />
    );
  },
);
