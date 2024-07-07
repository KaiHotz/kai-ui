import React, { ReactNode } from 'react';
import noop from 'lodash/noop';

import { DrawerPortal } from './DrawerPortal';
import { DrawerLayout, IDrawerAction } from './DrawerLayout';
import { useDrawerClose } from '../../hooks';

interface IDrawerProps {
  title: ReactNode;
  children: ReactNode;
  anchor?: 'right' | 'left';
  icon?: ReactNode;
  width?: string;
  offset?: number;
  shouldCloseByEsc?: boolean;
  shouldDisplayHeader?: boolean;
  isBackdropDisabled?: boolean;
  actions?: IDrawerAction[];
  className?: string;
  isMinimized?: boolean;
  isFullWidth?: boolean;
  onClose?: () => void;
  toggleMinimize?: () => void;
  toggleFullwidth?: () => void;
  onExpand?: () => void;
  testId?: string;
}

export const Drawer: React.FC<IDrawerProps> = ({
  children,
  title,
  icon,
  offset = 0,
  width = '700',
  shouldDisplayHeader = true,
  shouldCloseByEsc = true,
  isBackdropDisabled = false,
  onClose = noop,
  anchor = 'right',
  actions,
  className,
  toggleMinimize,
  isMinimized,
  toggleFullwidth,
  isFullWidth,
  onExpand,
  testId = 'ui-drawer',
}) => {
  const { closing, closeWithDelay } = useDrawerClose(onClose);

  return (
    <DrawerPortal
      onClose={closeWithDelay}
      closing={closing}
      width={width}
      offset={offset}
      anchor={anchor}
      shouldCloseByEsc={shouldCloseByEsc}
      isBackdropDisabled={isBackdropDisabled}
      className={className}
      toggleMinimize={toggleMinimize}
      isMinimized={isMinimized}
      toggleFullwidth={toggleFullwidth}
      isFullWidth={isFullWidth}
      onExpand={onExpand}
      testId={`${testId}-portal`}
    >
      <DrawerLayout
        onClose={closeWithDelay}
        title={title}
        shouldDisplayHeader={shouldDisplayHeader}
        icon={icon}
        actions={actions}
        testId={`${testId}-layout`}
      >
        {children}
      </DrawerLayout>
    </DrawerPortal>
  );
};
