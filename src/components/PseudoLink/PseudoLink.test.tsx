import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { PseudoLink } from './PseudoLink';

const baseProps = {
  onClick: vi.fn(),
  children: 'This is a test link',
};

describe('<PseudoLink />', () => {
  it('should have strong text', () => {
    render(<PseudoLink {...baseProps} isStrong />);
    const btn = screen.getByRole('button');

    expect(btn).toHaveClass('ui-pseudo-link--strong');
  });

  it('should call onClick', () => {
    render(<PseudoLink {...baseProps} />);
    const btn = screen.getByRole('button');

    fireEvent.click(btn);

    expect(baseProps.onClick).toHaveBeenCalled();
  });
});
