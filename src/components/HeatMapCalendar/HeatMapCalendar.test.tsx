import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HeatMapCalendar, IHeatMapCalendarProps } from './HeatMapCalendar';
import { dateNDaysAgo } from '../../utils/heatmapHelpers';

const defaultprops: IHeatMapCalendarProps = {
  data: [
    { date: new Date('2019-06-01'), value: 1234 },
    { date: new Date('2019-06-02'), value: 4321 },
    { date: new Date('2020-06-01'), value: 3214 },
    { date: new Date('2020-06-02'), value: 0 },
    { date: new Date('2020-06-03'), value: 2431 },
  ],
  renderTooltipText: (el) => `${el.date.toLocaleString()} ${el.value}`,
};

describe('<HeatMapCalendar />', () => {
  it('should render', () => {
    render(<HeatMapCalendar {...defaultprops} />);

    expect(screen.getByTestId('ui-heatmap-calendar')).toBeInTheDocument();
  });

  describe('when passed endDate and startDate as a sting', () => {
    it('should handle string formatted date range', () => {
      render(<HeatMapCalendar endDate="2019-12-31" startDate="2019-01-01" {...defaultprops} />);

      expect(screen.getAllByTestId('ui-heatmap-calendar-day').length).toBe(364);
    });
  });

  describe('when passed showMonthLabels true', () => {
    it('should show Month labels', () => {
      render(<HeatMapCalendar startDate={dateNDaysAgo(100)} {...defaultprops} showMonthLabels />);

      expect(screen.getAllByTestId('ui-heatmap-calendar-text').length).toBeGreaterThan(0);
    });
  });

  describe('when passed showMonthLabels false', () => {
    it('should hide Month labels', () => {
      render(<HeatMapCalendar {...defaultprops} showMonthLabels={false} />);

      expect(screen.queryAllByTestId('ui-heatmap-calendar-text')).toHaveLength(0);
    });
  });
});
