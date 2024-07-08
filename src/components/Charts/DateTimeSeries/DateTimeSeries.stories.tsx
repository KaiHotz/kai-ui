import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DateTimeSeries } from './DateTimeSeries';
import { useTheme } from '../../../hooks';
const values = [
  {
    label: 'Label',
    values: [
      [1611576000000, 1372],
      [1611579600000, 2325],
      [1611583200000, 1218],
      [1611586800000, 580],
      [1611590400000, 1398],
      [1611594000000, 716],
      [1611597600000, 858],
      [1611601200000, 498],
      [1611604800000, 240],
      [1611608400000, 129],
      [1611612000000, 176],
      [1611615600000, 179],
      [1611619200000, 208],
      [1611622800000, 306],
      [1611626400000, 530],
      [1611630000000, 2072],
      [1611633600000, 2109],
      [1611637200000, 2330],
      [1611640800000, 17138],
      [1611644400000, 13580],
      [1611648000000, 4665],
      [1611651600000, 1898],
      [1611655200000, 1470],
      [1611658800000, 5755],
      [1611662400000, 781],
    ],
  },
];

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

const meta: Meta<typeof DateTimeSeries> = {
  title: 'Components/Charts/DateTimeSeries',
  component: DateTimeSeries,
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

type Story = StoryObj<typeof DateTimeSeries>;

export const Default: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <DateTimeSeries {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    data: values,
    options,
  },
};

export default meta;
