import type { Meta } from '@storybook/react-vite';

import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Components/Hint',
  component: Hint,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [undefined, 'info', 'error'],
    },
  },
};

export const Default = {
  args: {
    children: 'this is a Hint',
  },
};

export default meta;
