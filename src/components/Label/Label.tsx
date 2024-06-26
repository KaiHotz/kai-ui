import React, { FC, LabelHTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';
import './Label.scss';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  isError?: boolean;
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
  isError,
  endAdornment,
  className,
  small,
  ...rest
}) => {
  const shouldShowLabel = Boolean(text || text === 0);

  return (
    <label
      id={htmlFor}
      htmlFor={htmlFor}
      className={cx(
        'ui-label',
        {
          'ui-label--small': small,
          'ui-label--error': isError,
          'ui-label--disabled': disabled,
        },
        className,
      )}
      {...rest}
    >
      {shouldShowLabel && (
        <>
          {typeof text === 'string' ? `${text}${required ? ' *' : ''}` : text}
          {!!endAdornment && text && <div className="ui-label__end-adornment">{endAdornment}</div>}
        </>
      )}
      {typeof children === 'string' ? `${children}${required ? ' *' : ''}` : children}
      {!!endAdornment && children && <div className="ui-label__end-adornment">{endAdornment}</div>}
    </label>
  );
};
