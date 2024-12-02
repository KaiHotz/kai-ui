import React, { FC, ReactNode } from 'react';
import type { CustomLoadingOverlayProps } from 'ag-grid-react';

interface ILoadingOverlayRendererProps extends CustomLoadingOverlayProps {
  loadingMessage: ReactNode;
}

export const LoadingOverlayRenderer: FC<ILoadingOverlayRendererProps> = ({ loadingMessage }) => {
  return <div className="ag-custom-loading-cell">{loadingMessage}</div>;
};
