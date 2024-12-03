import { FC, useMemo } from 'react';
import './Score.scss';

interface IScoreProps {
  value: string | number;
  ticks?: number;
  color?: string;
  testId?: string;
}
export const Score: FC<IScoreProps> = ({ ticks = 30, value, color, testId = 'ui-score' }) => {
  const ticksArr = useMemo(() => {
    const tickSize = 360 / ticks;

    return Array(ticks)
      .fill(null)
      .map((_, index) => tickSize * index);
  }, [ticks]);

  return (
    <div className="ui-score" style={{ ['--ui-score--tick-color' as 'color']: color }} data-testid={testId}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="ui-score__ticks">
        {ticksArr.map((degree, i) => (
          <rect
            key={`${i + 1}`}
            className="ui-score__tick"
            x="50px"
            y="50px"
            fill="currentColor"
            strokeLinecap="round"
            width="2px"
            height="9px"
            style={{ transform: `rotate(${degree}deg) translateY(40px)` }}
          />
        ))}
      </svg>
      <span className="ui-score__value" data-testid={`${testId}-value`}>
        {value}
      </span>
    </div>
  );
};
