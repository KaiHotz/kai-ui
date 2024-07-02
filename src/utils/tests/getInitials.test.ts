import { describe, expect, it } from 'vitest';

import { getInitials } from '../getInitials';

describe('getInitials', () => {
  it('should return first and last letter', () => {
    const initials = getInitials('Max Mustermann');

    expect(initials).toBe('MM');
  });

  it('should return first and last letter when name is more then 2 words', () => {
    const initials = getInitials('Max Mustermann Perez');

    expect(initials).toBe('MP');
  });

  it('should return only first letter when name is only one word', () => {
    const initials = getInitials('Max');

    expect(initials).toBe('M');
  });
});
