import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { dateNDaysAgo, getRange, shiftDate } from '../../utils';
import { HeatMapCalendar } from './HeatMapCalendar';

const meta: Meta<typeof HeatMapCalendar> = {
  title: 'components/HeatMapCalendar',
  component: HeatMapCalendar,
  argTypes: {
    testId: {
      control: false,
    },
    renderTooltipText: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof HeatMapCalendar>;

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomValues = getRange(365).map((index) => {
  return {
    date: shiftDate(new Date(), -index),
    value: getRandomInt(0, 4000),
  };
});

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ padding: '20px' }}>
        <HeatMapCalendar {...args} />
      </div>
    );
  },
  args: {
    showMonthLabels: false,
    gutterSize: 10,
    startDate: dateNDaysAgo(randomValues.length),
    endDate: new Date(Date.now() - 864e5),
    renderTooltipText: (value) => JSON.stringify(value),
    onClick: (value) => alert(JSON.stringify(value)),
    data: randomValues,
  },
};

export default meta;
