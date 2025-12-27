import { useMemo } from 'react';
import omit from 'lodash/omit';
import { FaChevronDown, FaXmark } from 'react-icons/fa6';

import { getCSSVariable } from '../../utils';
import { ISelectProps } from './Select';
import { IAsyncSelectProps } from './AsyncSelect';
import { ISelectOption } from './types';
import { useTheme } from '../../hooks/useTheme';

export const useCommonProps = <OptionType extends ISelectOption>({
  disabled,
  menuPlacement,
  menuPosition,
  onChange,
  options,
  size,
  placeholder,
  centerOptinons,
  ...rest
}: ISelectProps<OptionType>): Partial<ISelectProps<OptionType> | IAsyncSelectProps<OptionType>> => {
  const { theme } = useTheme();
  const mainFont = getCSSVariable('--font-primary');

  const colors = useMemo(
    () => ({
      emphasisPrimary: getCSSVariable('--emphasis-primary'),
      emphasisSecondary: getCSSVariable('--emphasis-secondary'),
      emphasisTertiary: getCSSVariable('--emphasis-tertiary'),
      emphasisQuaternary: getCSSVariable('--emphasis-quaternary'),
      appBackGroundColor: getCSSVariable('--app-backgroung-color'),
      borderColor: getCSSVariable('--border-color'),
      boxShadow: getCSSVariable('--box-shadow'),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme],
  );

  const fontColor = disabled ? colors.emphasisQuaternary : colors.emphasisPrimary;
  const iconSize = size === 'small' ? 14 : size === 'medium' ? 16 : 18;

  return useMemo(() => {
    return {
      isDisabled: disabled,
      menuPlacement,
      menuPosition,
      onChange,
      placeholder,
      menuPortalTarget: document.body,
      components: {
        IndicatorSeparator: () => null,
        DropdownIndicator: ({ innerProps }) => (
          <div {...innerProps} className="ui-select__dropdown-indicator">
            <FaChevronDown size={iconSize} color={colors.emphasisTertiary} />
          </div>
        ),
        ClearIndicator: ({ innerProps }) => (
          <div {...innerProps} className="ui-select__clear-indicator">
            <FaXmark size={iconSize} color={colors.emphasisTertiary} />
          </div>
        ),
        ...rest?.components,
      },
      options,
      classNamePrefix: 'ui-select',
      styles: {
        control: (style) => ({
          ...style,
          boxShadow: 'none',
          border: 'none',
          '&:hover': {
            borderColor: 'none',
          },
          background: 'transparent',
          minHeight: '26px',
          color: fontColor,
        }),
        valueContainer: (style) => ({
          ...style,
          padding: 0,
        }),
        indicatorsContainer: (style) => ({
          ...style,
          alignItems: 'center',
          gap: size === 'small' ? '4px' : size === 'medium' ? '6px' : '8px',
          marginTop: 0,
          cursor: 'pointer',
        }),
        input: (style) => ({
          ...style,
          color: fontColor,
          fontFamily: mainFont,
          'input:focus': {
            boxShadow: 'none',
          },
        }),
        singleValue: (style) => ({
          ...style,
          color: fontColor,
          fontFamily: mainFont,
        }),
        placeholder: (style, state) => ({
          ...style,
          color: state.isFocused ? colors.emphasisQuaternary : colors.emphasisTertiary,
        }),
        menuList: (style) => ({
          ...style,
          fontFamily: mainFont,
          textAlign: centerOptinons ? 'center' : style.textAlign,
          backgroundColor: colors.appBackGroundColor,
          border: `1px solid ${colors.borderColor}`,
          boxShadow: colors.boxShadow,
        }),
        option: (style, { isFocused, isSelected }) => ({
          ...style,
          fontFamily: mainFont,
          fontSize: size === 'small' ? '14px' : size === 'medium' ? style.fontSize : '16px',
          padding: size === 'small' ? '6px 8px' : size === 'medium' ? style.padding : '8px 12px',
          color: colors.emphasisPrimary,
          backgroundColor: isFocused || isSelected ? colors.emphasisQuaternary : colors.appBackGroundColor,
        }),
        menuPortal: (style) => ({ ...style, zIndex: 99, minWidth: '50px' }),
      },
      ...omit(rest, ['components', 'centerOptinons']),
    };
  }, [
    disabled,
    menuPlacement,
    menuPosition,
    onChange,
    placeholder,
    rest,
    options,
    iconSize,
    colors.emphasisTertiary,
    colors.emphasisQuaternary,
    colors.appBackGroundColor,
    colors.borderColor,
    colors.boxShadow,
    colors.emphasisPrimary,
    fontColor,
    size,
    mainFont,
    centerOptinons,
  ]);
};
