import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { omit } from 'lodash';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    testId: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ padding: '20px' }}>
        <ProgressBar {...args} />
      </div>
    );
  },
  args: {
    variant: 'primary',
    total: 10,
    value: 2,
    valueMessage: '',
    totalMessage: '',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(42);
    const [total, setTotal] = useState(100);

    return (
      <>
        <div style={{ padding: '10px 20px' }}>
          Processed: <input type="number" value={value} onChange={(event) => setValue(Number(event.target.value))} />
        </div>
        <div style={{ padding: '10px 20px' }}>
          Total: <input type="number" value={total} onChange={(event) => setTotal(Number(event.target.value))} />
        </div>
        <div style={{ padding: '20px' }}>
          <ProgressBar value={value} total={total} {...omit(args, ['value', 'total'])} />
        </div>
      </>
    );
  },
  argTypes: {
    testId: {
      control: false,
    },
    total: {
      control: false,
    },
    value: {
      control: false,
    },
  },
  args: {
    variant: 'primary',
    valueMessage: '',
    totalMessage: '',
  },
};

export default meta;
