export const shallowEqual = (
  a: Record<string, any>,
  b: Record<string, any>
): boolean => {
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
};
