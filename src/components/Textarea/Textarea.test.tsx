import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Textarea } from './Textarea';

const baseProps = {
  name: 'Textarea name',
};

describe('<Textarea />', () => {
  const user = userEvent.setup();

  describe('when there is an error and a hint', () => {
    it('should display error', () => {
      render(<Textarea {...baseProps} errorMsg="errorMsg" />);
      expect(screen.getByText(/errorMsg/i)).toBeInTheDocument();
    });
    it('should hide hint', () => {
      render(<Textarea {...baseProps} hintText="hintText" />);
      expect(screen.getByText(/hintText/i)).toBeInTheDocument();
    });
  });

  it('should render', () => {
    render(<Textarea {...baseProps} />);
    expect(screen.getByTestId('ui-textarea')).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    const props = {
      ...baseProps,
      onChange: vi.fn(),
    };
    render(<Textarea {...props} />);

    await user.type(screen.getByTestId('ui-textarea'), 'test');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should display label', () => {
    const props = {
      ...baseProps,
      label: 'This is a label',
    };
    render(<Textarea {...props} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<Textarea {...baseProps} disabled />);

    expect(screen.getByTestId('ui-textarea')).toHaveProperty('disabled');
  });
});
