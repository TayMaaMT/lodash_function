const deepclone = require('./deep_clone');
const expect = require('expect');
var  objects  =   [{  'a':  1  }, {  'b':  2  }];
var  deep  =  deepclone(objects);
try {
    test('test for array of objects if its "sucess"',
        () => {
            expect(deep ===  objects).toBe(false)
        });
} catch (err) {
    console.error('test for array of objects if its "faild"' + err);
}
objects = {  'a':  1  };
deep  =  deepclone(objects);
try {
    test('test for single object if its "sucess"',
        () => {
            expect(deep ===  objects).toBe(false)
        });
} catch (err) {
    console.error('test for single object if its "faild"' + err);
}





function test(str, callback) {
    callback();
    console.log(str);
}