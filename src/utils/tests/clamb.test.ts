import { describe, expect, it } from 'vitest';

import { clamb } from '../clamb';

describe('clamb', () => {
  describe('when value exeeds maximum', () => {
    it('should return maxvalue', () => {
      expect(clamb(0, 110, 100)).toEqual(100);
    });
  });
  describe('when value is less than minimum', () => {
    it('should return min value', () => {
      expect(clamb(40, 20, 100)).toEqual(40);
    });
  });
  describe('when value is between max and min', () => {
    it('should return value', () => {
      expect(clamb(0, 30, 100)).toEqual(30);
    });
  });
});
