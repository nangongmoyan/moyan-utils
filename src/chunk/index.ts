/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
 * @param {T[]} source 需要处理的数组
 * @param {number} size 每个数组区块的长度
 * @returns {T[][]} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 * @example
 * const data = [1, 2, 3, 4, 5]
 * chunk(data, 1) => [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
 * chunk(data, 3)) => [ [ 1, 2, 3 ], [ 4, 5 ] ]
 * chunk(data, 5) => [ [ 1, 2, 3, 4, 5 ] ]
 */
export function chunk<T>(source: T[], size = 1) {
  /** size小于1时拆分没有意义，直接返回空数组 */
  if (size < 1) return [];
  const result = [];
  /** 遍历数组，每次递增size */
  for (let i = 0, len = source.length; i < len; i += size) {
    /** 截取对应长度的数组并塞到result中 */
    result.push(source.slice(i, i + size));
  }
  return result;
}
