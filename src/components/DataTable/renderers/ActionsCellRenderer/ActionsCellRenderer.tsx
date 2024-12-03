import { FC } from 'react';

import { IActionsRendererProps } from './types';
import { excludeHiddenActions } from './excludeHiddenActions';
import './ActionsCellRenderer.scss';

export const ActionsCellRenderer: FC<IActionsRendererProps> = (props) => {
  const actions = excludeHiddenActions(props.actions, props.data);

  return (
    <div className="ui-actions-cell-renderer">
      {actions.map(({ Icon, onClick, tooltip, ...params }, index) => {
        return (
          <button
            key={`${props.value}-${index}`}
            type="button"
            className="ui-actions-cell-renderer__icon"
            title={tooltip}
            onClick={() => onClick(props.data, params, props.context)}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
};
