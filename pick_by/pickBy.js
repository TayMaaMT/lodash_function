function pickBy(object, funct_bool) {
    const obj = {};
    for (const key in object) {
        if (funct_bool(object[key])) {
            obj[key] = object[key];
        }
    }
    return obj;
}

console.log(pickBy({ 'a': 1, 'b': 'b', 'c': 3 }, vale => !isNaN(vale)));