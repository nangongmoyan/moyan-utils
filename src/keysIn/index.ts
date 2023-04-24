/**
 * 创建object自身和继承的可枚举属性名称的数组
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回属性名称的数组
 */
export function keysIn(object: Object) {
  const result = [];

  for (const key in object) {
    result.push(key);
  }
  return result;
}
