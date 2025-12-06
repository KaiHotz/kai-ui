import { IconType } from 'react-icons';
import { ICellRendererParams } from 'ag-grid-community';

export interface IActionsCellRendererAction {
  readonly Icon: IconType;
  readonly onClick: (data: unknown, params: unknown, context: unknown) => void;
  readonly checkVisibility?: ((data: unknown) => boolean) | boolean;
  readonly tooltip?: string;
}

export interface IActionsRendererProps extends ICellRendererParams {
  value: string;
  actions: IActionsCellRendererAction[];
  showOnHover?: boolean;
}
