import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Checkbox } from './Checkbox';

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

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: false,
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
    label: 'Get notified',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    hintText: '',
    errorMsg: '',
    required: false,
    disabled: false,
    variant: 'checkmark',
    reserveSpaceForError: false,
  },
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => {
    const [checkedValue, setCheckedValue] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setCheckedValue(checked);
    };

    return (
      <div>
        <Checkbox {...args} name="checkboxExample" checked={checkedValue} onChange={handleChange} />
      </div>
    );
  },
};

export default meta;
