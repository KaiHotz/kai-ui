import React, { FC, ReactNode } from 'react';
import cx from 'clsx';
import './PseudoLink.scss';

interface IPseudoLinkProps {
  children: ReactNode;
  onClick: () => void;
  isStrong?: boolean;
}

export const PseudoLink: FC<IPseudoLinkProps> = ({ children, onClick, isStrong }) => {
  return (
    <button
      type="button"
      className={cx('ui-pseudo-link', {
        'ui-pseudo-link--strong': isStrong,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
