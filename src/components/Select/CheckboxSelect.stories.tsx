import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { CheckboxSelect } from './CheckboxSelect';
import { ISelectOption } from './types';

const iconOptions = {
  none: undefined,
  searchIcon: <FaSistrix size={13} />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  searchIcon: 'Search',
  infoIcon: 'Information',
};

const optionsDefault: ISelectOption[] = [
  { value: 'opt-1', label: 'Option 1' },
  { value: 'opt-2', label: 'Option 2' },
  { value: 'opt-3', label: 'Option 3' },
  { value: 'opt-4', label: 'Option 4' },
];

const meta: Meta<typeof CheckboxSelect> = {
  title: 'Components/Select/CheckboxSelect',
  component: CheckboxSelect,
  argTypes: {
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
    placeholder: '',
    hintText: '',
    errorMsg: '',
    isValid: false,
    small: false,
    required: false,
    disabled: false,
    reserveSpaceForError: false,
    isClearable: false,
    isMulti: false,
  },
};

type Story = StoryObj<typeof CheckboxSelect>;

export const Default: Story = {
  render: function useSelect(args) {
    return <CheckboxSelect {...args} options={optionsDefault} />;
  },
};

export default meta;
