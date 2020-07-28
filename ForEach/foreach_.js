function forEach_(arr_obj, callback) {
    for (let i in arr_obj) {
        callback(arr_obj[i], i); // 1 parameter for value , 1 parameter for key 
    }
}


module.exports = forEach_;
// you know that all array is object with integer key start with 0