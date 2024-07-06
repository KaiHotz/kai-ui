import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

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
  },
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: function useSwitchStory(args) {
    const [inputValue, setInputValue] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setInputValue(checked);
    };

    return <Switch {...args} value={inputValue} onChange={handleChange} />;
  },
  args: {
    label: '',
    disabled: false,
    size: 'medium',
    name: '',
  },
};

export default meta;
