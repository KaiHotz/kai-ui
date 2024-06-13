import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorResult } from 'react-color';

import { ColorInput } from './ColorInput';

const meta: Meta<typeof ColorInput> = {
  title: 'Components/ColorInput',
  component: ColorInput,
  argTypes: {
    onChange: {
      control: false,
    },
    color: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof ColorInput>;
export const Default: Story = {
  render: function useColorInput(args) {
    const [colorValue, setColorValue] = useState('#e0ee20');

    const handleChange = (color: ColorResult) => {
      setColorValue(color.hex);
    };

    return <ColorInput {...args} color={colorValue} onChange={handleChange} />;
  },
  args: {
    variant: 'picker',
    color: '',
    label: '',
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
