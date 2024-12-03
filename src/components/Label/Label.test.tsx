import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('<Label />', () => {
  it('should display text', () => {
    const props = {
      children: 'This is a Label',
    };
    render(<Label {...props} />);
    const label = screen.getByText(props.children);

    expect(label).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      children: 'This is a Label',
      className: 'custom',
    };
    render(<Label {...props} />);
    const label = screen.getByText(props.children);

    expect(label).toHaveClass(props.className);
  });

  it('should display text as required', () => {
    const props = {
      text: 'This is a Label',
      required: true,
    };
    render(<Label {...props} />);
    const label = screen.getByText(`${props.text} *`);

    expect(label).toBeInTheDocument();
  });

  it('should display children', () => {
    const props = {
      children: 'This is a Label',
      required: true,
    };
    render(<Label {...props} />);
    const label = screen.getByText(props.children);

    expect(label).toBeInTheDocument();
  });
});
