/**
 * 随机颜色
 * @returns {string} 16进制的颜色值
 * @example
 * getRandomColor() => #3617ad
 */
export function getRandomColor() {
  return `#${Math.random()
    .toString(16)
    .slice(2, 8)}`;
}
