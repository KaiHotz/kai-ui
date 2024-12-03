import React, { forwardRef, Ref, useMemo } from 'react';
import cx from 'clsx';
import Highcharts, { merge } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './SpiderWebChart.scss';

export interface ISpiderWebChartDataAxis {
  values: number[] | number[][];
  id?: string;
  label?: string;
  type?: 'line' | 'spline' | 'area' | 'areaspline';
  dashStyle?: 'Solid' | 'ShortDash';
}
interface ISpiderWebChartProps {
  data: ISpiderWebChartDataAxis[];
  containerProps?: { [key: string]: unknown };
  seriesType?: 'line' | 'area';
  options?: Omit<Highcharts.Options, 'series'>;
  callback?: (chart: Highcharts.Chart) => void;
  colorByPoint?: boolean;
  className?: string;
  ref?: Ref<HighchartsReact.RefObject>;
}

/**
 * before usage required this initialization:
 * @code
 * import Highcharts  from 'highcharts';
 * import HighchartsMore from 'highcharts/highcharts-more';
 * import NoChartData from 'highcharts/modules/no-data-to-display';
 * HighchartsMore(Highcharts);
 * NoChartData(Highcharts);
 */
export const SpiderWebChart = forwardRef<HighchartsReact.RefObject, ISpiderWebChartProps>(
  ({ data, seriesType = 'area', options, containerProps, callback, className, colorByPoint }, ref) => {
    const memoizedContainerProps = useMemo(
      () => ({
        className: cx('ui-spider-web-chart', className),
        ...containerProps,
      }),
      [className, containerProps],
    );
    const highchartsOptions = useMemo<Highcharts.Options>(() => {
      return merge(
        {
          chart: {
            polar: true,
            animation: false,
          },
          noData: {
            style: {
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#303030',
            },
          },
          xAxis: {
            tickmarkPlacement: 'on',
            lineWidth: 0,
            tickInterval: 1,
            startOnTick: true,
            endOnTick: true,
            maxPadding: 0,
            minPadding: 0,
          },
          yAxis: {
            lineWidth: 0,
            min: 0,
            tickWidth: 0,
            tickAmount: 0,
            allowDecimals: false,
            gridLineWidth: 0.3,
            startOnTick: true,
            endOnTick: true,
            maxPadding: 0,
            minPadding: 0,
          },
          tooltip: {
            enabled: true,
            shadow: false,
            backgroundColor: '#000000',
            borderRadius: 10,
            borderWidth: 0,
            distance: 20,
            pointFormat: '<span>{point.y}</span>',
            style: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
          },
          series: data.map(({ label: name, values, id, type, dashStyle }) => {
            return {
              id,
              name,
              type: type || seriesType,
              dashStyle: type === 'line' && dashStyle ? dashStyle : 'Solid',
              data: values,
              allowPointSelect: true,
              pointPlacement: 'on',
            };
          }),
          colorByPoint,
        },
        options,
      );
    }, [data, colorByPoint, options, seriesType]);

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
  },
);
