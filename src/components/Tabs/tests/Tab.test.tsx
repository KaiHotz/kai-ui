import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tab } from '../Tab';
import { ITabContextValues, TabContext } from '../context';

const defaultContextValue: ITabContextValues = {
  key: 'tab-0',
  id: 'tab-0',
  role: 'tab',
  tabIndex: 0,
  onClick: vi.fn(),
  onKeyDown: vi.fn(),
  'aria-posinset': 1,
  'aria-selected': false,
  'aria-controls': 'tab-0-panel',
};

const renderTab = (contextValue: Partial<ITabContextValues> = {}, children = 'Tab Content') => {
  const value = { ...defaultContextValue, ...contextValue };

  return render(
    <TabContext value={value}>
      <Tab>{children}</Tab>
    </TabContext>,
  );
};

describe('<Tab />', () => {
  const user = userEvent.setup();

  it('should render children', () => {
    renderTab({}, 'My Tab');

    expect(screen.getByText('My Tab')).toBeInTheDocument();
  });

  it('should have tab role', () => {
    renderTab();

    expect(screen.getByRole('tab')).toBeInTheDocument();
  });

  it('should have correct id from context', () => {
    renderTab({ id: 'custom-tab-id' });

    expect(screen.getByRole('tab')).toHaveAttribute('id', 'custom-tab-id');
  });

  it('should have correct tabIndex from context', () => {
    renderTab({ tabIndex: 0 });

    expect(screen.getByRole('tab')).toHaveAttribute('tabIndex', '0');
  });

  it('should have tabIndex -1 when not selected', () => {
    renderTab({ tabIndex: -1 });

    expect(screen.getByRole('tab')).toHaveAttribute('tabIndex', '-1');
  });

  it('should have aria-selected true when selected', () => {
    renderTab({ 'aria-selected': true });

    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true');
  });

  it('should have aria-selected false when not selected', () => {
    renderTab({ 'aria-selected': false });

    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'false');
  });

  it('should have correct aria-posinset', () => {
    renderTab({ 'aria-posinset': 3 });

    expect(screen.getByRole('tab')).toHaveAttribute('aria-posinset', '3');
  });

  it('should have correct aria-controls', () => {
    renderTab({ 'aria-controls': 'panel-1' });

    expect(screen.getByRole('tab')).toHaveAttribute('aria-controls', 'panel-1');
  });

  it('should call onClick when clicked', async () => {
    const onClick = vi.fn();
    renderTab({ onClick });

    await user.click(screen.getByRole('tab'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should call onKeyDown on key press', async () => {
    const onKeyDown = vi.fn();
    renderTab({ onKeyDown });

    const tab = screen.getByRole('tab');
    tab.focus();
    await user.keyboard('{Enter}');

    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should have tab class', () => {
    renderTab();

    expect(screen.getByRole('tab')).toHaveClass('tab');
  });

  it('should have tab--active class when selected', () => {
    renderTab({ 'aria-selected': true });

    expect(screen.getByRole('tab')).toHaveClass('tab', 'tab--active');
  });

  it('should not have tab--active class when not selected', () => {
    renderTab({ 'aria-selected': false });

    expect(screen.getByRole('tab')).toHaveClass('tab');
    expect(screen.getByRole('tab')).not.toHaveClass('tab--active');
  });

  it('should throw error when used outside TabContext', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<Tab>Tab Content</Tab>)).toThrow('A Tab must have a TabList parent');

    consoleSpy.mockRestore();
  });
});
