import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorResult } from 'react-color';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { ColorPicker } from './ColorPicker';

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

type Story = StoryObj<typeof ColorPicker>;
export const Default: Story = {
  render: function useStory(args) {
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
    labelEndAdornment: 'none',
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
