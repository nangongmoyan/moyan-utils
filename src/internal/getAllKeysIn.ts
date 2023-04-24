import { getSymbolsIn } from './getSymbolsIn';

/**
 * 创建一个包含object的自身和继承的可枚举属性name和symbols的数组
 * @private
 * @param {Object} object 要查询的对象
 * @returns 返回属性name和symbols的数组
 */
export function getAllKeysIn(object: Object) {
  const result = [];
  for (const key in object) {
    result.push(key);
  }

  if (!Array.isArray(object)) {
    result.push(...getSymbolsIn(object));
  }
  return result;
}
