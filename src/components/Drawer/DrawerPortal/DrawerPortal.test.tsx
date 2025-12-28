import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DrawerPortal } from './DrawerPortal';

const MockChild = ({
  onClose,
  anchor,
  isFullWidth,
  toggleFullwidth,
  toggleMinimize,
}: {
  onClose?: (tabId?: string) => void;
  anchor?: 'right' | 'left';
  isFullWidth?: boolean;
  toggleFullwidth?: () => void;
  toggleMinimize?: () => void;
}) => (
  <div data-testid="mock-child">
    <span data-testid="anchor-value">{anchor}</span>
    <span data-testid="fullwidth-value">{isFullWidth ? 'true' : 'false'}</span>
    {onClose && (
      <button data-testid="child-close-btn" onClick={() => onClose('test-tab')}>
        Close
      </button>
    )}
    {toggleFullwidth && (
      <button data-testid="child-fullwidth-btn" onClick={toggleFullwidth}>
        Toggle Fullwidth
      </button>
    )}
    {toggleMinimize && (
      <button data-testid="child-minimize-btn" onClick={toggleMinimize}>
        Toggle Minimize
      </button>
    )}
  </div>
);

const defaultProps = {
  anchor: 'right' as const,
  width: '400px',
  offset: 0,
  closing: false,
  onClose: vi.fn(),
  children: <MockChild />,
};

describe('<DrawerPortal />', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render', () => {
    render(<DrawerPortal {...defaultProps} />);

    expect(screen.getByTestId('ui-drawer-portal')).toBeInTheDocument();
  });

  it('should render with custom testId', () => {
    render(<DrawerPortal {...defaultProps} testId="custom-portal" />);

    expect(screen.getByTestId('custom-portal')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<DrawerPortal {...defaultProps} />);

    expect(screen.getByTestId('mock-child')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<DrawerPortal {...defaultProps} className="custom-class" />);

    expect(screen.getByTestId('ui-drawer-portal')).toHaveClass('custom-class');
  });

  describe('backdrop', () => {
    it('should render backdrop by default', () => {
      render(<DrawerPortal {...defaultProps} />);

      expect(screen.getByTestId('ui-drawer-portal-backdrop')).toBeInTheDocument();
    });

    it('should not render backdrop when isBackdropDisabled is true', () => {
      render(<DrawerPortal {...defaultProps} isBackdropDisabled />);

      expect(screen.queryByTestId('ui-drawer-portal-backdrop')).not.toBeInTheDocument();
    });

    it('should call onClose when backdrop is clicked', async () => {
      const onClose = vi.fn();
      render(<DrawerPortal {...defaultProps} onClose={onClose} />);
      const backdrop = screen.getByTestId('ui-drawer-portal-backdrop');

      await user.click(backdrop);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('anchor', () => {
    it('should apply anchor-right class when anchor is right', () => {
      render(<DrawerPortal {...defaultProps} anchor="right" />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toHaveClass('ui-drawer-portal--anchor-right');
    });

    it('should apply anchor-left class when anchor is left', () => {
      render(<DrawerPortal {...defaultProps} anchor="left" />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toHaveClass('ui-drawer-portal--anchor-left');
    });

    it('should pass anchor to children', () => {
      render(<DrawerPortal {...defaultProps} anchor="left" />);

      expect(screen.getByTestId('anchor-value')).toHaveTextContent('left');
    });
  });

  describe('minimized state', () => {
    it('should apply minimized class when isMinimized is true', () => {
      render(<DrawerPortal {...defaultProps} isMinimized />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toHaveClass('ui-drawer-portal--minimized');
    });

    it('should not apply minimized class when isMinimized is false', () => {
      render(<DrawerPortal {...defaultProps} isMinimized={false} />);

      expect(screen.getByTestId('ui-drawer-portal-content')).not.toHaveClass('ui-drawer-portal--minimized');
    });

    it('should call toggleMinimize when closing while minimized', async () => {
      const onClose = vi.fn();
      const toggleMinimize = vi.fn();
      render(<DrawerPortal {...defaultProps} onClose={onClose} toggleMinimize={toggleMinimize} isMinimized />);
      const backdrop = screen.getByTestId('ui-drawer-portal-backdrop');

      await user.click(backdrop);

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(toggleMinimize).toHaveBeenCalledTimes(1);
    });
  });

  describe('fullwidth', () => {
    it('should pass isFullWidth to children', () => {
      render(<DrawerPortal {...defaultProps} isFullWidth toggleFullwidth={vi.fn()} />);

      expect(screen.getByTestId('fullwidth-value')).toHaveTextContent('true');
    });

    it('should call toggleFullwidth and onExpand when handleFullwidth is triggered', async () => {
      const toggleFullwidth = vi.fn();
      const onExpand = vi.fn();
      render(<DrawerPortal {...defaultProps} toggleFullwidth={toggleFullwidth} onExpand={onExpand} />);

      const fullwidthBtn = screen.getByTestId('child-fullwidth-btn');
      await user.click(fullwidthBtn);

      expect(toggleFullwidth).toHaveBeenCalledTimes(1);
      expect(onExpand).toHaveBeenCalledTimes(1);
    });

    it('should not pass toggleFullwidth to children when not provided', () => {
      render(<DrawerPortal {...defaultProps} toggleFullwidth={undefined} />);

      expect(screen.queryByTestId('child-fullwidth-btn')).not.toBeInTheDocument();
    });
  });

  describe('toggleMinimize', () => {
    it('should pass toggleMinimize to children when provided', () => {
      render(<DrawerPortal {...defaultProps} toggleMinimize={vi.fn()} />);

      expect(screen.getByTestId('child-minimize-btn')).toBeInTheDocument();
    });

    it('should not pass toggleMinimize to children when not provided', () => {
      render(<DrawerPortal {...defaultProps} toggleMinimize={undefined} />);

      expect(screen.queryByTestId('child-minimize-btn')).not.toBeInTheDocument();
    });
  });

  describe('close by escape', () => {
    it('should close on escape key when shouldCloseByEsc is true', () => {
      const onClose = vi.fn();
      render(<DrawerPortal {...defaultProps} onClose={onClose} shouldCloseByEsc activeTab="tab-1" />);

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(onClose).toHaveBeenCalledWith('tab-1');
    });

    it('should not close on escape key when shouldCloseByEsc is false', () => {
      const onClose = vi.fn();
      render(<DrawerPortal {...defaultProps} onClose={onClose} shouldCloseByEsc={false} />);

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('width handling', () => {
    it('should handle pixel width', () => {
      render(<DrawerPortal {...defaultProps} width="500px" />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toBeInTheDocument();
    });

    it('should handle percentage width', () => {
      render(<DrawerPortal {...defaultProps} width="50%" />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toBeInTheDocument();
    });

    it('should handle numeric string width', () => {
      render(<DrawerPortal {...defaultProps} width="600" />);

      expect(screen.getByTestId('ui-drawer-portal-content')).toBeInTheDocument();
    });
  });

  describe('handleClose', () => {
    it('should pass handleClose to children', async () => {
      const onClose = vi.fn();
      render(<DrawerPortal {...defaultProps} onClose={onClose} />);

      const closeBtn = screen.getByTestId('child-close-btn');
      await user.click(closeBtn);

      expect(onClose).toHaveBeenCalledWith('test-tab');
    });
  });

  describe('portal rendering', () => {
    it('should render into document.body', () => {
      render(<DrawerPortal {...defaultProps} />);

      const portal = screen.getByTestId('ui-drawer-portal');
      expect(portal.parentElement).toBe(document.body);
    });
  });
});
