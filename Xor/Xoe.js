function xor(...arr) {
    let arr_temp = [];
    for (let i in arr) {
        for (let m in arr[i]) {
            if (arr_temp.indexOf(arr[i][m]) === -1) {
                arr_temp.push(arr[i][m]);

            }

        }
    }
    return arr_temp;

}
console.log(xor([1, 2, 3], [3, 7, 8], [7, 3, 6], [1, 2, 5]));