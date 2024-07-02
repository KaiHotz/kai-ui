import { useEffect, useState } from 'react';

export interface UseCountdownProps {
  countDownTime?: number;
  onCountdownEnd: () => void;
}

export const useCountdown = ({ countDownTime = 30, onCountdownEnd }: UseCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(countDownTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else {
        onCountdownEnd();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onCountdownEnd]);

  return { timeLeft };
};
