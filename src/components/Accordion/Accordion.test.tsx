import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Accordion } from './Accordion';
import { AccordionSection } from './AccordionSection';

describe('<Accordion />', () => {
  it('should render', () => {
    render(
      <Accordion>
        <AccordionSection title="dwdwdw">dwdwdw</AccordionSection>
      </Accordion>,
    );

    expect(screen.getByTestId('ui-accordion')).toBeDefined();
  });

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    };
    render(
      <Accordion {...props}>
        <AccordionSection title="dwdwdw">dwdwdw</AccordionSection>
      </Accordion>,
    );

    expect(screen.getByTestId('ui-accordion')).toHaveClass(props.className);
  });
});
