/*
 * this function assign proparty of other objects to one object   
 * it also assign prototype of other object .
 */

function assign_(obj, ...objs) {
    let obj_prpto = [];
    for (let i in objs) {
        Object.assign(objs[i], Object.getPrototypeOf(objs[i])); // to assin prototype to the same object
    }
    return Object.assign(obj, ...objs);
}

module.exports = assign_;