import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TabsList } from '../TabsList';
import { Tab } from '../Tab';
import { TabListContext } from '../context';

const renderTabsList = (selected = 0, onTabChange = vi.fn(), tabsId = 'test-tabs') => {
  return render(
    <TabListContext value={{ selected, onTabChange, tabsId }}>
      <TabsList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabsList>
    </TabListContext>,
  );
};

describe('<TabsList />', () => {
  const user = userEvent.setup();

  it('should render with tablist role', () => {
    renderTabsList();

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render all child tabs', () => {
    renderTabsList();

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('should render tabs with correct role', () => {
    renderTabsList();

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(3);
  });

  it('should set aria-selected true for selected tab', () => {
    renderTabsList(0);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('should set aria-selected true for second tab when selected is 1', () => {
    renderTabsList(1);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('should set correct tabIndex for tabs', () => {
    renderTabsList(0);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('tabIndex', '0');
    expect(tabs[1]).toHaveAttribute('tabIndex', '-1');
    expect(tabs[2]).toHaveAttribute('tabIndex', '-1');
  });

  it('should set tabIndex 0 for selected tab only', () => {
    renderTabsList(2);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('tabIndex', '-1');
    expect(tabs[1]).toHaveAttribute('tabIndex', '-1');
    expect(tabs[2]).toHaveAttribute('tabIndex', '0');
  });

  it('should set correct aria-posinset for each tab', () => {
    renderTabsList();

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-posinset', '1');
    expect(tabs[1]).toHaveAttribute('aria-posinset', '2');
    expect(tabs[2]).toHaveAttribute('aria-posinset', '3');
  });

  it('should set correct aria-controls for each tab', () => {
    const tabsId = 'my-tabs';
    renderTabsList(0, vi.fn(), tabsId);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-controls', `${tabsId}-0-tab`);
    expect(tabs[1]).toHaveAttribute('aria-controls', `${tabsId}-1-tab`);
    expect(tabs[2]).toHaveAttribute('aria-controls', `${tabsId}-2-tab`);
  });

  it('should set correct id for each tab', () => {
    const tabsId = 'my-tabs';
    renderTabsList(0, vi.fn(), tabsId);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('id', `${tabsId}-0`);
    expect(tabs[1]).toHaveAttribute('id', `${tabsId}-1`);
    expect(tabs[2]).toHaveAttribute('id', `${tabsId}-2`);
  });

  it('should call onTabChange when clicking a tab', async () => {
    const onTabChange = vi.fn();
    renderTabsList(0, onTabChange);

    const tabs = screen.getAllByRole('tab');
    await user.click(tabs[1]);

    expect(onTabChange).toHaveBeenCalledWith(1);
  });

  it('should call onTabChange with correct index when clicking third tab', async () => {
    const onTabChange = vi.fn();
    renderTabsList(0, onTabChange);

    const tabs = screen.getAllByRole('tab');
    await user.click(tabs[2]);

    expect(onTabChange).toHaveBeenCalledWith(2);
  });

  it('should focus the clicked tab', async () => {
    const onTabChange = vi.fn();
    renderTabsList(0, onTabChange);

    const tabs = screen.getAllByRole('tab');
    await user.click(tabs[1]);

    expect(tabs[1]).toHaveFocus();
  });

  it('should have tab-list class on container', () => {
    renderTabsList();

    expect(screen.getByRole('tablist')).toHaveClass('tab-list');
  });
});
