import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { AccordionSection } from './AccordionSection';

const props = {
  title: 'accordionSection',
  className: 'Custom',
  children: 'dwadaw',
};

describe('<AccordionSection />', () => {
  it('should allow custom className', () => {
    render(<AccordionSection {...props} />);
    expect(screen.getByTestId('ui-accordion-section')).toHaveClass(props.className);
  });

  it('should show title', () => {
    render(<AccordionSection {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
  it('should show children', () => {
    render(<AccordionSection {...props} />);
    expect(screen.getByText(/dwadaw/i)).toBeInTheDocument();
  });
});
