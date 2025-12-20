import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TabPanel } from '../TabPanel';
import { ITabPanelContextValues, TabPanelContext } from '../context';

const defaultContextValue: ITabPanelContextValues = {
  role: 'tabpanel',
  id: 'tabs-0-tab',
  'aria-labelledby': 'tabs-0',
};

const renderTabPanel = (contextValue: Partial<ITabPanelContextValues> = {}, children = 'Panel Content') => {
  const value = { ...defaultContextValue, ...contextValue };

  return render(
    <TabPanelContext value={value}>
      <TabPanel>{children}</TabPanel>
    </TabPanelContext>,
  );
};

describe('<TabPanel />', () => {
  it('should render children', () => {
    renderTabPanel({}, 'My Panel Content');

    expect(screen.getByText('My Panel Content')).toBeInTheDocument();
  });

  it('should have tabpanel role', () => {
    renderTabPanel();

    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('should have correct id from context', () => {
    renderTabPanel({ id: 'custom-panel-id' });

    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'custom-panel-id');
  });

  it('should have correct aria-labelledby from context', () => {
    renderTabPanel({ 'aria-labelledby': 'tab-1' });

    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-1');
  });

  it('should have tab-panel class', () => {
    renderTabPanel();

    expect(screen.getByRole('tabpanel')).toHaveClass('tab-panel');
  });

  it('should render complex children', () => {
    render(
      <TabPanelContext value={defaultContextValue}>
        <TabPanel>
          <h2>Title</h2>
          <p>Paragraph content</p>
        </TabPanel>
      </TabPanelContext>,
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph content')).toBeInTheDocument();
  });

  it('should throw error when used outside TabPanelContext', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TabPanel>Panel Content</TabPanel>)).toThrow('A TabPanel must have a Tabs parent');

    consoleSpy.mockRestore();
  });
});
