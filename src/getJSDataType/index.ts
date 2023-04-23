import { _JSDataType } from '../types';

/**
 * 获取JavaScript数据类型
 * @param {T} source 要检测的数据源
 * @returns {"Undefined" | "Object" | "Array" | "Date" | "RegExp" | "Function" | "String" | "Number" | "Boolean" | "Null" | "Symbol" | "Set" | "Map"} 返回数据类型
 * @example
 * const number = 15
 * getJSDataType(number) => Number
 *
 * const array = [1, 2, 3]
 * getJSDataType(array) => Array
 *
 * getJSDataType(null) => Null
 */
export function getJSDataType<T>(source: T) {
  if (typeof source === 'undefined') return 'Undefined';
  return Object.prototype.toString.call(source).slice(8, -1) as _JSDataType;
}
