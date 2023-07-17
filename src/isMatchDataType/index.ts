import { _DataType } from '../types';
import { getDataType } from '../getDataType';

/**
 * 检测数据类型
 * @param {_DataType} type 数据类型
 * @param {T} source 检测的数据源
 * @returns {boolean} 返回布尔值
 * @example
 * const array = [1, 2]
 * isMatchDataType(JSDataType.Array, array) => true
 */
export function isMatchDataType<T>(type: _DataType, source: T) {
  return getDataType(source) === type;
}
