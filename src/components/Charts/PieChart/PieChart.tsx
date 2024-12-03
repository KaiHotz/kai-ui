import { FC, forwardRef, useMemo } from 'react';
import cx from 'clsx';
import Highcharts, { merge, Point, PointLegendItemClickCallbackFunction } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './PieChart.scss';

export interface IPieChartData {
  value: number;
  label?: string;
  id?: string;
  color?: string;
}

interface IPieChartProps {
  data: IPieChartData[];
  containerProps?: { [key: string]: unknown };
  selected?: string;
  options?: Omit<Highcharts.Options, 'colors' | 'series'>;
  size?: number;
  innerSize?: number;
  sortByValues?: boolean;
  labelFormat?: 'percentage' | 'value';
  labelDistance?: number;
  onLegedItemClick?: PointLegendItemClickCallbackFunction;
  className?: string;
  onLabelClick?: (item: IPieChartData) => void;
  callback?: (chart: Highcharts.Chart) => void;
}
// Highcharts format string, doc: https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#format-strings
// eslint-disable-next-line react-refresh/only-export-components
export const dataLabelFormats = {
  percentage:
    '<span class="ui-pie-chart__label"><span class="ui-pie-chart__label-badge" style="background: {color}">{percentage:.1f}%</span> <span class="ui-pie-chart__label-text">{point.name}</span></span>',
  value:
    '<span class="ui-pie-chart__label"><span class="ui-pie-chart__label-badge" style="background: {color}">{point.value}</span> <span class="ui-pie-chart__label-text">{point.name}</span></span>',
};

/**
 * before usage required this initialization:
 * @code
 * import VariablePie from 'highcharts/modules/variable-pie';
 * import NoChartData from 'highcharts/modules/no-data-to-display';
 * NoChartData(Highcharts);
 * VariablePie(Highcharts);
 */
export const PieChart: FC<IPieChartProps> = forwardRef<HighchartsReact.RefObject, IPieChartProps>(
  (
    {
      data,
      selected,
      onLabelClick,
      options,
      size = 80,
      innerSize = 35,
      containerProps,
      callback,
      sortByValues = true,
      onLegedItemClick,
      labelFormat = 'percentage',
      labelDistance = 25,
      className,
    },
    ref,
  ) => {
    const total = useMemo(() => data.reduce((acc, point) => acc + point.value, 0), [data]);
    const memoizedContainerProps = useMemo(() => {
      return {
        className: cx('ui-pie-chart', { 'ui-pie-chart--clickable': onLabelClick }, className),
        ...containerProps,
      };
    }, [onLabelClick, className, containerProps]);

    const highchartsOptions = useMemo<Highcharts.Options>(() => {
      const sortedData = sortByValues ? [...data].sort((a, b) => a.value - b.value) : data;
      const lastValue = sortedData.length ? sortedData[sortedData.length - 1].value : 0;

      return merge(
        {
          chart: {
            spacing: [10, 10, 10, 10],
            animation: false,
          },
          legend: {
            enabled: false,
          },
          noData: {
            position: {
              verticalAlign: 'top',
            },
            style: {
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#303030',
            },
          },
          xAxis: {
            tickInterval: 1,
            tickmarkPlacement: 'on',
            tickPosition: 'outside',
            startOnTick: true,
            endOnTick: true,
            maxPadding: 0,
            minPadding: 0,
            labels: {
              padding: 0,
            },
          },
          yAxis: {
            tickWidth: 0,
            lineWidth: 0,
            gridLineWidth: 0.3,
            startOnTick: true,
            endOnTick: true,
            maxPadding: 0,
            minPadding: 0,
            tickAmount: 7,
            /** @see UA-4833 to disable decimal numbers in y axis */
            allowDecimals: false,
          },
          plotOptions: {
            variablepie: {
              zMin: 0,
              zMax: selected ? 100 : (lastValue / total) * 100,
              center: ['50%', '50%'],
              startAngle: 180,
              size: `${size}%`,
              innerSize: `${innerSize}%`,
              point: {
                events: {
                  legendItemClick: onLegedItemClick,
                },
              },
            },
            series: {
              ...(onLabelClick
                ? {
                    point: {
                      events: {
                        click: (e) => {
                          const point = e.point as Point & IPieChartData;
                          onLabelClick({
                            id: point.id,
                            label: point.label,
                            value: point.value,
                          } as IPieChartData);
                        },
                      },
                    },
                  }
                : {}),
              animation: false,
              dataLabels: {
                format: dataLabelFormats[labelFormat],
                distance: labelDistance,
                connectorWidth: 0,
                allowOverlap: true,
                // padding >0 causes issues, that some labels can be hidden and allowOverlap=true can't fix it
                padding: 0,
                overflow: 'justify',
                useHTML: true,
                style: {
                  fontSize: '16px',
                  fontWeight: 'normal',
                },
              },
              states: {
                hover: {
                  enabled: false,
                },
                inactive: {
                  opacity: 1,
                },
              },
            },
          },
          tooltip: {
            enabled: false,
          },
          series: [
            {
              type: 'variablepie',
              showInLegend: true,
              colorByPoint: true,
              data: sortedData.map((point) => {
                const pointSelected = selected === point.id;
                const pointSelectedValue = pointSelected ? 100 : 75;
                const z = selected ? pointSelectedValue : (point.value / total) * 100;

                return { ...point, y: point.value, selected: pointSelected, name: point.label, z };
              }),
            },
          ],
        },
        options,
      );
    }, [
      data,
      onLabelClick,
      innerSize,
      onLegedItemClick,
      selected,
      total,
      size,
      options,
      sortByValues,
      labelFormat,
      labelDistance,
    ]);

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={highchartsOptions}
        containerProps={memoizedContainerProps}
        callback={callback}
        ref={ref}
      />
    );
  },
);
