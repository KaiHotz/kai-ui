import type { Meta } from '@storybook/react-vite';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Label } from './Label';

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

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
    },
    endAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
  },
};

export const Default = {
  args: {
    text: 'Label text',
    position: 'top',
    size: 'medium',
    children: <div>Children</div>,
    disabled: false,
    required: false,
  },
};

export default meta;
