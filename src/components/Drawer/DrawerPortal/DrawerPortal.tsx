import React, { cloneElement, forwardRef, ReactElement, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import noop from 'lodash/noop';
import cx from 'clsx';

import { useCloseByEscape } from '../../../hooks';
import { Backdrop } from '../../Backdrop';
import './DrawerPortal.scss';

interface IDrawerPortalProps {
  children: ReactElement;
  anchor: 'right' | 'left';
  width: string;
  offset: number;
  shouldCloseByEsc?: boolean;
  closing: boolean;
  isBackdropDisabled?: boolean;
  className?: string;
  activeTab?: string;
  isMinimized?: boolean;
  isFullWidth?: boolean;
  testId?: string;
  onClose: (tabId?: string) => void;
  onExpand?: () => void;
  toggleMinimize?: () => void;
  toggleFullwidth?: () => void;
}

export const DrawerPortal = forwardRef<HTMLDivElement, IDrawerPortalProps>(
  (
    {
      children,
      anchor,
      width,
      offset,
      shouldCloseByEsc,
      closing,
      isBackdropDisabled,
      onClose,
      className,
      onExpand,
      activeTab,
      toggleMinimize,
      isMinimized,
      toggleFullwidth,
      isFullWidth,
      testId = 'ui-drawer-portal',
    },
    ref,
  ) => {
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const drawerWidth = width.includes('%') ? width : `${parseInt(width, 10)}px`;

    useEffect(() => {
      if (drawerRef.current) {
        drawerRef.current.style.setProperty('--ui-drawer-width', isFullWidth ? '100%' : drawerWidth);
        drawerRef.current.style.setProperty('--ui-drawer-offset', `${offset}px`);
      }
    }, [drawerWidth, offset, anchor, isFullWidth, onExpand, width]);

    useCloseByEscape(shouldCloseByEsc ? () => onClose(activeTab) : noop);

    const handleClose = (tabId?: string) => {
      onClose(tabId);
      if (isMinimized && toggleMinimize) {
        toggleMinimize();
      }
    };

    const handleFullwidth = () => {
      if (toggleFullwidth) {
        toggleFullwidth();
      }
      if (onExpand) {
        onExpand();
      }
    };

    return createPortal(
      <div className={cx('ui-drawer-portal', className)} ref={ref} data-testid={testId}>
        {!isBackdropDisabled && <Backdrop onClose={handleClose} testId={`${testId}-backdrop`} />}
        <>
          <CSSTransition
            appear
            timeout={0}
            in={!isMinimized && !closing}
            nodeRef={drawerRef}
            classNames={{
              enterActive: 'ui-drawer-portal--appear-active',
              enterDone: 'ui-drawer-portal--appear-done',
              exitDone: 'ui-drawer-portal--exit-done',
            }}
          >
            <div
              ref={drawerRef}
              className={cx('ui-drawer-portal', {
                'ui-drawer-portal--anchor-right': anchor === 'right',
                'ui-drawer-portal--anchor-left': anchor === 'left',
                'ui-drawer-portal--minimized': isMinimized,
              })}
              data-testid={`${testId}-content`}
            >
              {cloneElement(children, {
                toggleFullwidth: toggleFullwidth ? handleFullwidth : undefined,
                toggleMinimize: toggleMinimize || undefined,
                onClose: handleClose,
                isFullWidth,
                anchor,
              })}
            </div>
          </CSSTransition>
        </>
      </div>,
      document.body,
    );
  },
);
