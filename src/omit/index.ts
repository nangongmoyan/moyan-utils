/**
 * 忽略选中属性的对象
 * @param {Object} object 来源对象
 * @param {string[] } paths 要被忽略的属性数组
 * @returns {Object} 返回新对象
 * @example
 * const object = { a: 1, b: '2', c: 3 }
 * omit(object, ['a', 'c']) => { b: '2' }
 */
export function omit<T, K extends keyof T>(object: T, paths: K[]) {
  return (Object.keys(object as Object) as K[]).reduce((acc, key) => {
    if (!paths.includes(key)) {
      (object as Object).hasOwnProperty(key) && (acc[key] = object[key]);
    }
    return acc;
  }, {} as Pick<T, K>);
}
