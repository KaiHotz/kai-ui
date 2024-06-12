import React, { FC, useMemo, forwardRef, Ref } from 'react';
import cx from 'clsx';
import Highcharts, { merge } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { TChartSeriesTypes } from '../types';
import './DateTimeSeries.scss';

export interface IDateTimeSeriesDataAxis {
  id?: string;
  name?: string;
  values: number[][];
}

export interface IDateTimeSeriesProps {
  data: IDateTimeSeriesDataAxis[];
  containerProps?: { [key: string]: unknown };
  onColumnClick?: (event: Highcharts.SeriesClickEventObject) => void;
  seriesType?: TChartSeriesTypes;
  options?: Omit<Highcharts.Options, 'series'>;
  callback?: (chart: Highcharts.Chart) => void;
  colorByPoint?: boolean;
  className?: string;
  ref?: Ref<HighchartsReact.RefObject>;
}

export const DateTimeSeries: FC<IDateTimeSeriesProps> = forwardRef<HighchartsReact.RefObject, IDateTimeSeriesProps>(
  (
    { data, containerProps, options, onColumnClick, seriesType = 'column', callback, colorByPoint = true, className },
    ref,
  ) => {
    const memoizedContainerProps = useMemo(
      () => ({
        className: cx('ui-date-time-series', className),
        ...containerProps,
      }),
      [className, containerProps],
    );

    const highchartsOptions = useMemo<Highcharts.Options>(() => {
      const timezoneOffset = new Date().getTimezoneOffset();

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
            type: 'datetime',
            minRange: 200000,
            crosshair: {
              dashStyle: 'ShortDot',
              snap: false,
            },
            dateTimeLabelFormats: {
              day: {
                main: '%b %d %Y',
              },
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
          tooltip: {
            shared: true,
            xDateFormat: '%A, %e %b %Y - %H:%M:%S',
          },
          legend: {
            enabled: false,
            y: -5,
            margin: 10,
            padding: 5,
            align: 'right',
            verticalAlign: 'top',
          },
          time: {
            timezoneOffset,
          },
          series: data.map(({ name, values, id }) => {
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
    }, [data, colorByPoint, options, seriesType, onColumnClick]);

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
