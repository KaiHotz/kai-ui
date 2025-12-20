import { type FC, useEffect, useState } from 'react';
import type { CellMouseOutEvent, CellMouseOverEvent } from 'ag-grid-community';

import { IActionsRendererProps } from './types';
import { excludeHiddenActions } from './excludeHiddenActions';
import './ActionsCellRenderer.scss';

export const ActionsCellRenderer: FC<IActionsRendererProps> = ({
  api,
  node,
  actions,
  data,
  value,
  context,
  showOnHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const filteredActions = excludeHiddenActions(actions, data);
  useEffect(() => {
    if (!api || !node) {
      return;
    }
    if (showOnHover) {
      const handleCellMouseOver = (event: CellMouseOverEvent) => {
        if (event.node?.id === node.id) {
          setIsHovered(true);
        }
      };

      const handleCellMouseOut = (event: CellMouseOutEvent) => {
        if (event.node?.id === node.id) {
          setIsHovered(false);
        }
      };

      api.addEventListener('cellMouseOver', handleCellMouseOver);
      api.addEventListener('cellMouseOut', handleCellMouseOut);

      return () => {
        // Check if the grid is still alive before removing event listeners
        if (!api.isDestroyed()) {
          api.removeEventListener('cellMouseOver', handleCellMouseOver);
          api.removeEventListener('cellMouseOut', handleCellMouseOut);
        }
      };
    }
  }, [api, node, showOnHover]);

  return (
    <div
      className="ui-actions-cell-renderer"
      style={
        showOnHover
          ? {
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out',
              pointerEvents: isHovered ? 'auto' : 'none',
            }
          : undefined
      }
    >
      {filteredActions.map(({ Icon, onClick, tooltip, ...params }, index) => {
        return (
          <button
            key={`${value}-${index}`}
            type="button"
            className="ui-actions-cell-renderer__icon"
            title={tooltip}
            onClick={() => onClick(data, params, context)}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
};
