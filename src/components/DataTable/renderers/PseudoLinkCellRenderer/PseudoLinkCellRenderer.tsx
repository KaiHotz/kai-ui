import { FC, ReactNode } from 'react';
import { ICellRendererParams } from 'ag-grid-community';

import { PseudoLink } from '../../../PseudoLink';
import './PseudoLinkCellRenderer.scss';

export interface IPseudoLinkCellRendererProps extends ICellRendererParams {
  value: string | undefined | null;
  emptyText?: string;
  onClick: (value: string, data?: unknown) => void;
  icon?: ReactNode;
}

export const PseudoLinkCellRenderer: FC<IPseudoLinkCellRendererProps> = ({
  value,
  emptyText,
  data,
  onClick,
  valueFormatted,
  icon,
}) => {
  const valueToDisplay = valueFormatted === undefined || valueFormatted === null ? value : valueFormatted;
  if (!value) {
    return emptyText ? <span>{emptyText}</span> : null;
  }

  return (
    <PseudoLink onClick={() => onClick(value, data)}>
      <div className="ui-pseudo-link-cell-renderer__inner">
        {icon && <div className="ui-pseudo-link-cell-renderer__icon">{icon}</div>}
        <span>{valueToDisplay}</span>
      </div>
    </PseudoLink>
  );
};
