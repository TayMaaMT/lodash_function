function deepclone(arrOfObject) {
    let objects = [];
    if (!Array.isArray(arrOfObject)) {
        return Object.assign({}, arrOfObject);
    }
    for (let i in arrOfObject) {
        objects.push(Object.assign({}, arrOfObject[i]));

    }
    return objects;
}

module.exports = deepclone;

/*
var  objects  =   [{  'a':  1  }, {  'b':  2  }];

var  deep  =  deepclone(objects);
deep[0].a = 2;
deep[1].b = 1;
console.log(objects[0], objects[1]);
console.log(deep[0], deep[1]);

console.log(deep ===  objects);*/