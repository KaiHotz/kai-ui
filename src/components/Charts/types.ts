export const chartSeriesTypes = ['column', 'bar', 'line', 'area', 'spline', 'areaspline'] as const;
export type TChartSeriesTypes = (typeof chartSeriesTypes)[number];
