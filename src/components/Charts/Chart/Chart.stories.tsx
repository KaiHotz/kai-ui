import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import times from 'lodash/times';

import { Chart } from './Chart';
import { useTheme } from '../../../hooks';

const data = times(2, () => ({
  label: faker.hacker.abbreviation(),
  values: times(15, () => faker.datatype.number()),
}));

const options: Highcharts.Options = {
  yAxis: {
    title: {
      text: 'Y values',
    },
  },
  lang: {
    resetZoom: 'Reset zoom 2',
  },
  subtitle: { text: 'Click and drag in the plot area to zoom in' },
};

const meta: Meta<typeof Chart> = {
  title: 'Components/Charts/Chart',
  component: Chart,
  argTypes: {
    className: {
      control: false,
    },
    containerProps: {
      control: false,
    },
    seriesType: {
      options: ['column', 'bar', 'line', 'spline', 'area', 'areaspline'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    seriesType: 'column',
    colorByPoint: true,
    ref: null,
  },
};

type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <Chart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    data,
    options,
  },
};

export default meta;
