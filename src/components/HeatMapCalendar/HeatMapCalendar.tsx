import { FC, Fragment, ReactNode } from 'react';
import { addDays, subDays } from 'date-fns';
import cx from 'clsx';
import { Tooltip } from 'react-tooltip';

import { EThemeOptions } from '../../providers/theme/types';
import { convertToDate, dateNDaysAgo, DEFAULT_MONTH_LABELS, getEndDate, getRange, MIN_ALPHA } from '../../utils';

import './HeatMapCalendar.scss';

const MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000;
const DAYS_IN_WEEK = 7;
const CIRCLE_RADIUS = 5;
const CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
const MONTH_LABEL_GUTTER_SIZE = 10;

export type HeatMapCalendarValue = {
  date: string | number | Date;
  value: number;
};

export interface IHeatMapCalendarElement {
  className: string;
  text: string | ReactNode;
  value: HeatMapCalendarValue;
  alpha: number | null;
}

export interface IHeatMapCalendarProps {
  /** data Array for building the heatmap */
  data: HeatMapCalendarValue[];
  /** number of days back from endDate to show */
  numDays?: number;
  /** start of date range */
  startDate?: string | Date;
  /** end of date range */
  endDate?: string | Date;
  /** size of space between circles */
  gutterSize?: number;
  /** whether to show month labels */
  showMonthLabels?: boolean;
  /** An array with 12 strings representing the text from janurary to december */
  monthLabels?: string[];
  /** function which returns text for value */
  renderTooltipText: (value: HeatMapCalendarValue) => ReactNode;
  /** callback function when a circle is clicked */
  onClick?: (value: HeatMapCalendarValue) => void;
  theme?: EThemeOptions;
  testId?: string;
}

