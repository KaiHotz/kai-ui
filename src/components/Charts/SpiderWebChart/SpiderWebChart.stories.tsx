import { useCallback, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Highcharts, { AxisLabelsFormatterContextObject } from 'highcharts';

import { useTheme } from '../../../hooks';
import { ISpiderWebChartDataAxis, SpiderWebChart } from './SpiderWebChart';

const data: ISpiderWebChartDataAxis[] = [
  {
    id: 'chart_1',
    label: 'CHART 1',
    values: [10, 20, 30, 40, 50],
  },
  {
    id: 'chart_2"',
    label: 'CHART 2',
    values: [90, 70, 60, 80, 10],
    type: 'line',
    dashStyle: 'ShortDash',
  },
];

const meta: Meta<typeof SpiderWebChart> = {
  title: 'Components/Charts/SpiderWebChart',
  component: SpiderWebChart,
  argTypes: {
    className: {
      control: false,
    },
    containerProps: {
      control: false,
    },
    seriesType: {
      options: ['line', 'spline', 'area', 'areaspline'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    seriesType: 'line',
    colorByPoint: true,
    data,
    ref: null,
  },
};

type Story = StoryObj<typeof SpiderWebChart>;

export const Default: Story = {
  render: function useStory(args) {
    const { theme } = useTheme();

    return <SpiderWebChart {...args} className={`highcharts-${theme}`} />;
  },
  args: {
    options: {
      xAxis: {
        categories: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      },
    },
  },
};

export const WithIntercativeLabels: Story = {
  render: function useStory(args) {
    const { theme } = useTheme();
    const [selected, setSelected] = useState<string | number>('Label 1');

    const click = useCallback(function (this: AxisLabelsFormatterContextObject) {
      setSelected(this.value);
    }, []);

    const chartOptions = useMemo<Highcharts.Options>(() => {
      return {
        xAxis: {
          categories: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          labels: {
            useHTML: true,
            formatter() {
              const label = this.axis.categories[this.pos];

              return selected === label ? `<b><u>${this.axis.categories[this.pos]}</u></b>` : label;
            },
            style: {
              cursor: 'pointer',
            },
            events: { click },
          },
        },
      };
    }, [click, selected]);

    return (
      <div style={{ padding: '10px 20px' }}>
        <div style={{ marginBottom: '10px' }}>Selected label: {selected}</div>
        <SpiderWebChart {...args} className={`highcharts-${theme}`} options={chartOptions} />
      </div>
    );
  },
};

export default meta;
