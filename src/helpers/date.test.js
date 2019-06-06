import { formatDayOfMonth, formatFullDate } from './date';

describe('Date Helpers', () => {
  describe('formatFullDate', () => {
    it('Formats a date correctly as day month year', () => {
      const output = formatFullDate('2018-11-12T15:39:24.197Z');
      expect(output).toBe('12th November 2018');
    });
  });

  describe('formatDayOfMonth', () => {
    it('Formats a date correctly as day of month', () => {
      const output = formatDayOfMonth('2018-11-12T15:39:24.197Z');
      expect(output).toBe('12');
    });
  });
});