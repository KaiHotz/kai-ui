import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Stepper } from './Stepper';

describe('<Stepper />', () => {
  const defaultProps = {
    steps: [
      { title: 'Step One' },
      { title: 'Step Two', onClick: vi.fn() },
      { title: 'Step Three' },
      { title: 'Step Four' },
    ],
    activeStep: 2,
  };
  it('should have one active step', () => {
    const { container } = render(<Stepper {...defaultProps} />);

    expect(container.getElementsByClassName('ui-step__button--active').length).toBe(1);
  });

  it('should have two completed step', () => {
    const { container } = render(<Stepper {...defaultProps} />);

    expect(container.getElementsByClassName('ui-step__button--completed').length).toBe(2);
  });

  it('should show titles', () => {
    render(<Stepper {...defaultProps} />);
    expect(screen.getAllByTestId('ui-stepper-step-title').length).toBe(4);
  });

  it('should hide titles', () => {
    render(<Stepper {...defaultProps} hideTitle />);
    expect(screen.queryByTestId('ui-stepper-step-title')).toBeFalsy();
  });

  it('should call onClick on Step', () => {
    render(<Stepper {...defaultProps} />);

    const steps = screen.getAllByTestId('ui-stepper-step-btn');

    fireEvent.click(steps[1]);

    expect(defaultProps.steps[1].onClick).toHaveBeenCalled();
  });
});
