import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Switch } from './Switch';

describe('<Switch />', () => {
  it('should render Switch', () => {
    render(<Switch name="name" value onChange={() => vi.fn} />);
    expect(screen.getByTestId('dm-switch')).toMatchSnapshot();
  });
});
