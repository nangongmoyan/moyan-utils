/** 用作各种“数字”常量的参考 */
const MAX_SAFE_INTEGER = 9007199254740991;

/**
 * 检查 `value` 是否是有效的类似数组的长度。
 * @param {*} value 要检查的值
 * @returns  {boolean} 如果值有效返回true，否则返回false
 */
function isLength(value: any) {
  return (
    typeof value === 'number' &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
