import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { IPaginationProps, Pagination } from './Pagination';

const defaultProps: IPaginationProps = {
  current: 2,
  pages: 5,
  onChange: vi.fn(),
};

describe('<Pagination />', () => {
  it('should allow navigation to first and last page', () => {
    const props = {
      ...defaultProps,
      fullPagination: true,
      testId: 'advanced-pagination',
      className: 'Custom',
    };
    render(<Pagination {...props} />);

    expect(screen.getByTestId('advanced-pagination-first-btn')).toBeInTheDocument();
    expect(screen.getByTestId('advanced-pagination-last-btn')).toBeInTheDocument();
  });
});
