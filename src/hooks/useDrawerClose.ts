import { useEffect, useRef, useState } from 'react';

export const useDrawerClose = (onClose: () => void): { closing: boolean; closeWithDelay: () => void } => {
  const [closing, setClosing] = useState(false);
  const timeoutRef = useRef<number>(0);
  const closeWithDelay = () => {
    if (closing) {
      return;
    }
    setClosing(true);
    timeoutRef.current = window.setTimeout(() => onClose(), 300);
  };
  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  return { closing, closeWithDelay };
};
