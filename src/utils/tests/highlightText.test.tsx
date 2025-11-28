import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { highlightText } from '../highlightText';
import * as getCSSVariableModule from '../getCSSVariable';

describe('highlightText', () => {
  beforeEach(() => {
    vi.spyOn(getCSSVariableModule, 'getCSSVariable').mockReturnValue('rgb(255, 165, 0)');
  });

  it('should highlight text', () => {
    render(highlightText({ highlight: 'highlight', text: 'highlight this text' }));

    const highlightedText = screen.getByText('highlight');

    expect(highlightedText).toHaveStyle({ color: 'rgb(255, 165, 0)', fontWeight: 'bolder' });
  });
});
