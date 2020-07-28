function defult(...arr) {
    let object = {};
    let temp = [];
    for (let i in arr) {
        for (let m in arr[i]) {
            console.log(m);
            if (temp.indexOf(m) === -1) {
                temp.push(m);
                object[m] = arr[i][m];
            }
        }
    }
    return object;
}