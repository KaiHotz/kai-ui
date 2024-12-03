export const chartSeriesTypes = ['area', 'areaspline', 'bar', 'column', 'line', 'spline'] as const;
export type TChartSeriesTypes = (typeof chartSeriesTypes)[number];
