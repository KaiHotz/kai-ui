import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs } from '../Tabs';
import { TabsList } from '../TabsList';
import { Tab } from '../Tab';
import { TabPanel } from '../TabPanel';

const renderTabs = (selectedIndex = 0, setSelected = vi.fn(), id = 'test-tabs') => {
  return render(
    <Tabs id={id} selected={selectedIndex} setSelected={setSelected}>
      <TabsList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabsList>
      <TabPanel>Panel 1 Content</TabPanel>
      <TabPanel>Panel 2 Content</TabPanel>
      <TabPanel>Panel 3 Content</TabPanel>
    </Tabs>,
  );
};

describe('<Tabs />', () => {
  const user = userEvent.setup();

  it('should render with default id', () => {
    render(
      <Tabs selected={0} setSelected={vi.fn()}>
        <TabsList>
          <Tab>Tab 1</Tab>
        </TabsList>
        <TabPanel>Panel 1</TabPanel>
      </Tabs>,
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should render with custom id', () => {
    const customId = 'custom-tabs';
    renderTabs(0, vi.fn(), customId);

    const container = document.getElementById(customId);
    expect(container).toBeInTheDocument();
  });

  it('should render all tabs', () => {
    renderTabs();

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('should render the selected panel content', () => {
    renderTabs(0);

    expect(screen.getByText('Panel 1 Content')).toBeInTheDocument();
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Panel 3 Content')).not.toBeInTheDocument();
  });

  it('should render second panel when selected index is 1', () => {
    renderTabs(1);

    expect(screen.queryByText('Panel 1 Content')).not.toBeInTheDocument();
    expect(screen.getByText('Panel 2 Content')).toBeInTheDocument();
    expect(screen.queryByText('Panel 3 Content')).not.toBeInTheDocument();
  });

  it('should render third panel when selected index is 2', () => {
    renderTabs(2);

    expect(screen.queryByText('Panel 1 Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Panel 2 Content')).not.toBeInTheDocument();
    expect(screen.getByText('Panel 3 Content')).toBeInTheDocument();
  });

  it('should call setSelected when clicking a tab', async () => {
    const setSelected = vi.fn();
    renderTabs(0, setSelected);

    const secondTab = screen.getByText('Tab 2');
    await user.click(secondTab);

    expect(setSelected).toHaveBeenCalledWith(1);
  });

  it('should have correct aria attributes on tab panel', () => {
    const id = 'aria-test';
    renderTabs(0, vi.fn(), id);

    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('role', 'tabpanel');
    expect(panel).toHaveAttribute('id', `${id}-0-tab`);
    expect(panel).toHaveAttribute('aria-labelledby', `${id}-0`);
  });

  it('should update aria attributes when selected tab changes', () => {
    const id = 'aria-test';
    const { rerender } = render(
      <Tabs id={id} selected={0} setSelected={vi.fn()}>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabsList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
      </Tabs>,
    );

    let panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('id', `${id}-0-tab`);
    expect(panel).toHaveAttribute('aria-labelledby', `${id}-0`);

    rerender(
      <Tabs id={id} selected={1} setSelected={vi.fn()}>
        <TabsList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabsList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
      </Tabs>,
    );

    panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('id', `${id}-1-tab`);
    expect(panel).toHaveAttribute('aria-labelledby', `${id}-1`);
  });

  it('should have tablist role on tabs container', () => {
    renderTabs();

    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('should mark selected tab with aria-selected true', () => {
    renderTabs(0);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('should mark second tab as selected when selected index is 1', () => {
    renderTabs(1);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
  });

  it('should set tabIndex 0 for selected tab and -1 for others', () => {
    renderTabs(0);

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('tabIndex', '0');
    expect(tabs[1]).toHaveAttribute('tabIndex', '-1');
    expect(tabs[2]).toHaveAttribute('tabIndex', '-1');
  });
});