export const HeatMapCalendar: FC<IHeatMapCalendarProps> = ({
  data,
  numDays,
  startDate = dateNDaysAgo(data.length),
  endDate = new Date(Date.now() - 864e5), // 864e5 === 86400000 === 24*60*60*1000 === 1 day,
  gutterSize = 10,
  showMonthLabels = true,
  renderTooltipText,
  monthLabels = DEFAULT_MONTH_LABELS,
  onClick,
  testId = 'ui-heatmap-calendar',
  theme = EThemeOptions.LIGHT,
}) => {
  const circleWithGutterSize = CIRCLE_DIAMETER + gutterSize;
  const monthLabelSize = showMonthLabels ? CIRCLE_DIAMETER + MONTH_LABEL_GUTTER_SIZE : 0;
  const maxValue = Math.max(...data.map((el: HeatMapCalendarValue) => el.value));
  const timeDiff = getEndDate(endDate).getTime() - convertToDate(startDate).getTime();

  const getDateDifferenceInDays = () => numDays || Math.ceil(timeDiff / MILLISECONDS_IN_ONE_DAY);
  const getStartDate = () => {
    return addDays(getEndDate(endDate), -getDateDifferenceInDays() + 1); // +1 because endDate is inclusive
  };
  const getNumEmptyDaysAtStart = () => getStartDate().getDay();
  const getStartDateWithEmptyDays = () => subDays(getStartDate(), getNumEmptyDaysAtStart());
  const getWeekCount = () => {
    const numDaysRoundedToWeek =
      getDateDifferenceInDays() + getNumEmptyDaysAtStart() + (DAYS_IN_WEEK - 1 - getEndDate(endDate).getDay());

    return Math.ceil(numDaysRoundedToWeek / DAYS_IN_WEEK);
  };

  const heatMapData = data.reduce((acc: { [key: number]: IHeatMapCalendarElement }, el: HeatMapCalendarValue) => {
    const date = el.date && convertToDate(el.date);
    const index = Math.floor(
      (date ? date.getTime() - getStartDateWithEmptyDays().getTime() : 0) / MILLISECONDS_IN_ONE_DAY,
    );

    acc[index] = {
      value: el,
      className: el?.value > 0 ? 'color-filled' : 'color-empty',
      text: renderTooltipText ? renderTooltipText(el) : '',
      alpha: el?.value > 0 ? el.value / maxValue : null,
    };

    return acc;
  }, {});

  const handleClick = (value: HeatMapCalendarValue | null) => {
    if (onClick && value) {
      onClick(value);
    }
  };

  const tooltipId = 'ui-heatmap-tooltip';

  const renderDay = (dayIndex: number, index: number) => {
    const indexOutOfRange =
      index < getNumEmptyDaysAtStart() || index >= getNumEmptyDaysAtStart() + getDateDifferenceInDays();
    if (indexOutOfRange) {
      return null;
    }
    const [x, y] = [0, dayIndex * circleWithGutterSize];
    const alpha = heatMapData[index]?.alpha || null;

    return (
      <a
        key={index}
        data-tooltip-id={tooltipId}
        data-tooltip-content={(heatMapData[index]?.text as string) || ''}
        data-tooltip-place="top"
      >
        <circle
          r={CIRCLE_RADIUS}
          cx={x}
          cy={y}
          fill={alpha ? `rgba(0, 122, 255, ${Math.max(alpha, MIN_ALPHA)})` : '#dddddd'}
          className={cx(heatMapData[index]?.className || 'color-empty', 'ui-heatmap-calendar__day', {
            'ui-heatmap-calendar__day--clickable': !!onClick,
          })}
          onClick={() => handleClick(heatMapData[index]?.value || null)}
          data-testid={`${testId}-day`}
        />
      </a>
    );
  };

  const renderWeek = (weekIndex: number) => (
    <g
      key={weekIndex}
      transform={`translate(${weekIndex * circleWithGutterSize}, 0)`}
      className="ui-heatmap-calendar__week"
      data-testid={`${testId}-week`}
    >
      {getRange(DAYS_IN_WEEK).map((dayIndex) => renderDay(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex))}
    </g>
  );

  const renderMonthLabels = () => {
    const weekRange = getRange(getWeekCount());

    return weekRange.map((weekIndex) => {
      const endOfWeek = addDays(getStartDateWithEmptyDays(), (weekIndex + 1) * DAYS_IN_WEEK);
      const [x, y] = [weekIndex * circleWithGutterSize, CIRCLE_DIAMETER];

      return endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK ? (
        <Fragment key={weekIndex}>
          <line x1={x} y1={-CIRCLE_RADIUS} x2={x} y2={-CIRCLE_RADIUS / 2} stroke="#cccccc" />
          <text
            x={x - monthLabelSize / 2}
            y={y}
            className="ui-heatmap-calendar__month-label"
            data-testid={`${testId}-text`}
          >
            {monthLabels[endOfWeek.getMonth()]}
          </text>
        </Fragment>
      ) : null;
    });
  };

  const viewBoxWidth = getWeekCount() * circleWithGutterSize - (gutterSize - CIRCLE_DIAMETER);
  const viewBoxHeight = DAYS_IN_WEEK * circleWithGutterSize + (monthLabelSize - gutterSize) + CIRCLE_DIAMETER;

  return (
    <div className="ui-heatmap-calendar__wrapper" data-testid={testId}>
      <svg className="ui-heatmap-calendar" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight + CIRCLE_RADIUS}`}>
        {showMonthLabels && (
          <g
            transform={`translate(${CIRCLE_DIAMETER}, ${viewBoxHeight - CIRCLE_DIAMETER})`}
            className="ui-heatmap-calendar__month-labels"
          >
            {renderMonthLabels()}
          </g>
        )}
        <g transform={`translate(${CIRCLE_DIAMETER}, ${CIRCLE_DIAMETER})`} className="ui-heatmap-calendar__all-weeks">
          {getRange(getWeekCount()).map((weekIndex) => renderWeek(weekIndex))}
        </g>
      </svg>
      <Tooltip id={tooltipId} variant={theme === EThemeOptions.LIGHT ? EThemeOptions.DARK : EThemeOptions.LIGHT} />
    </div>
  );
};
