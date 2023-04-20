import { isType } from './isType';
import { CloneType } from './types';

/**
 * 深拷贝
 * @param {obj} 要拷贝的对象
 * @param {cache} 缓存的值
 * @returns 拷贝后的对象
 */
export function cloneDeep<T extends unknown>(obj: T, cache = new WeakMap()): T {
  /** 如果不是对象或者是null，直接返回 */
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  /** 如果已经缓存过，直接返回缓存的值 */
  if (cache.has(obj as object)) {
    return cache.get(obj as object);
  }

  /** 初始化返回结果 */
  let result: T, param!: T;

  /** 如果是日期对象，直接返回一个新的日期对象 */
  if (isType(CloneType.Date, obj) || isType(CloneType.RegExp, obj)) {
    param = obj;
  }

  result = new (obj as any).constructor(param);

  /** 如果是数组或对象，需要遍历 */
  if (
    isType(CloneType.Array, obj as object) ||
    isType(CloneType.Object, obj as object)
  ) {
    for (let key in obj) {
      if ((obj as object).hasOwnProperty(key)) {
        result[key] = cloneDeep(obj[key], cache);
      }
    }
  }

  /** 如果是Set */
  if (isType(CloneType.Set, obj)) {
    for (let value of (obj as unknown) as Set<T>) {
      (result as Set<T>).add(cloneDeep(value, cache));
    }
  }

  /** 如果是Map */
  if (isType(CloneType.Map, obj)) {
    for (let [key, value] of (obj as unknown) as Map<T, T>) {
      (result as Map<T, T>).set(cloneDeep(key, cache), cloneDeep(value, cache));
    }
  }

  /** 缓存值 */
  cache.set(obj as object, result);

  return result;
}
