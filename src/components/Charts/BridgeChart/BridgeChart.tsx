import { type FC, type RefObject, useMemo } from 'react';
import cx from 'clsx';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { merge } from 'highcharts';
import type { Options, PointClickEventObject, PointOptionsObject, XAxisOptions } from 'highcharts';
import './BridgeChart.scss';

// Data point interface
export interface IBridgeChartDataPoint extends PointOptionsObject {
  name: string;
  y?: number;
  isIntermediateSum?: boolean;
  isSum?: boolean;
}

// Series interface
export interface IBridgeChartSeries {
  name?: string;
  data: IBridgeChartDataPoint[];
}

// Props interface
export interface IBridgeChartProps {
  series: IBridgeChartSeries[];
  containerProps?: { [key: string]: unknown };
  categories?: XAxisOptions['categories'];
  title?: string;
  options?: Options;
  className?: string;
  callback?: (chart: Highcharts.Chart) => void;
  onPointClick?: (event: PointClickEventObject) => void;
  ref?: RefObject<HighchartsReact.RefObject | null>;
}

export const BridgeChart: FC<IBridgeChartProps> = ({
  series,
  containerProps,
  categories,
  title,
  options,
  className,
  onPointClick,
  callback,
  ref,
}) => {
  const memoizedContainerProps = useMemo(
    () => ({
      className: cx('ui-bridge-chart', className),
      ...containerProps,
    }),
    [className, containerProps],
  );
  const isSeriesEmpty = series.some((s) => s.data.length === 0);

  // Merge default options with custom options
  const chartOptions = useMemo<Highcharts.Options>(() => {
    const customSeries = isSeriesEmpty ? [] : series;

    return merge(
      {
        chart: {
          type: 'waterfall',
        },
        title: {
          text: title || '',
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          type: 'category',
          labels: {
            useHTML: true,
            allowOverlap: true,
            style: {
              wordBreak: 'break-word',
              textOverflow: 'allow',
            },
          },
          categories: categories || undefined,
        },
        yAxis: {
          title: {
            text: 'Value',
          },
          minPadding: 0.1,
          maxPadding: 0.1,
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
            },
            point: {
              events: {
                click: onPointClick,
              },
            },
          },
        },
        series: customSeries.map((s) => ({
          type: 'waterfall',
          data: s.data,
          name: s.name,
        })),
      },
      options,
    );
  }, [isSeriesEmpty, series, title, categories, onPointClick, options]);

  return (
    <div className={`h-full w-full ${className}`}>
      <HighchartsReact
        highcharts={Highcharts}
        containerProps={memoizedContainerProps}
        height="100%"
        options={chartOptions}
        callback={callback}
        ref={ref}
      />
    </div>
  );
};
