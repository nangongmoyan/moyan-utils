import { _DataType } from '../types';

/**
 * 获取JavaScript数据类型
 * @param {T} source 要检测的数据源
 * @returns {"Undefined" | "Object" | "Array" | "Date" | "RegExp" | "Function" | "String" | "Number" | "Boolean" | "Null" | "Symbol" | "Set" | "Map"} 返回数据类型
 * @example
 * const number = 15
 * getDataType(number) => Number
 *
 * const array = [1, 2, 3]
 * getDataType(array) => Array
 *
 * getDataType(null) => Null
 */
export function getDataType<T>(source: T) {
  if (typeof source === 'undefined') return 'Undefined';
  return Object.prototype.toString.call(source).slice(8, -1) as _DataType;
}
