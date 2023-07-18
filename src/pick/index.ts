/**
 * 生成选中属性的对象
 * @param {object} object 来源对象
 * @param {string[] } paths 要被选中的属性数组
 * @returns {object} 返回新对象
 * @example
 * const object = { a: 1, b: '2', c: 3 }
 * pick(object, ['a', 'c']) => { a: 1, c: 3 }
 */
export function pick<T extends object, K extends keyof T>(object: T, paths: K[] = []) {
  /** 筛出给定的key */
  return paths.reduce((acc, key) => {
    object.hasOwnProperty(key) && (acc[key] = object[key]);
    return acc;
  }, {} as Pick<T, K>);
}
