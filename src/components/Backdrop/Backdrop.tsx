import React, { FC } from 'react';
import cx from 'clsx';

import './Backdrop.scss';

interface IBackdropProps {
  isFrosted?: boolean;
  onClose?: () => void;
  testId?: string;
}

export const Backdrop: FC<IBackdropProps> = ({ isFrosted, onClose, testId = 'ui-backdrop' }) => {
  return (
    <div
      className={cx('ui-backdrop', { 'ui-backdrop--frosted': isFrosted })}
      role="presentation"
      onClick={onClose}
      data-testid={testId}
    />
  );
};
