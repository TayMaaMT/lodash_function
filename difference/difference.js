function difference(arr1, arr2) {
    for (i in arr2) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[j] == arr2[i]) {
                arr1.splice(j, 1);
                j--;
            }
        }
    }

    return arr1;
}

module.exports = difference;