/**
 * 随机颜色
 * @returns 16进制的颜色值
 */
export function getRandomColor() {
  return `#${Math.random()
    .toString(16)
    .slice(2, 8)}`;
}
