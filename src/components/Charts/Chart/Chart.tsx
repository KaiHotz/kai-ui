import React, { forwardRef, Ref, useMemo } from 'react';
import cx from 'clsx';
import Highcharts, { merge } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TChartSeriesTypes } from '../types';
import './Chart.scss';

export interface IChartDataAxis {
  values: number[] | number[][];
  id?: string;
  label?: string;
}

export interface IChartProps {
  data: IChartDataAxis[];
  containerProps?: { [key: string]: unknown };
  onColumnClick?: (event: Highcharts.SeriesClickEventObject) => void;
  seriesType?: TChartSeriesTypes;
  options?: Omit<Highcharts.Options, 'series'>;
  callback?: (chart: Highcharts.Chart) => void;
  colorByPoint?: boolean;
  className?: string;
  ref?: Ref<HighchartsReact.RefObject>;
}

export const Chart = forwardRef<HighchartsReact.RefObject, IChartProps>(
  (
    { data, containerProps, options, onColumnClick, seriesType = 'line', callback, colorByPoint = true, className },
    ref,
  ) => {
    const memoizedContainerProps = useMemo(
      () => ({
        className: cx('ui-chart', className),
        ...containerProps,
      }),
      [className, containerProps],
    );

    const highchartsOptions = useMemo<Highcharts.Options>(() => {
      return merge(
        {
          chart: {
            type: seriesType,
            zooming: {
              type: 'x',
              enabled: true,
            },
            animation: false,
          },
          xAxis: {
            tickInterval: 1,
            startOnTick: true,
            endOnTick: true,
            maxPadding: 0,
            minPadding: 0,
            labels: {
              padding: 0,
            },
            tickmarkPlacement: 'on',
            tickPosition: 'outside',
            crosshair: {
              dashStyle: 'ShortDot',
              snap: false,
            },
          },
          yAxis: {
            lineWidth: 1,
            allowDecimals: true,
            min: 0,
          },
          plotOptions: {
            area: {
              marker: {
                radius: 2,
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1,
                },
              },
              threshold: null,
            },
            series: {
              animation: false,
            },
          },
          legend: {
            enabled: false,
            y: -5,
            margin: 10,
            padding: 5,
            align: 'right',
            verticalAlign: 'top',
          },
          series: data.map(({ label: name, values, id }) => {
            return {
              id: id || name,
              name,
              data: values,
              type: seriesType,
              events: {
                click: onColumnClick ? (event) => onColumnClick(event) : undefined,
              },
              states: {
                hover: {},
                select: {
                  enabled: false,
                },
              },
              allowPointSelect: true,
            };
          }),
          colorByPoint,
        },
        options,
      );
    }, [seriesType, data, options, onColumnClick, colorByPoint]);

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
