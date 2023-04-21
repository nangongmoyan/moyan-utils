/**
 * 数组扁平化
 * @param {T[]} source  要扁平化的数组
 * @param {Function} generateValue 处理函数获取对应的值
 * @returns {T[]} 返回扁平化后的数组
 * @example
 * const numbers = [1, [2, [3, 4], 5], 6, [7, 8]];
 * flatten(numbers) => [1, 2, 3, 4, 5, 6, 7, 8]
 *
 * const data = [
 * {
 *    id: 1,
 *   name: 'item1',
 *   children: [
 *     {
 *       id: 2,
 *       name: 'item2',
 *       children: [
 *         { id: 3, name: 'item3' },
 *         { id: 4, name: 'item5' },
 *       ],
 *     },
 *     { id: 5, name: 'item5' },
 *   ],
 * },
 * { id: 6, name: 'item6' },
 *];
 *
 * flatten(data, item => item.children) =>
 * [
 * { id: 1, name: 'item1', children: [ [Object], [Object] ] },
 * { id: 2, name: 'item2', children: [ [Object], [Object] ] },
 * { id: 3, name: 'item3' },
 * { id: 4, name: 'item5' },
 * { id: 5, name: 'item5' },
 * { id: 6, name: 'item6' }
 *]
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
