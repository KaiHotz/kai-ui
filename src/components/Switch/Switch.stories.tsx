import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Switch } from './Switch';

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

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    name: {
      control: false,
    },
    value: {
      control: false,
    },
    onChange: {
      control: false,
    },
    testId: {
      control: false,
    },
    className: {
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
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: function useStory(args) {
    const [inputValue, setInputValue] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setInputValue(checked);
    };

    return <Switch {...args} value={inputValue} onChange={handleChange} />;
  },
  args: {
    size: 'medium',
    label: '',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    disabled: false,
  },
};

export default meta;
