import { Options } from 'highcharts';

import { getCSSVariable } from '../../utils';
const primaryFont = getCSSVariable('--font-primary');
const primaryFontColor = getCSSVariable('--emphasis-primary');

export const defaultHighchartsOptions: Options = {
  chart: {
    style: {
      fontFamily: primaryFont,
      fontSize: '12px',
      fontWeight: 'normal',
      color: primaryFontColor,
    },
    resetZoomButton: {
      relativeTo: 'plotBox',
      position: {
        x: 0,
        y: -10,
      },
      theme: {
        stroke: 'silver',
        r: 0,
        style: {
          fontSize: '10px',
          color: primaryFontColor,
        },
      },
    },
  },
  title: {
    style: {
      color: primaryFontColor,
      fontSize: '16px',
    },
  },
  subtitle: {
    style: {
      color: primaryFontColor,
      fontSize: '12px',
    },
  },
  tooltip: {
    style: {
      fontSize: '16px',
      color: primaryFontColor,
    },
  },
  legend: {
    itemStyle: {
      color: primaryFontColor,
      fontWeight: 'normal',
      fontSize: '12px',
    },
  },
  xAxis: {
    title: {
      style: {
        color: primaryFontColor,
        fontSize: '12px',
      },
    },
    labels: {
      style: {
        color: primaryFontColor,
        fontSize: '12px',
      },
    },
  },
  yAxis: {
    title: {
      style: {
        color: primaryFontColor,
        fontSize: '12px',
      },
    },
    labels: {
      style: {
        color: primaryFontColor,
        fontSize: '12px',
      },
    },
  },
  lang: {
    resetZoom: 'Reset zoom',
    noData: 'No data to display',
  },
  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      color: primaryFontColor,
    },
  },
  credits: {
    enabled: false,
  },
};
