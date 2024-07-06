/* eslint-disable no-console */
import React from 'react';
import type { Meta } from '@storybook/react';
import { FaInfo, FaSistrix } from 'react-icons/fa6';

import { MenuButton } from './MenuButton';

const iconOptions = {
  none: undefined,
  search: <FaSistrix />,
  information: <FaInfo />,
};

const meta: Meta<typeof MenuButton> = {
  title: 'Components/MenuButton',
  component: MenuButton,
  argTypes: {
    testId: {
      control: false,
    },
    icon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: {
          none: 'None',
          search: 'Search',
          information: 'Information',
        },
      },
    },
  },
};

const menuItems = [
  {
    label: 'First Item',
    icon: <FaInfo size={24} />,
    onSelect() {
      console.log('clicked First Item');
    },
  },
  {
    label: 'Second Item',
    disabled: true,
    onSelect() {},
  },
  {
    label: 'Third Item',
    onSelect() {
      console.log('clicked Third Item');
    },
  },
];

export const Default = {
  args: {
    variant: 'transparent',
    small: false,
    children: 'Button',
    disabled: false,
    items: menuItems,
    number: false,
  },
};

export default meta;
