import { type FC, type RefObject, useMemo } from 'react';
import Highcharts, { type ColorType, merge } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface ISankeyChartSeriesNode {
  id?: string;
  color: ColorType;
}

export interface ISankeyChartDataAxis {
  values: (string | number)[][];
  nodes?: ISankeyChartSeriesNode[];
  keys?: string[];
  color?: ColorType;
  name?: string;
  nodeAlign?: 'top' | 'center' | 'button';
}

export interface ISankeyChartProps {
  data: ISankeyChartDataAxis[];
  containerProps?: { [key: string]: unknown };
  options?: Highcharts.Options;
  className?: string;
  callback?: (chart: Highcharts.Chart) => void;
  ref?: RefObject<HighchartsReact.RefObject | null>;
}

export const SankeyChart: FC<ISankeyChartProps> = ({ ref, data, containerProps, options, callback, className }) => {
  const memoizedContainerProps = useMemo(
    () => ({
      className,
      ...containerProps,
    }),
    [className, containerProps],
  );

  const highchartsOptions = useMemo<Highcharts.Options>(() => {
    return merge(
      {
        chart: {
          animation: false,
        },
        title: {
          text: '',
        },
        tooltip: {
          hideDelay: 0,
        },
        plotOptions: {
          sankey: {
            nodeWidth: 6,
          },
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
        },
        series: data.map(({ values, nodes, keys, color, name = 'Flow', nodeAlign = 'center' }) => {
          return {
            type: 'sankey',
            name,
            keys,
            color,
            nodes,
            data: values,
            nodeAlign,
          };
        }),
      },
      options,
    );
  }, [data, options]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      containerProps={memoizedContainerProps}
      height="100%"
      options={highchartsOptions}
      callback={callback}
      ref={ref}
    />
  );
};
