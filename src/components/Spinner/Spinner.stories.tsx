import type { Meta } from '@storybook/react-vite';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    size: 35,
    speedMultiplier: 1.5,
  },
};

export default meta;
