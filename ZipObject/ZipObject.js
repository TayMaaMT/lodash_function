function Zipobject(arr_key, arr_val) {
    let object = {};
    for (let i in arr_key) {
        object[arr_key[i]] = arr_val[i]

    }
    return object;
}
Zipobject(['a',  'b', 'c', 'd'],   [1,  2, 3]);