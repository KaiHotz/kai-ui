import React, { FC, useState, ReactNode, useCallback, useRef, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import cx from 'clsx';
import { ColorResult, GithubPicker as Palette, SketchPicker as ColorPicker } from 'react-color';

import { Button } from '../Button';
import { Label } from '../Label';
import { Hint } from '../Hint';
import { colors } from './colors';
import { useClickOutside } from '../../hooks';

import './ColorInput.scss';

export interface IColorInputProps {
  color: ColorResult['hex'];
  variant?: 'palette' | 'picker';
  label?: string;
  errorMsg?: ReactNode;
  hintText?: string;
  disabled?: boolean;
  required?: boolean;
  reserveSpaceForError?: boolean;
  small?: boolean;
  onChange: (color: ColorResult) => void;
}

export const ColorInput: FC<IColorInputProps> = ({
  variant = 'picker',
  color,
  label,
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
      className={cx('ui-color-input', {
        'ui-color-input--small': small,
        'ui-color-input--error': errorMsg,
        'ui-color-input--disabled': disabled,
      })}
    >
      <Label text={label} required={required} isError={Boolean(errorMsg)} small={small} />
      <div
        className="ui-color-input__swatch"
        style={{
          backgroundColor: color,
        }}
      >
        <Button type="button" variant="ghost" small={small} onClick={handleShowPicker} disabled={disabled} />
      </div>
      {colorPickerElement &&
        ReactDOM.createPortal(
          <div className="ui-color-input__popover" ref={setPopperElement} {...attributes.popper} style={styles.popper}>
            <div className="ui-color-input__cover" role="presentation" ref={coverRef}>
              {isPalette ? (
                <Palette color={color} onChange={handleChangeColor} colors={colors} triangle="hide" />
              ) : (
                <ColorPicker color={color} onChange={handleChangeColor} presetColors={colors} disableAlpha />
              )}
            </div>
          </div>,
          document.body,
        )}
      {shouldShowValidationWrapper && (
        <div className="ui-color-input__validation-wrapper">
          {errorMsg && (
            <Hint variant="error" className="ui-color-input__error-message">
              {errorMsg}
            </Hint>
          )}
          {hintText && <Hint className="ui-color-input__hint-text">{hintText}</Hint>}
        </div>
      )}
    </div>
  );
};
