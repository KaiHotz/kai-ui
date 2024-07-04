import React, { forwardRef, ReactElement, ReactNode } from 'react';
import cx from 'clsx';
import { FaAngleLeft, FaAngleRight, FaCompress, FaExpand, FaRegCircleXmark, FaXmark } from 'react-icons/fa6';

import { Button } from '../../Button';
import './DrawerLayout.scss';

export interface IDrawerAction {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  testId?: string;
}

interface IDrawerLayoutProps {
  title: ReactNode;
  children: ReactNode;
  onClose: (tabId?: string) => void;
  icon?: ReactNode;
  actions?: IDrawerAction[];
  anchor?: 'right' | 'left';
  onCloseAll?: () => void;
  activeTab?: string;
  toggleFullwidth?: () => void;
  toggleMinimize?: () => void;
  isFullWidth?: boolean;
  shouldDisplayHeader?: boolean;
  hasNegativeMarginScroll?: boolean;
  testId?: string;
}

export const DrawerLayout = forwardRef<HTMLDivElement, IDrawerLayoutProps>(
  (
    {
      children,
      title,
      icon,
      actions = [],
      onClose,
      onCloseAll,
      activeTab,
      anchor,
      toggleFullwidth,
      toggleMinimize,
      shouldDisplayHeader = true,
      isFullWidth,
      hasNegativeMarginScroll,
      testId = 'ui-drawer-layout',
    },
    ref,
  ) => {
    return (
      <div
        className={cx('ui-drawer-layout', { 'ui-drawer-layout--negative-margin-scroll': hasNegativeMarginScroll })}
        data-testid={testId}
      >
        {shouldDisplayHeader && (
          <div className="ui-drawer-layout__header" data-testid={`${testId}-header`}>
            <div className="ui-drawer-layout__header-title" data-testid={`${testId}-title`}>
              {icon}
              <h4 className="ui-drawer-layout__header-text">{title}</h4>
            </div>
            {actions.map((action) => (
              <div key={action.title} className="ui-drawer-layout__header-action">
                <Button
                  icon={action.icon}
                  title={action.title}
                  variant="ghost"
                  onClick={action.onClick}
                  testId={`${testId}-action-btn`}
                />
              </div>
            ))}
            {onCloseAll && (
              <div className="ui-drawer-layout__header-close-tab">
                <Button
                  icon={<FaRegCircleXmark size={14} />}
                  variant="ghost"
                  onClick={onCloseAll}
                  title="Close all tabs"
                  testId={`${testId}-close-all-btn`}
                />
              </div>
            )}
            {toggleMinimize && (
              <div className="ui-drawer-layout__header-minimize">
                <Button
                  icon={anchor === 'right' ? <FaAngleRight size={16} /> : <FaAngleLeft size={16} />}
                  variant="ghost"
                  title="Minimize slideout"
                  onClick={toggleMinimize}
                  testId={`${testId}-minimize-btn`}
                />
              </div>
            )}
            {toggleFullwidth && (
              <div>
                <Button
                  icon={isFullWidth ? <FaCompress size={14} /> : <FaExpand size={14} />}
                  variant="ghost"
                  title={isFullWidth ? 'Collapse slideout' : 'Maximize slideout'}
                  onClick={toggleFullwidth}
                  testId={`${testId}-full-width-btn`}
                />
              </div>
            )}
            <div>
              <Button
                icon={<FaXmark size={20} />}
                variant="ghost"
                title="Close tab"
                onClick={() => onClose(activeTab)}
                testId={`${testId}-close-btn`}
              />
            </div>
          </div>
        )}
        <div
          className="ui-drawer-layout__content"
          ref={ref}
          data-scrollable-ref="true"
          data-testid={`${testId}-content`}
        >
          {children}
        </div>
      </div>
    );
  },
);
