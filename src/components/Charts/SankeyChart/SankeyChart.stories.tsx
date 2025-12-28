import type { Meta, StoryObj } from '@storybook/react-vite';

import { type ISankeyChartDataAxis, SankeyChart } from './SankeyChart';
import { useTheme } from '../../../hooks';

const meta: Meta<typeof SankeyChart> = {
  title: 'Components/Charts/SankeyChart',
  component: SankeyChart,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: false,
    },
    containerProps: {
      control: false,
    },
  },
  args: {
    ref: undefined,
  },
};

type Story = StoryObj<typeof SankeyChart>;

const data: ISankeyChartDataAxis[] = [
  {
    values: [
      ['Element 1', 'Element 2', 4],
      ['Element 2', 'Element 3', 3],
      ['Element 3', 'Element 4', 2],
    ],
  },
];

export const Default: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <SankeyChart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    data,
  },
};

export default meta;
