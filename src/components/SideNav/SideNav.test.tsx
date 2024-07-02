import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaCircleInfo, FaCreativeCommonsBy, FaRegUser, FaSistrix } from 'react-icons/fa6';

import { SideNav, SideNavItem } from './SideNav';

const menuItems: SideNavItem[] = [
  {
    title: 'Dashboard',
    icon: <FaSistrix />,
    onClick: vi.fn(),
  },
  {
    title: 'Users',
    icon: <FaRegUser />,
    onClick: vi.fn(),
  },
  {
    title: 'Details',
    icon: <FaCreativeCommonsBy />,
    onClick: vi.fn(),
    badge: (
      <span style={{ color: 'red' }}>
        <FaCircleInfo size={16} />
      </span>
    ),
  },
];

describe('<SideNav />', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<SideNav items={menuItems} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render correct amount of items', () => {
    const elements = screen.getAllByRole('button');

    expect(elements.length).toBe(menuItems.length);
  });

  it('should not be expanded on initial render', () => {
    const element = screen.getByRole('navigation');

    expect(element).not.toHaveClass('ui-side-nav--expanded');
  });

  it('should be expanded on mousEnter', async () => {
    const element = screen.getByRole('navigation');
    await user.hover(element);

    expect(element).toHaveClass('ui-side-nav--expanded');
  });

  it('should not be expanded on mouseLeave', async () => {
    const element = screen.getByRole('navigation');
    await user.hover(element);
    expect(element).toHaveClass('ui-side-nav--expanded');

    await user.unhover(element);
    expect(element).not.toHaveClass('ui-side-nav--expanded');
  });
});
