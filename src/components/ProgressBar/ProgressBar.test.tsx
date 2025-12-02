import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { IProgressBarProps, ProgressBar } from './ProgressBar';

const defaultProps: IProgressBarProps = {
  value: 50,
  total: 100,
};

describe('<ProgressBar />', () => {
  describe('rendering', () => {
    it('should render with required props', () => {
      render(<ProgressBar {...defaultProps} />);

      expect(screen.getByTestId('ui-progress-bar')).toBeInTheDocument();
      expect(screen.getByTestId('ui-progress-bar-labels')).toBeInTheDocument();
      expect(screen.getByTestId('ui-progress-bar-value')).toBeInTheDocument();
      expect(screen.getByTestId('ui-progress-bar-total')).toBeInTheDocument();
      expect(screen.getByTestId('ui-progress-bar-progress')).toBeInTheDocument();
    });

    it('should render with custom testId', () => {
      render(<ProgressBar {...defaultProps} testId="custom-progress" />);

      expect(screen.getByTestId('custom-progress')).toBeInTheDocument();
      expect(screen.getByTestId('custom-progress-labels')).toBeInTheDocument();
      expect(screen.getByTestId('custom-progress-value')).toBeInTheDocument();
      expect(screen.getByTestId('custom-progress-total')).toBeInTheDocument();
      expect(screen.getByTestId('custom-progress-progress')).toBeInTheDocument();
    });
  });

  describe('percentage calculation', () => {
    it('should calculate 50% width when value is half of total', () => {
      render(<ProgressBar value={50} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '50%' });
    });

    it('should calculate 100% width when value equals total', () => {
      render(<ProgressBar value={100} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '100%' });
    });

    it('should calculate 0% width when value is 0', () => {
      render(<ProgressBar value={0} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '0%' });
    });

    it('should round percentage to nearest integer', () => {
      render(<ProgressBar value={1} total={3} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '33%' });
    });

    it('should clamp percentage to 100% when value exceeds total', () => {
      render(<ProgressBar value={150} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '100%' });
    });

    it('should clamp percentage to 0% when value is negative', () => {
      render(<ProgressBar value={-50} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '0%' });
    });
  });

  describe('labels', () => {
    it('should display value and total as default messages', () => {
      render(<ProgressBar value={25} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-value')).toHaveTextContent('25');
      expect(screen.getByTestId('ui-progress-bar-total')).toHaveTextContent('100');
    });

    it('should display custom valueMessage', () => {
      render(<ProgressBar {...defaultProps} valueMessage="50 items completed" />);

      expect(screen.getByTestId('ui-progress-bar-value')).toHaveTextContent('50 items completed');
    });

    it('should display custom totalMessage', () => {
      render(<ProgressBar {...defaultProps} totalMessage="100 total items" />);

      expect(screen.getByTestId('ui-progress-bar-total')).toHaveTextContent('100 total items');
    });

    it('should render ReactNode as valueMessage', () => {
      render(<ProgressBar {...defaultProps} valueMessage={<span data-testid="custom-value">Custom Value</span>} />);

      expect(screen.getByTestId('custom-value')).toBeInTheDocument();
      expect(screen.getByTestId('custom-value')).toHaveTextContent('Custom Value');
    });

    it('should render ReactNode as totalMessage', () => {
      render(<ProgressBar {...defaultProps} totalMessage={<span data-testid="custom-total">Custom Total</span>} />);

      expect(screen.getByTestId('custom-total')).toBeInTheDocument();
      expect(screen.getByTestId('custom-total')).toHaveTextContent('Custom Total');
    });
  });

  describe('variants', () => {
    it('should apply blue variant class by default', () => {
      render(<ProgressBar {...defaultProps} />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar--blue');
    });

    it('should apply primary variant class', () => {
      render(<ProgressBar {...defaultProps} variant="primary" />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar--primary');
    });

    it('should apply darkGray variant class', () => {
      render(<ProgressBar {...defaultProps} variant="darkGray" />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar--dark-gray');
    });

    it('should apply lightGray variant class', () => {
      render(<ProgressBar {...defaultProps} variant="lightGray" />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar--light-gray');
    });

    it('should apply blue variant class when explicitly set', () => {
      render(<ProgressBar {...defaultProps} variant="blue" />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar--blue');
    });

    it('should always have base class', () => {
      render(<ProgressBar {...defaultProps} variant="primary" />);

      expect(screen.getByTestId('ui-progress-bar')).toHaveClass('ui-progress-bar');
    });
  });

  describe('edge cases', () => {
    it('should handle very small values', () => {
      render(<ProgressBar value={1} total={1000} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '0%' });
    });

    it('should handle large numbers', () => {
      render(<ProgressBar value={500000} total={1000000} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '50%' });
    });

    it('should handle decimal values', () => {
      render(<ProgressBar value={33.33} total={100} />);

      expect(screen.getByTestId('ui-progress-bar-progress')).toHaveStyle({ width: '33%' });
    });
  });
});
