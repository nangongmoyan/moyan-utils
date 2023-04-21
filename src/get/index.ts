/**
 * 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代
 * @param {Object} source 要查询的对象
 * @param {Array|string} path 获取属性的路径
 * @param {*} [defaultValue] 为“未定义”解析值返回的值
 * @returns {*} 返回解析值
 * @example
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 * get(object, 'a[0].b.c') => 3
 *
 * get(object, ['a', '0', 'b', 'c']) => 3
 *
 * get(object, 'a.b.c', 'default') => 'default'
 */

export function get(
  source: { [key: string]: any },
  path: string | string[],
  defaultValue?: any
) {
  let result = source;
  /** 将path统一处理成字符串数组的形式 */
  const paths =
    typeof path === 'string' ? path.match(/[^\[\].]+/g) ?? [] : path;
  /** 遍历path，依次取出source中的属性值 */
  for (const key of paths) {
    result = result[key];
    /** 如果属性值不存在，直接返回defaultValue */
    if (result === undefined) return defaultValue;
  }
  return result;
}
