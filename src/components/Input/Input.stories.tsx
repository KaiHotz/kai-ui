import React from 'react';
import { FaCircleInfo, FaEye, FaEyeSlash, FaSistrix } from 'react-icons/fa6';

import { Input } from './Input';

const iconOptions = {
  none: undefined,
  searchIcon: <FaSistrix />,
  eyeIcon: <FaEye />,
  eyeSlashIcon: <FaEyeSlash />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  searchIcon: 'Search',
  infoIcon: 'Information',
  eyeIcon: 'Eye',
  eyeSlashIcon: 'Eye Slash',
};

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      options: [
        'text',
        'password',
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'time',
        'url',
        'week',
      ],
      control: { type: 'select' },
    },
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
    isValid: false,
    hideError: false,
    disabled: false,
  },
};

export const Default = {
  args: {
    type: 'text',
    placeholder: 'value',
  },
};
