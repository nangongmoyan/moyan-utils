import { getSymbols } from './getSymbols';

/**
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回symbols数组
 */
export function getSymbolsIn(object: Object) {
  const result = [];
  while (object) {
    result.push(...getSymbols(object));
    object = Object.getPrototypeOf(Object(object));
  }
  return result;
}
