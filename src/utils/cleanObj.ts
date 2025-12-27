/** This function removes the _falsy_ values from the object.
 *  Please note this would remove all boolean values that are false.
 */
export const cleanObj = <T extends NonNullable<unknown>>(obj: T): Partial<T> =>
  Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {} as Record<string, unknown>) as Partial<T>;
