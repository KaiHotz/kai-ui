import type { Meta, StoryObj } from '@storybook/react-vite';
import Highcharts from 'highcharts';

import { BridgeChart, type IBridgeChartProps } from './BridgeChart';
import { useTheme } from '../../../hooks';

const seriesData: IBridgeChartProps['series'] = [
  {
    name: 'Company Performance',
    data: [
      { name: 'Start', y: 120000 },
      { name: 'Product Revenue', y: 569000 },
      { name: 'Service Revenue', y: 231000 },
      { name: 'Positive Balance', isIntermediateSum: true, color: '#8bdcbe' },
      { name: 'Fixed Costs', y: -342000 },
      { name: 'Variable Costs', y: -233000 },
      { name: 'Balance', isSum: true, color: '#8bdcbe' },
    ],
  },
];

const customOptions: Highcharts.Options = {
  yAxis: {
    title: {
      text: 'Amount ($)',
    },
  },
  tooltip: {
    pointFormat: '<b>${point.y:,.2f}</b>',
  },
};

const meta: Meta<typeof BridgeChart> = {
  title: 'Components/Charts/BridgeChart',
  component: BridgeChart,
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    options: { control: false },
    onPointClick: { action: 'point clicked' },
    title: { control: 'text' },
  },
  args: {
    title: 'Bridge Chart',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof BridgeChart>;

export const Default: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <BridgeChart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    series: seriesData,
    options: customOptions,
  },
};

export const WithClickHandler: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <BridgeChart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    title: 'Chart with Click Handler',
    series: [
      {
        name: 'Interactive Data',
        data: [
          { name: 'Start', y: 50000 },
          { name: 'Increase', y: 20000 },
          { name: 'Decrease', y: -10000 },
          { name: 'End', isSum: true },
        ],
      },
    ],
    onPointClick: (event) => {
      alert(`Point clicked: ${event.point.name}, ${event.point.y}`);
    },
  },
};
