import { describe, expect, it } from 'vitest';

import { convertToDate, dateNDaysAgo, getDate, getRange, shiftDate } from '../heatmapHelpers';

describe('heatmap-helpers', () => {
  describe('when called shiftDate with 1 as second param', () => {
    it('adds a day to the first day of a month', () => {
      const startingDate = new Date(2017, 0, 1);
      const expectedDate = new Date(2017, 0, 2);

      expect(shiftDate(startingDate, 1).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called shiftDate with 2 as second param', () => {
    it('adds multiple days to the first day of a month', () => {
      const startingDate = new Date(2017, 0, 1);
      const expectedDate = new Date(2017, 0, 3);

      expect(shiftDate(startingDate, 2).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called shiftDate with -1 as second param', () => {
    it('subtracts a day from the first day of a month', () => {
      const startingDate = new Date(2017, 0, 1);
      const expectedDate = new Date(2016, 11, 31);

      expect(shiftDate(startingDate, -1).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called shiftDate with -2 as second param', () => {
    it('subtracts multiple days from the first day of a month', () => {
      const startingDate = new Date(2017, 0, 1);
      const expectedDate = new Date(2016, 11, 30);

      expect(shiftDate(startingDate, -2).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called getDate', () => {
    it('gets midnight (in the local timezone) on the date passed in', () => {
      const inputDate = new Date(2017, 11, 25, 21, 30, 59, 750);
      const expectedDate = new Date(2017, 11, 25, 0, 0, 0, 0);

      expect(getDate(inputDate).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called convertToDate with an "ISO-8601 date-only" string', () => {
    it('interprets it as UTC and converts it into a Date object representing the first millisecond on that date', () => {
      const iso8601DateOnlyString = '2017-07-14';
      const expectedDate = new Date(Date.UTC(2017, 6, 14, 0, 0, 0, 0));

      expect(convertToDate(iso8601DateOnlyString).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called convertToDate with a millisecond timestamp integer', () => {
    it('interprets it as UTC and converts it into a Date object representing that same millisecond', () => {
      const msTimestamp = 1500000001234; // Friday, July 14, 2017 2:40:01.234 AM, according to https://epochconverter.com
      const expectedDate = new Date(Date.UTC(2017, 6, 14, 2, 40, 1, 234));

      expect(convertToDate(msTimestamp).getTime()).toBe(expectedDate.getTime());
    });
  });

  describe('when called convertToDate with a Date object', () => {
    it('returns the same Date object it receives', () => {
      const inputDate = new Date(2017, 11, 25, 21, 30, 59, 750);
      const originalTimestamp = inputDate.getTime();

      expect(convertToDate(inputDate)).toBe(inputDate);
      expect(convertToDate(inputDate).getTime()).toBe(originalTimestamp);
    });
  });

  describe('when called dateNDaysAgo with positive days for month', () => {
    it('crosses month boundaries in the negative direction', () => {
      const numDays = 32;
      const startingDate = new Date();
      const expectedDate = new Date(startingDate.getTime());
      expectedDate.setDate(startingDate.getDate() - numDays);

      const expectedYear = expectedDate.getFullYear();
      const expectedMonth = expectedDate.getMonth();
      const expectedDay = expectedDate.getDate();

      expect(dateNDaysAgo(numDays).getFullYear()).toBe(expectedYear);
      expect(dateNDaysAgo(numDays).getMonth()).toBe(expectedMonth);
      expect(dateNDaysAgo(numDays).getDate()).toBe(expectedDay);
    });
  });

  describe('when called dateNDaysAgo with negative days for month', () => {
    it('crosses month boundaries in the positive direction', () => {
      const numDays = -32;
      const startingDate = new Date();
      const expectedDate = new Date(startingDate.getTime());
      expectedDate.setDate(startingDate.getDate() - numDays);

      const expectedYear = expectedDate.getFullYear();
      const expectedMonth = expectedDate.getMonth();
      const expectedDay = expectedDate.getDate();

      expect(dateNDaysAgo(numDays).getFullYear()).toBe(expectedYear);
      expect(dateNDaysAgo(numDays).getMonth()).toBe(expectedMonth);
      expect(dateNDaysAgo(numDays).getDate()).toBe(expectedDay);
    });
  });

  describe('when called dateNDaysAgo with positive days for year', () => {
    it('crosses year boundaries in the negative direction', () => {
      const numDays = 366;
      const startingDate = new Date();
      const expectedDate = new Date(startingDate.getTime());
      expectedDate.setDate(startingDate.getDate() - numDays);

      const expectedYear = expectedDate.getFullYear();
      const expectedMonth = expectedDate.getMonth();
      const expectedDay = expectedDate.getDate();

      expect(dateNDaysAgo(numDays).getFullYear()).toBe(expectedYear);
      expect(dateNDaysAgo(numDays).getMonth()).toBe(expectedMonth);
      expect(dateNDaysAgo(numDays).getDate()).toBe(expectedDay);
    });
  });
  describe('when called dateNDaysAgo with negative days for year', () => {
    it('crosses year boundaries in the positive direction', () => {
      const numDays = -366;
      const startingDate = new Date();
      const expectedDate = new Date(startingDate.getTime());
      expectedDate.setDate(startingDate.getDate() - numDays);

      const expectedYear = expectedDate.getFullYear();
      const expectedMonth = expectedDate.getMonth();
      const expectedDay = expectedDate.getDate();

      expect(dateNDaysAgo(numDays).getFullYear()).toBe(expectedYear);
      expect(dateNDaysAgo(numDays).getMonth()).toBe(expectedMonth);
      expect(dateNDaysAgo(numDays).getDate()).toBe(expectedDay);
    });
  });

  describe('when called getRange', () => {
    describe('when called with 0', () => {
      it('generates an empty array', () => {
        expect(getRange(0)).toEqual([]);
      });
    });
    describe('when called with 1', () => {
      it('generates an array containing one integer', () => {
        expect(getRange(1)).toEqual([0]);
      });
    });
    describe('when called with 5', () => {
      it('generates an array containing multiple integers', () => {
        expect(getRange(5)).toEqual([0, 1, 2, 3, 4]);
      });
    });
  });
});
