/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { PseudoLinkCellRenderer } from './PseudoLinkCellRenderer';

describe('PseudoLinkCellRenderer', () => {
  describe('when value is not passed', () => {
    it('should not render component', () => {
      render(<PseudoLinkCellRenderer value={null} />);
      const btn = screen.queryByRole('button');
      expect(btn).toBeFalsy();
    });
    it('should render component with empty text', () => {
      render(<PseudoLinkCellRenderer value={null} emptyText="test" />);
      expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
  });

  describe('when value is passed', () => {
    it('should render component', () => {
      render(<PseudoLinkCellRenderer value="Test" />);
      expect(screen.getByText(/Test/i)).toBeInTheDocument();
    });
  });
});
