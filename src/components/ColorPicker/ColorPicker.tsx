import React, { FC, useState, ReactNode, useCallback, useRef, MouseEvent, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import cx from 'clsx';
import { ColorResult, GithubPicker as Palette, SketchPicker } from 'react-color';

import { Button } from '../Button';
import { Label } from '../Label';
import { Hint } from '../Hint';
import { colors } from './colors';
import { useClickOutside } from '../../hooks';

import './ColorPicker.scss';

export interface IColorPickerProps {
  color: ColorResult['hex'];
  variant?: 'palette' | 'picker';
  label?: string;
  icon?: ReactNode;
  errorMsg?: ReactNode;
  hintText?: string;
  disabled?: boolean;
  required?: boolean;
  reserveSpaceForError?: boolean;
  small?: boolean;
  onChange: (color: ColorResult) => void;
}

export const ColorPicker: FC<PropsWithChildren<IColorPickerProps>> = ({
  children,
  variant = 'picker',
  color,
  label,
  icon,
  errorMsg,
  hintText,
  disabled,
  required,
  reserveSpaceForError,
  onChange,
  small,
}) => {
  const isPalette = variant === 'palette';
  const coverRef = useRef(null);
  const shouldShowValidationWrapper = Boolean(reserveSpaceForError || errorMsg || hintText);
  const [colorPickerElement, setColorPickerElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(colorPickerElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [3, 5],
        },
      },
    ],
  });

  const handleShowPicker = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!colorPickerElement && !disabled) {
        setColorPickerElement(event?.currentTarget as HTMLElement);
      }
    },
    [colorPickerElement, disabled],
  );

  const handleClosePicker = useCallback(() => {
    if (colorPickerElement) {
      setColorPickerElement(null);
    }
  }, [colorPickerElement]);

  const handleChangeColor = useCallback(
    (colorResult: ColorResult) => {
      onChange(colorResult);
      if (isPalette) {
        setColorPickerElement(null);
      }
    },
    [isPalette, onChange],
  );

  useClickOutside(coverRef, handleClosePicker);

  return (
    <div
      className={cx('ui-color-picker', {
        'ui-color-picker--small': small,
        'ui-color-picker--error': errorMsg,
        'ui-color-picker--disabled': disabled,
      })}
    >
      <Label text={label} required={required} isError={Boolean(errorMsg)} small={small} />
      <Button
        type="button"
        variant="tertiary"
        small={small}
        onClick={handleShowPicker}
        disabled={disabled}
        icon={icon}
        style={{ backgroundColor: color }}
      >
        {children}
      </Button>
      {colorPickerElement &&
        ReactDOM.createPortal(
          <div className="ui-color-picker__popover" ref={setPopperElement} {...attributes.popper} style={styles.popper}>
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
