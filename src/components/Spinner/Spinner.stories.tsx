import { Meta } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
};

export const Default = {
  args: {
    size: 35,
    speedMultiplier: 1.5,
  },
};

export default meta;
