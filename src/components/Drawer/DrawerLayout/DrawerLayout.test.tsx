import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaGear } from 'react-icons/fa6';

import { DrawerLayout, IDrawerAction } from './DrawerLayout';

const defaultProps = {
  title: 'Test Drawer Title',
  onClose: vi.fn(),
  children: <div>Drawer Content</div>,
};

describe('<DrawerLayout />', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render', () => {
    render(<DrawerLayout {...defaultProps} />);

    expect(screen.getByTestId('ui-drawer-layout')).toBeInTheDocument();
  });

  it('should render with custom testId', () => {
    render(<DrawerLayout {...defaultProps} testId="custom-drawer" />);

    expect(screen.getByTestId('custom-drawer')).toBeInTheDocument();
  });

  it('should display title', () => {
    render(<DrawerLayout {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should display children', () => {
    render(<DrawerLayout {...defaultProps} />);

    expect(screen.getByText('Drawer Content')).toBeInTheDocument();
  });

  it('should display icon when provided', () => {
    render(<DrawerLayout {...defaultProps} icon={<FaGear data-testid="drawer-icon" />} />);

    expect(screen.getByTestId('drawer-icon')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    render(<DrawerLayout {...defaultProps} />);
    const closeBtn = screen.getByTestId('ui-drawer-layout-close-btn');

    await user.click(closeBtn);

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose with activeTab when provided', async () => {
    const onClose = vi.fn();
    render(<DrawerLayout {...defaultProps} onClose={onClose} activeTab="tab-1" />);
    const closeBtn = screen.getByTestId('ui-drawer-layout-close-btn');

    await user.click(closeBtn);

    expect(onClose).toHaveBeenCalledWith('tab-1');
  });

  describe('header visibility', () => {
    it('should display header by default', () => {
      render(<DrawerLayout {...defaultProps} />);

      expect(screen.getByTestId('ui-drawer-layout-header')).toBeInTheDocument();
    });

    it('should hide header when shouldDisplayHeader is false', () => {
      render(<DrawerLayout {...defaultProps} shouldDisplayHeader={false} />);

      expect(screen.queryByTestId('ui-drawer-layout-header')).not.toBeInTheDocument();
    });
  });

  describe('actions', () => {
    it('should render action buttons', async () => {
      const actionClick = vi.fn();
      const actions: IDrawerAction[] = [
        {
          title: 'Settings',
          icon: <FaGear />,
          onClick: actionClick,
        },
      ];

      render(<DrawerLayout {...defaultProps} actions={actions} />);
      const actionBtn = screen.getByTitle('Settings');

      await user.click(actionBtn);

      expect(actionClick).toHaveBeenCalledTimes(1);
    });

    it('should render multiple action buttons', () => {
      const actions: IDrawerAction[] = [
        { title: 'Action 1', icon: <FaGear />, onClick: vi.fn() },
        { title: 'Action 2', icon: <FaGear />, onClick: vi.fn() },
      ];

      render(<DrawerLayout {...defaultProps} actions={actions} />);

      expect(screen.getByTitle('Action 1')).toBeInTheDocument();
      expect(screen.getByTitle('Action 2')).toBeInTheDocument();
    });
  });

  describe('onCloseAll', () => {
    it('should not render close all button when onCloseAll is not provided', () => {
      render(<DrawerLayout {...defaultProps} />);

      expect(screen.queryByTestId('ui-drawer-layout-close-all-btn')).not.toBeInTheDocument();
    });

    it('should render close all button when onCloseAll is provided', () => {
      render(<DrawerLayout {...defaultProps} onCloseAll={vi.fn()} />);

      expect(screen.getByTestId('ui-drawer-layout-close-all-btn')).toBeInTheDocument();
    });

    it('should call onCloseAll when close all button is clicked', async () => {
      const onCloseAll = vi.fn();
      render(<DrawerLayout {...defaultProps} onCloseAll={onCloseAll} />);
      const closeAllBtn = screen.getByTestId('ui-drawer-layout-close-all-btn');

      await user.click(closeAllBtn);

      expect(onCloseAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('toggleMinimize', () => {
    it('should not render minimize button when toggleMinimize is not provided', () => {
      render(<DrawerLayout {...defaultProps} />);

      expect(screen.queryByTestId('ui-drawer-layout-minimize-btn')).not.toBeInTheDocument();
    });

    it('should render minimize button when toggleMinimize is provided', () => {
      render(<DrawerLayout {...defaultProps} toggleMinimize={vi.fn()} />);

      expect(screen.getByTestId('ui-drawer-layout-minimize-btn')).toBeInTheDocument();
    });

    it('should call toggleMinimize when minimize button is clicked', async () => {
      const toggleMinimize = vi.fn();
      render(<DrawerLayout {...defaultProps} toggleMinimize={toggleMinimize} />);
      const minimizeBtn = screen.getByTestId('ui-drawer-layout-minimize-btn');

      await user.click(minimizeBtn);

      expect(toggleMinimize).toHaveBeenCalledTimes(1);
    });
  });

  describe('toggleFullwidth', () => {
    it('should not render fullwidth button when toggleFullwidth is not provided', () => {
      render(<DrawerLayout {...defaultProps} />);

      expect(screen.queryByTestId('ui-drawer-layout-full-width-btn')).not.toBeInTheDocument();
    });

    it('should render fullwidth button when toggleFullwidth is provided', () => {
      render(<DrawerLayout {...defaultProps} toggleFullwidth={vi.fn()} />);

      expect(screen.getByTestId('ui-drawer-layout-full-width-btn')).toBeInTheDocument();
    });

    it('should call toggleFullwidth when fullwidth button is clicked', async () => {
      const toggleFullwidth = vi.fn();
      render(<DrawerLayout {...defaultProps} toggleFullwidth={toggleFullwidth} />);
      const fullWidthBtn = screen.getByTestId('ui-drawer-layout-full-width-btn');

      await user.click(fullWidthBtn);

      expect(toggleFullwidth).toHaveBeenCalledTimes(1);
    });

    it('should show expand icon when not fullwidth', () => {
      render(<DrawerLayout {...defaultProps} toggleFullwidth={vi.fn()} isFullWidth={false} />);

      expect(screen.getByTitle('Maximize slideout')).toBeInTheDocument();
    });

    it('should show compress icon when fullwidth', () => {
      render(<DrawerLayout {...defaultProps} toggleFullwidth={vi.fn()} isFullWidth />);

      expect(screen.getByTitle('Collapse slideout')).toBeInTheDocument();
    });
  });

  describe('negative margin scroll', () => {
    it('should apply negative margin scroll class when hasNegativeMarginScroll is true', () => {
      render(<DrawerLayout {...defaultProps} hasNegativeMarginScroll />);

      expect(screen.getByTestId('ui-drawer-layout')).toHaveClass('ui-drawer-layout--negative-margin-scroll');
    });

    it('should not apply negative margin scroll class by default', () => {
      render(<DrawerLayout {...defaultProps} />);

      expect(screen.getByTestId('ui-drawer-layout')).not.toHaveClass('ui-drawer-layout--negative-margin-scroll');
    });
  });

  describe('anchor', () => {
    it('should render right angle icon when anchor is right', () => {
      render(<DrawerLayout {...defaultProps} toggleMinimize={vi.fn()} anchor="right" />);

      expect(screen.getByTitle('Minimize slideout')).toBeInTheDocument();
    });

    it('should render left angle icon when anchor is left', () => {
      render(<DrawerLayout {...defaultProps} toggleMinimize={vi.fn()} anchor="left" />);

      expect(screen.getByTitle('Minimize slideout')).toBeInTheDocument();
    });
  });

  describe('content area', () => {
    it('should render content area with scrollable ref', () => {
      render(<DrawerLayout {...defaultProps} />);
      const content = screen.getByTestId('ui-drawer-layout-content');

      expect(content).toHaveAttribute('data-scrollable-ref', 'true');
    });
  });
});
