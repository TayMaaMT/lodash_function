/*
 *this function invoke some prototype methods as string or as prototype.method
 * if its as string we use object.__proto__[string]
 *if its as prototype.method we just use .apply to execute the function
 */
function invokeMap(array, path, args) {
    if (typeof path == 'string') {
        return array.map(val => (val.__proto__[path].apply(val)));
    }
    if (typeof path == 'function') {
        return array.map(val => path.apply(val, [args]));
    }

}
module.exports = invokeMap;

console.log(invokeMap([
    [5,  1,  7],  
    [3,  2,  1]
],  'sort'));
console.log(invokeMap([123,  456],  String.prototype.split,  ''));