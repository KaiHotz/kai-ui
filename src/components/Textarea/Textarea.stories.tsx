import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Textarea } from './Textarea';

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

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
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

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: function useSwitchStory(args) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setInputValue(value);
    };

    return <Textarea {...args} value={inputValue} onChange={handleChange} />;
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    placeholder: '',
    hintText: '',
    errorMsg: '',
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    maxLength: 0,
  },
};

export default meta;
