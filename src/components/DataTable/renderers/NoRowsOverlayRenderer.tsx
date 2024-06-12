import React, { FC, ReactNode } from 'react';

interface INoRowsOverlayRendererProps {
  noRowsMessage: ReactNode;
}

export const NoRowsOverlayRenderer: FC<INoRowsOverlayRendererProps> = ({ noRowsMessage }) => {
  return <div className="ag-custom-loading-cell">{noRowsMessage}</div>;
};
