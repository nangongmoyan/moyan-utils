/**
 * 判断空对象
 * @param obj
 * @returns
 */
export function isEmpty(obj: Object) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
}
