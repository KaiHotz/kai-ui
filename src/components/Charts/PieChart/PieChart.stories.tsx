import type { Meta, StoryObj } from '@storybook/react-vite';
import { faker } from '@faker-js/faker';
import times from 'lodash/times';

import { PieChart } from './index';
import { useTheme } from '../../../hooks';

const data = times(3, () => ({
  label: faker.hacker.abbreviation(),
  id: faker.hacker.abbreviation(),
  value: faker.number.float(),
}));

const meta: Meta<typeof PieChart> = {
  title: 'Components/Charts/PieChart',
  component: PieChart,
  tags: ['autodocs'],
  argTypes: {
    containerProps: {
      control: false,
    },
    options: {
      control: false,
    },
    onLegedItemClick: {
      control: false,
    },
    className: {
      control: false,
    },
    selected: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  render: (args) => {
    const { theme } = useTheme();

    return <PieChart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    data,
    size: 80,
    innerSize: 35,
    sortByValues: true,
    labelFormat: 'percentage',
    labelDistance: 25,
  },
};

export default meta;
