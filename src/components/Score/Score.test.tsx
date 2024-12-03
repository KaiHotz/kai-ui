import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Score } from './Score';

const baseProps = {
  value: 30,
};

describe('<Score />', () => {
  it('should render', () => {
    render(<Score {...baseProps} />);

    expect(screen.getByTestId('ui-score')).toMatchSnapshot();
  });
});
