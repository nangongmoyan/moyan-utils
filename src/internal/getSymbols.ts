/** 内部值引用 */
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

const nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * 创建object自身可枚举符号的数组
 * @private
 * @param {Object} object 要查询的对象
 * @returns {Array} 返回symbols数组
 */
export function getSymbols(object: Object) {
  if (object === null) return [];
  object = Object(object);
  return nativeGetSymbols(object).filter((symbol) =>
    propertyIsEnumerable.call(object, symbol)
  );
}
