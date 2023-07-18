import { DataType } from '../types';
import { isMatchDataType } from '../isMatchDataType';

/**
 * 深拷贝
 * @param {T} obj 要拷贝的数据源
 * @param {WeakMap} cache 缓存的值
 * @returns {T} 拷贝后的数据
 * @example
 * const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5, g: { h: 6 } }
 * const obj2 = cloneDeep(obj1) => { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5, g: { h: 6 } }
 * obj1.c === obj2.c => true
 *
 * const array1 = [{ id: 1, children: [{ id: 2 }, { id: 3 }] }, { id: 4 }]
 * const array2 = cloneDeep(array1) => [{ id: 1, children: [{ id: 2 }, { id: 3 }] }, { id: 4 }]
 * array2[2] === array1[2] => true
 *
 * const array = [1, 2, 3, 4]
 * const set1 = new Set(array) => Set(4) { 1, 2, 3, 4 }
 * const set2 = cloneDeep(set1) => Set(4) { 1, 2, 3, 4 }
 *
 * const json = '{"user1":"John","user2":"Kate","user3":"Peter"}'
 * const map1 = new Map(Object.entries(JSON.parse(json))) => Map(3) { 'user1' => 'John', 'user2' => 'Kate', 'user3' => 'Peter' }
 * const map2 = cloneDeep(map1) Map(3) => { 'user1' => 'John', 'user2' => 'Kate', 'user3' => 'Peter' }
 *
 * const reg1 = new RegExp('abc', 'g') => /abc/g
 * const reg2 = cloneDeep(reg1) => /abc/g
 *
 * const date1 = new Date() => 2023-04-21T15:17:57.128Z
 * const date2 = cloneDeep(date1) => 2023-04-21T15:17:57.128Z
 */
export function cloneDeep<T extends unknown>(
  source: T,
  cache = new WeakMap()
): T {
  /** 如果不是对象或者是null，直接返回 */
  if (typeof source !== 'object' || source == null) {
    return source;
  }

  /** 如果已经缓存过，直接返回缓存的值 */
  if (cache.has(source as object)) {
    return cache.get(source as object);
  }

  /** 初始化返回结果 */
  let result: T, param!: T;

  /** 如果是日期对象，直接返回一个新的日期对象 */
  if (
    isMatchDataType(DataType.Date, source) ||
    isMatchDataType(DataType.RegExp, source)
  ) {
    param = source;
  }

  result = new (source as any).constructor(param);

  /** 如果是数组或对象，需要遍历 */
  if (
    isMatchDataType(DataType.Array, source as object) ||
    isMatchDataType(DataType.Object, source as object)
  ) {
    for (let key in source) {
      if ((source as object).hasOwnProperty(key)) {
        result[key] = cloneDeep(source[key], cache);
      }
    }
  }

  /** 如果是Set */
  if (isMatchDataType(DataType.Set, source)) {
    for (let value of source as unknown as Set<T>) {
      (result as Set<T>).add(cloneDeep(value, cache));
    }
  }

  /** 如果是Map */
  if (isMatchDataType(DataType.Map, source)) {
    for (let [key, value] of source as unknown as Map<T, T>) {
      (result as Map<T, T>).set(cloneDeep(key, cache), cloneDeep(value, cache));
    }
  }

  /** 缓存值 */
  cache.set(source as object, result);

  return result;
}
