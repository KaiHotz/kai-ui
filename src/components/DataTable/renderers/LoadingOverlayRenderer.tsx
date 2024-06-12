import React, { FC, ReactNode } from 'react';

interface ILoadingOverlayRendererProps {
  loadingMessage: ReactNode;
}

export const LoadingOverlayRenderer: FC<ILoadingOverlayRendererProps> = ({ loadingMessage }) => {
  return <div className="ag-custom-loading-cell">{loadingMessage}</div>;
};
