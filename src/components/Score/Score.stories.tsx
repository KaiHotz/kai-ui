import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Score } from './Score';

const meta: Meta<typeof Score> = {
  title: 'Components/Score',
  component: Score,
  argTypes: {
    testId: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof Score>;
export const Default: Story = {
  render: (args) => {
    return <Score {...args} />;
  },
  args: {
    value: 30,
    ticks: 30,
    color: '',
  },
};

export default meta;
