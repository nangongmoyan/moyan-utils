/**
 * 数字千分位展示并显示n位小数
 * @param {number | string} source 需要格式化的值
 * @param {number} precision 保留几位小数
 * @returns {string | 0} 返回格式化的值或0
 * @example
 * const value = 6594375.676
 * formatNumber(6594375.67) => 6,594,375.676
 *
 * formatNumber(6594375.676, 2) => 6,594,375.68
 *
 * const str= '5974352.458'
 * formatNumber('5974352.458') =>5,974,352.458
 *
 * formatNumber('5974352.458', 2) => 5,974,352.46
 *
 * formatNumber('.') => 0
 */
export function formatNumber(
  source: number | string,
  precision?: number
): number | string {
  /** 判断是否为数字 */
  if (!isNaN(parseFloat(source as string)) && isFinite(source as number)) {
    source = Number(source);
    /** 处理小数点位数 */
    source = (typeof precision !== 'undefined'
      ? source.toFixed(precision)
      : source
    ).toString();

    /** 分离数字的整数和小数部分 */
    const parts = source.split('.');
    /** 对整数部分进行处理 */
    parts[0] = parts[0].replace(/(?=\B(\d{3})+$)/g, ',');
    return parts.join('.');
  }
  return 0;
}
