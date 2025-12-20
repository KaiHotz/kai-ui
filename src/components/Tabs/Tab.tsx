import { FC, PropsWithChildren } from 'react';
import cx from 'clsx';
import { omit } from 'lodash';

import { useTab } from './context';
import './Tab.scss';

export const Tab: FC<PropsWithChildren> = ({ children }) => {
  const tabAttributes = useTab();

  return (
    <div
      {...omit(tabAttributes, ['key'])}
      key={tabAttributes.key}
      className={cx('tab', { 'tab--active': tabAttributes['aria-selected'] })}
    >
      {children}
    </div>
  );
};
