function pull(arr, ...arg) {
    for (let i in arg) {
        let j = 0
        while (j < arr.length) {
            if (arg[i] == arr[j]) {
                arr.splice(j, 1);
            } else j++;
        }
    }
    return arr;
}

module.exports = pull;