import { FC, useCallback, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

import { Button } from '../Button';
import { IInputProps, Input } from '../Input';
import './Input.scss';

export interface IPasswordInputProps extends Omit<IInputProps, 'type'> {
  passwordToggle?: boolean;
  passwordToggleTooltip?: string;
}

export const PasswordInput: FC<IPasswordInputProps> = ({
  endAdornment,
  passwordToggle,
  passwordToggleTooltip,
  size,
  ref,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), []);
  const iconSize = size === 'small' ? 14 : size === 'medium' ? 16 : 18;

  return (
    <Input
      ref={ref}
      {...rest}
      size={size}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        passwordToggle ? (
          <>
            {endAdornment}
            {passwordToggle && (
              <Button
                variant="ghost"
                size={size}
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
};
