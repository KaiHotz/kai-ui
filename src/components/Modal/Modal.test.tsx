import { PropsWithChildren } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { keyNames } from '../../utils';
import { IModalProps, Modal } from './Modal';

describe('<Modal />', () => {
  const mockOnClose = vi.fn();

  const defaultProps: PropsWithChildren<IModalProps> = {
    onClose: mockOnClose,
    children: 'This is a modal child',
  };

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  describe('default rendering', () => {
    it('renders children inside the modal body', () => {
      render(<Modal {...defaultProps} />);

      expect(screen.getByText('This is a modal child')).toBeInTheDocument();
    });

    it('renders close button by default', () => {
      render(<Modal {...defaultProps} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders backdrop by default', () => {
      render(<Modal {...defaultProps} />);

      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });

    it('applies small size class by default', () => {
      render(<Modal {...defaultProps} />);

      const modal = document.querySelector('.ui-modal');
      expect(modal).toHaveClass('ui-modal--small');
    });
  });

  describe('size prop', () => {
    it.each(['small', 'medium', 'large', 'full-page'] as const)('applies %s size class', (size) => {
      render(<Modal {...defaultProps} size={size} />);

      const modal = document.querySelector('.ui-modal');
      expect(modal).toHaveClass(`ui-modal--${size}`);
    });
  });

  describe('close button', () => {
    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      render(<Modal {...defaultProps} />);

      const closeBtn = screen.getByRole('button');
      await user.click(closeBtn);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('does not render close button when disableCloseButton is true', () => {
      render(<Modal {...defaultProps} disableCloseButton />);

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('backdrop', () => {
    it('does not render backdrop when disableBackdrop is true', () => {
      render(<Modal {...defaultProps} disableBackdrop />);

      expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });

    it('renders frosted backdrop when hasFrozenBackdrop is true', () => {
      render(<Modal {...defaultProps} hasFrozenBackdrop />);

      const backdrop = screen.getByRole('presentation');
      expect(backdrop).toHaveClass('ui-backdrop--frosted');
    });

    it('renders backdrop when disableBackdrop is true but hasFrozenBackdrop is also true', () => {
      render(<Modal {...defaultProps} disableBackdrop hasFrozenBackdrop />);

      expect(screen.getByRole('presentation')).toBeInTheDocument();
    });
  });

  describe('keyboard interactions', () => {
    it('calls onClose when ESC key is pressed', async () => {
      const user = userEvent.setup();
      render(<Modal {...defaultProps} />);

      await user.keyboard(`{${keyNames.escape}}`);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when ESC is pressed and an editable element is focused', async () => {
      const user = userEvent.setup();
      render(
        <Modal {...defaultProps}>
          <input data-testid="input" />
        </Modal>,
      );

      const input = screen.getByTestId('input');
      input.focus();
      await user.keyboard(`{${keyNames.escape}}`);

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('does not call onClose when ESC is pressed and a textarea is focused', async () => {
      const user = userEvent.setup();
      render(
        <Modal {...defaultProps}>
          <textarea data-testid="textarea" />
        </Modal>,
      );

      const textarea = screen.getByTestId('textarea');
      textarea.focus();
      await user.keyboard(`{${keyNames.escape}}`);

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('click outside behavior', () => {
    it('calls onClose when clicking outside the modal', async () => {
      const user = userEvent.setup();
      render(<Modal {...defaultProps} />);

      await user.click(document.body);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when clicking outside if disableCoseOnClickOutside is true', async () => {
      const user = userEvent.setup();
      render(<Modal {...defaultProps} disableCoseOnClickOutside />);

      await user.click(document.body);

      expect(mockOnClose).not.toHaveBeenCalled();
    });

    it('does not call onClose when clicking inside the modal', async () => {
      const user = userEvent.setup();
      render(<Modal {...defaultProps} disableCloseButton />);

      const modalContent = screen.getByText('This is a modal child');
      await user.click(modalContent);

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('portal rendering', () => {
    it('renders modal content into document.body', () => {
      render(<Modal {...defaultProps} />);

      const modal = document.body.querySelector('.ui-modal');
      expect(modal).toBeInTheDocument();
    });
  });
});
