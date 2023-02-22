/**
 * Returns a random number between the given `min` and `max` values (inclusive).
 * If `min` and `max` are equal, returns `min`.
 *
 * @param {number} min - The minimum value for the range.
 * @param {number} max - The maximum value for the range.
 *
 * @returns {number} A random number between `min` and `max`.
 */
export const getRandom = (min: number, max: number): number => {
  if (min === max) {
    return min;
  }
  return Math.random() * (max - min) + min;
};

export const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
