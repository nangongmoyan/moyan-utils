/**
 * 数组扁平化
 * @param {data}
 * @param {generateValue}
 * @returns
 */
export function flatten<T>(
  data: T[],
  generateValue?: (item: T) => T[] | undefined
): T[] {
  return data.reduce((acc, cur) => {
    let tmp: T | T[] = cur;
    const propertyValue = generateValue?.(cur);
    if (Object.prototype.toString.call(cur) === '[object Object]') {
      propertyValue && (tmp = propertyValue);
    }

    if (Array.isArray(tmp)) {
      const prev = propertyValue ? acc.concat(cur) : acc;
      return [...prev, ...flatten(tmp, generateValue)];
    } else {
      return [...acc, cur];
    }
  }, [] as T[]);
}
