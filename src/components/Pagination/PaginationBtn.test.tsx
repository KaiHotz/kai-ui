import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PaginationBtn } from './PaginationBtn';

const defaultProps = {
  page: 2,
  onClick: vi.fn(),
};

describe('<PaginationItem />', () => {
  const user = userEvent.setup();

  it('should render', () => {
    render(<PaginationBtn {...defaultProps} />);
    const element = screen.getByTestId('ui-pagination-btn');

    expect(element).toBeInTheDocument();
  });

  it('should call onClick', async () => {
    render(<PaginationBtn {...defaultProps} />);
    const element = screen.getByTestId('ui-pagination-btn');
    await user.click(element);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
