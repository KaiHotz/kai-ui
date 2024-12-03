import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { Avatar } from './Avatar';

const defaultProps = {
  userName: 'Max Musterman',
};

describe('<Avatar />', () => {
  it('should render', () => {
    render(<Avatar {...defaultProps} />);
    const element = screen.getByRole('button');

    expect(element).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<Avatar {...defaultProps} disabled />);
    const element = screen.getByRole('button');

    expect(element).toHaveClass('ui-avatar--disabled');
  });

  it('should not show camara icon', async () => {
    render(<Avatar {...defaultProps} onClick={vi.fn()} />);
    const element = screen.getByRole('button');
    await userEvent.hover(element);
    const icon = screen.queryByRole('graphics-symbol');

    expect(icon).not.toBeInTheDocument();
  });

  it('should show call onClick', async () => {
    const props = {
      ...defaultProps,
      onClick: vi.fn(),
    };

    render(<Avatar {...props} />);
    const element = screen.getByRole('button');
    await userEvent.click(element);

    expect(props.onClick).toHaveBeenCalled();
  });
});
