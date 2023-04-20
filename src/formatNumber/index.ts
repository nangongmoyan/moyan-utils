/**
 * 数字千分位展示并显示n位小数
 * @param num 需要格式化的值
 * @param precision - 保留几位小数
 * @returns 返回格式化的值或0
 */
export function formatNumber(
  num: number | string,
  precision?: number
): number | string {
  /** 判断是否为数字 */
  if (!isNaN(parseFloat(num as string)) && isFinite(num as number)) {
    num = Number(num);
    /** 处理小数点位数 */
    num = (typeof precision !== 'undefined'
      ? num.toFixed(precision)
      : num
    ).toString();

    /** 分离数字的整数和小数部分 */
    const parts = num.split('.');
    /** 对整数部分进行处理 */
    parts[0] = parts[0].replace(/(?=\B(\d{3})+$)/g, ',');
    return parts.join('.');
  }
  return 0;
}
