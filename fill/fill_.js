function fill(arr, element, start, end) {

    if (arr.length !== 0) {

        if (start == undefined) {
            start = 0;
        }
        if (start < 0) {
            start = start + arr.length;
        }
        if (end == undefined || end > arr.length) {
            end = arr.length;
        }
        if (end < 0) {
            end = end + arr.length;
        }
        for (start; start < end; start++) {
            arr[start] = element;
        }
    }
    return arr;
}

module.exports = fill;