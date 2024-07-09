import React from 'react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { PasswordInput } from './PasswordInput';

const iconOptions = {
  none: undefined,
  searchIcon: <FaSistrix />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  searchIcon: 'Search',
  infoIcon: 'Information',
};

export default {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInput,
  argTypes: {
    startAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
    endAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
    labelEndAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    startAdornment: 'none',
    endAdornment: 'none',
    required: false,
    small: false,
    reserveSpaceForError: false,
    hintText: '',
    errorMsg: '',
    hideError: false,
    disabled: false,
  },
};

export const Default = {
  args: {
    placeholder: 'Password',
    passwordToggleTooltip: 'Show/Hide password',
    passwordToggle: true,
  },
};
