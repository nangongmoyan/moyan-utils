import { _CloneType } from './types';

/**
 * 检测数据类型
 * @param {_CloneType} type 数据类型
 * @param {T} source 检测的数据源
 * @returns {boolean} 返回布尔值
 */
export function isType<T>(type: _CloneType, source: T) {
  return Object.prototype.toString.call(source) === `[object ${type}]`;
}
