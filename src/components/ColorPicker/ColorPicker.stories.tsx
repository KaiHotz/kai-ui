import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorResult } from 'react-color';

import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  argTypes: {
    onChange: {
      control: false,
    },
    color: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof ColorPicker>;
export const Default: Story = {
  render: function useColorInput(args) {
    const [colorValue, setColorValue] = useState('#e0ee20');

    const handleChange = (color: ColorResult) => {
      setColorValue(color.hex);
    };

    return <ColorPicker {...args} color={colorValue} onChange={handleChange} />;
  },
  args: {
    variant: 'picker',
    color: '',
    label: '',
    labelPosition: 'top',
    hintText: '',
    errorMsg: '',
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    small: false,
    children: 'click to change color',
  },
};
export default meta;
