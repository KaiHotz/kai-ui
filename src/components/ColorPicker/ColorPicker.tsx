import { FC, MouseEvent, PropsWithChildren, ReactNode, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { flip, offset, shift, useFloating } from '@floating-ui/react';
import cx from 'clsx';
import { ColorResult, GithubPicker as Palette, SketchPicker } from 'react-color';

import { useClickOutside } from '../../hooks';
import { TBasicSizes } from '../../types';
import { Button } from '../Button';
import { ILabelProps, Label } from '../Label';
import { Hint } from '../Hint';
import { colors } from './colors';
import './ColorPicker.scss';

export interface IColorPickerProps {
  color: ColorResult['hex'];
  variant?: 'palette' | 'picker';
  label?: string;
  labelPosition?: ILabelProps['position'];
  labelEndAdornment?: ILabelProps['endAdornment'];
  icon?: ReactNode;
  errorMsg?: ReactNode;
  hintText?: string;
  disabled?: boolean;
  required?: boolean;
  reserveSpaceForError?: boolean;
  size?: TBasicSizes;
  onChange: (color: ColorResult) => void;
}

export const ColorPicker: FC<PropsWithChildren<IColorPickerProps>> = ({
  children,
  variant = 'picker',
  color,
  label,
  labelPosition = 'top',
  labelEndAdornment,
  icon,
  errorMsg,
  hintText,
  disabled,
  required,
  reserveSpaceForError,
  onChange,
  size = 'medium',
}) => {
  const isPalette = variant === 'palette';
  const coverRef = useRef<HTMLDivElement>(undefined as unknown as HTMLDivElement);
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset({ mainAxis: 5, crossAxis: 3 }), flip(), shift()],
  });

  const handleShowPicker = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!isOpen && !disabled) {
        refs.setReference(event?.currentTarget as HTMLElement);
        setIsOpen(true);
      }
    },
    [isOpen, disabled, refs],
  );

  const handleClosePicker = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  const handleChangeColor = useCallback(
    (colorResult: ColorResult) => {
      onChange(colorResult);
      if (isPalette) {
        setIsOpen(false);
      }
    },
    [isPalette, onChange],
  );

  useClickOutside<HTMLDivElement>(coverRef, handleClosePicker);

  return (
    <div
      className={cx('ui-color-picker', `ui-color-picker--${size}`, {
        'ui-color-picker--error': errorMsg,
        'ui-color-picker--disabled': disabled,
      })}
    >
      <Label text={label} required={required} size={size} position={labelPosition} endAdornment={labelEndAdornment}>
        <Button
          type="button"
          variant="tertiary"
          size={size}
          onClick={handleShowPicker}
          disabled={disabled}
          icon={icon}
          style={{ backgroundColor: color }}
        >
          {children}
        </Button>
      </Label>
      {isOpen &&
        createPortal(
          <div className="ui-color-picker__popover" ref={(node) => refs.setFloating(node)} style={floatingStyles}>
            <div className="ui-color-picker__cover" role="presentation" ref={coverRef}>
              {isPalette ? (
                <Palette color={color} onChange={handleChangeColor} colors={colors} triangle="hide" />
              ) : (
                <SketchPicker color={color} onChange={handleChangeColor} presetColors={colors} disableAlpha />
              )}
            </div>
          </div>,
          document.body,
        )}
      {shouldShowValidationWrapper && (
        <div className="ui-color-picker__validation-wrapper">
          {errorMsg && (
            <Hint variant="error" className="ui-color-picker__error-message">
              {errorMsg}
            </Hint>
          )}
          {hintText && <Hint className="ui-color-picker__hint-text">{hintText}</Hint>}
        </div>
      )}
    </div>
  );
};
