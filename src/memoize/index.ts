/**
 *
 * @param {Function} fn 需要缓存化的函数
 * @param {Function} resolver 这个函数的返回值作为缓存的 key
 * @returns {Function} 返回缓存化后的函数
 * @example
 * var object = { a: 1, b: 2 };
 * var other = { c: 3, d: 4 };
 *
 * var values = memoize(item => Object.values(item))
 * values(object) => [ 1, 2 ]
 * values(other) => [ 3, 4 ]
 *
 * object.a = 2;
 * values(object) => [ 1, 2 ]
 *
 * values.cache.set(object, ['a', 'b']);
 * values(object) => [ 'a', 'b' ]
 */
export function memoize(
  fn: (...args: any) => any,
  resolver?: (...args: any) => any
): ((...args: any) => any) & { cache: WeakMap<object, any> } {
  const memoized = (...args: any[]) => {
    /** 有resolver则取resolver的返回值，否则去第一个参数 */
    const key = resolver ? resolver.apply(resolver, args) : args[0];

    const cache = memoized.cache;
    /** 缓存中有的话则直接返回结果 */
    if (cache.has(key)) return cache.get(key);

    /** 调用缓存的函数 */
    const result = fn.apply(fn, args);

    /** 将缓存函数存放在缓存中 */
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  /** 定义cache类型 */
  memoized.cache = new WeakMap();

  return memoized;
}
