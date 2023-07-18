/**
 * 忽略对象选中的属性
 * @param {object} object 来源对象
 * @param {string[] } paths 要被忽略的属性数组
 * @returns {object} 返回新对象
 * @example
 * const object = { a: 1, b: '2', c: 3 }
 * omit(object, ['a', 'c']) => { b: '2' }
 */
export function omit<T extends object, K extends keyof T>(object: T, paths: K[]) {
  /** 获取对象的属性数组，然后筛出给定的key */
  return (Object.keys(object) as K[]).reduce((acc, key) => {
    if (!paths.includes(key)) {
      (object).hasOwnProperty(key) && (acc[key] = object[key]);
    }
    return acc;
  }, {} as Pick<T, K>);
}
