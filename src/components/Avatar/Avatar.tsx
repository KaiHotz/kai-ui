import React, { FC } from 'react';
import cx from 'clsx';
import { FaCameraRotate } from 'react-icons/fa6';

import { getInitials } from '../../utils';
import './Avatar.scss';

interface IAvatarProps {
  userName: string | undefined;
  src?: string;
  size?: 'medium' | 'small';
  onClick?: () => void;
  isEditable?: boolean;
  disabled?: boolean;
}

export const Avatar: FC<IAvatarProps> = ({ userName, src, size, onClick, isEditable, disabled }) => {
  return (
    <div
      className={cx('ui-avatar', {
        [`ui-avatar--${size}`]: size,
        'ui-avatar--clickable': onClick && !disabled,
        'ui-avatar--disabled': disabled,
      })}
      tabIndex={0}
      role="button"
      onClick={!disabled ? onClick : undefined}
    >
      {!src && userName ? (
        <div className="ui-avatar__initials">{getInitials(userName)}</div>
      ) : (
        <div className="ui-avatar__img" style={{ backgroundImage: src ? `url('${src}')` : 'none' }} />
      )}
      {isEditable && !disabled && (
        <div className="ui-avatar__icon">
          <FaCameraRotate size={size === 'medium' ? 24 : size === 'small' ? 20 : 36} />
        </div>
      )}
    </div>
  );
};
