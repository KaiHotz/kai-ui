import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, render, renderHook, screen } from '@testing-library/react';

import { Drawer } from './Drawer';
import { useDrawerClose } from '../../hooks';

const defaultProps = {
  title: 'This is a title',
  onClose: vi.fn(),
  children: 'dwadaw',
};

describe('Drawer Component', () => {
  describe('useDrawerClose', () => {
    describe('when user has not clicked', () => {
      it('should return closing =false', () => {
        const close = vi.fn();
        const { result } = renderHook(() => useDrawerClose(close));

        expect(result.current.closing).toEqual(false);
      });
    });
    describe('when user has clicked', () => {
      it('should return closing = true', () => {
        const close = vi.fn();
        const { result } = renderHook(() => useDrawerClose(close));

        const { closeWithDelay } = result.current;
        act(() => {
          closeWithDelay();
        });

        expect(result.current.closing).toEqual(true);
      });
      it('should call onClick fn after reaching the threshold', () => {
        const close = vi.fn();
        vi.useFakeTimers();

        const { result } = renderHook(() => useDrawerClose(close));

        const { closeWithDelay } = result.current;
        act(() => {
          closeWithDelay();
        });
        vi.runAllTimers();

        expect(close.mock.calls.length).toEqual(1);
      });
    });
  });
  describe('Drawer', () => {
    it('should render', () => {
      render(<Drawer {...defaultProps} />);
      expect(screen.getByTestId('ui-drawer-portal')).toBeInTheDocument();
    });

    it('should show children', () => {
      const { children } = defaultProps;
      render(<Drawer {...defaultProps} />);

      expect(screen.getByText(children)).toBeInTheDocument();
    });

    it('should with backdrop', () => {
      render(<Drawer {...defaultProps} />);

      expect(screen.getByTestId('ui-drawer-portal-backdrop')).toBeInTheDocument();
    });

    it('should render without backdrop', () => {
      render(<Drawer isBackdropDisabled {...defaultProps} />);
      expect(screen.queryByTestId('ui-drawer-portal-backdrop')).toBeFalsy();
    });
  });
});
