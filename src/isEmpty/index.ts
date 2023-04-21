/**
 * 判断空对象
 * @param {Object} source 需要验证的对象
 * @returns {Boolean} 返回布尔值
 * @example
 * isEmpty({}) => true
 * isEmpty({ a: 1 }) => false
 */
function isEmpty(source: Object) {
  return Reflect.ownKeys(source).length === 0 && source.constructor === Object;
}

console.log(isEmpty({ a: 1 }));
