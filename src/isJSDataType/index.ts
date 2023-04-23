import { _JSDataType } from '../types';
import { getJSDataType } from '../getJSDataType';

/**
 * 检测数据类型
 * @param {_JSDataType} type 数据类型
 * @param {T} source 检测的数据源
 * @returns {boolean} 返回布尔值
 * @example
 * const array = [1, 2]
 * isType(JSDataType.Array, array) => true
 */
export function isJSDataType<T>(type: _JSDataType, source: T) {
  return getJSDataType(source) === type;
}
