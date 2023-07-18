/**
 * 生成经 predicate 判断为假值的属性的对象
 * @param {object} object 来源对象
 * @param {Function} predicate 调用每一个属性的函数
 * @returns {object} 返回新对象
 * @example
 * const object = { a: 1, b: '2', c: 3 };
 * omitBy(object, (item) => typeof item === 'number') =>  { b: '2' }
 */
export function omitBy<T>(
  object: T,
  predicate: (item: T[Extract<keyof T, string>], key: keyof T) => {}
) {
  const result = {} as { [K in keyof T]: T[K] };
  for (const key in object) {
    const curProperty = object[key];

    if (!predicate(curProperty, key)) {
      result[key] = curProperty;
    }
  }

  return result;
}
