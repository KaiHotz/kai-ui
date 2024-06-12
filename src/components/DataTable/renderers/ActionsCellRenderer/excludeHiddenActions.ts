import { IActionsCellRendererAction } from './types';

export const excludeHiddenActions = (actions: IActionsCellRendererAction[], data: unknown) => {
  return (actions || []).filter((action) => {
    if (action.checkVisibility !== undefined) {
      if (typeof action.checkVisibility !== 'function') {
        return action.checkVisibility;
      }

      return action.checkVisibility(data);
    }

    return true;
  });
};
