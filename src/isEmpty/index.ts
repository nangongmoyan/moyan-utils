
/**
 * 判断数据是否是空对象/空数组/空字符串
 * @param {String | Array<T> | object} source 需要验证的对象
 * @returns {Boolean} 返回布尔值
 * @example
 * isEmpty({}) => true
 * isEmpty({ a: 1 }) => false
 * 
 * isEmpty([]) => true
 * isEmpty([1, 2, 3]) => false
 * 
 * isEmpty('') => true
 * isEmpty('123') => false
 */
 export function isEmpty<T>(source: String | Array<T> | object) {
  if(source.constructor === Object) return Reflect.ownKeys(source).length === 0 
  return (source as  String | Array<T>).length === 0
}


