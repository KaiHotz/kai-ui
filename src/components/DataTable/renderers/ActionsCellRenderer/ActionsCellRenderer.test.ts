/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';

import { excludeHiddenActions } from './excludeHiddenActions';

describe('ActionsCellRenderer', () => {
  describe('excludeHiddenActions', () => {
    describe('when actions are empty', () => {
      it('should return empty array', () => {
        expect(excludeHiddenActions(undefined as any, {})).toEqual([]);
      });
    });
    describe('when checkVisibility is not configured', () => {
      it('should return all actions', () => {
        const actions = [{ id: 1 }, { id: 2 }, { id: 3 }];
        expect(excludeHiddenActions(actions as any, {})).toEqual(actions);
      });
    });
    describe('when checkVisibility is configured as a boolean', () => {
      it('should exclude actions when checkVisibility=false', () => {
        const actions = [{ id: 1, checkVisibility: false }, { id: 2, checkVisibility: true }, { id: 3 }];
        expect(excludeHiddenActions(actions as any, {})).toEqual(actions.slice(1));
      });
    });
    describe('when checkVisibility is configured as a function', () => {
      it('should exclude actions when checkVisibility return false', () => {
        const actions = [{ id: 1, checkVisibility: () => false }, { id: 2, checkVisibility: () => true }, { id: 3 }];
        expect(excludeHiddenActions(actions as any, {})).toEqual(actions.slice(1));
      });
    });
  });
});
