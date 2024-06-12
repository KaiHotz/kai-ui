import { describe, expect, it } from 'vitest';

import { capitalizeWords } from '../capitalizeWords';

describe('capitalizeWord', () => {
  it('should return the value capitalized', () => {
    const value = capitalizeWords('maximilian');
    expect(value).toBe('Maximilian');
  });

  it('should return every value capitalized', () => {
    const value = capitalizeWords('maximilian foo');
    expect(value).toBe('Maximilian Foo');
  });

  it('should omit unicode characters', () => {
    const value = capitalizeWords('Wahed is really nice! 🙂');
    expect(value).toBe('Wahed Is Really Nice! 🙂');
  });
});
