function forEach_right(arr_obj, callback) {
    for (let i = Object.keys(arr_obj).length - 1; i >= 0; i--) {
        callback(Object.values(arr_obj)[i], Object.keys(arr_obj)[i]);

        // we use this way becuse the object cold'nt pass like array 
        // the size of an object => Object.keys(arr_obj).length
    }
}
module.exports = forEach_right;