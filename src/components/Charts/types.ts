export const chartSeriesTypes = ['column', 'bar', 'line', 'area'] as const;
export type TChartSeriesTypes = (typeof chartSeriesTypes)[number];
