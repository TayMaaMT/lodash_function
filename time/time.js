function time_(num, func) {
    let value = [];
    let count = 0;
    while (count < num) {
        value.push(func(num));
        count++;
    }
    console.log(value);
}
time_(10, (i) => {
    return Math.pow(2, i);
});