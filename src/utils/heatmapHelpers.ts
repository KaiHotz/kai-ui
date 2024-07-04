// minAlpha prevents totally transparent circles to be rendered when alpha calculation is less then 0.06
export const MIN_ALPHA = 0.06;
export const DEFAULT_MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// returns a new date shifted a certain number of days (can be negative)

export const shiftDate = (date: Date, numDays: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);

  return newDate;
};
// obj can be a parseable string, a millisecond timestamp, or a Date object
export const convertToDate = (obj: string | number | Date): Date => (obj instanceof Date ? obj : new Date(obj));

export const getDate = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const getEndDate = (endDate: string | number | Date): Date => getDate(convertToDate(endDate));

export const dateNDaysAgo = (numDaysAgo: number): Date => shiftDate(new Date(), -numDaysAgo);

export const getRange = (count: number): number[] => Array.from({ length: count }, (_, idx) => idx);
