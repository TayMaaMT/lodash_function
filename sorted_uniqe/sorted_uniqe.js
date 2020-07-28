function sortedUniq(array) {
    // let stor_arr = [];

    // for (let i in arry) {
    //     if (stor_arr.indexOf(arry[i]) === -1) {
    //         stor_arr.push(arry[i]);
    //     }
    // }
    // return stor_arr;
    return array.filter((val, i, arr) => array.indexOf(val) === i)

    // return [...new Set(array)]
}

module.exports = sortedUniq;

console.log(sortedUniq([1, 1, 1, 2, 2, 2, 3, 3]));