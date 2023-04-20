import { _CloneType } from './types';

/**
 * 检测数据类型
 * @param type cloneType
 * @param obj 检测的数据源
 * @returns Boolean
 */
export function isType<T>(type: _CloneType, obj: T) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}
