const difference = require('./difference');
const expect = require('expect');

try {
    test('test for array if its "sucess"',
        () => {
            expect(difference([2,  1, 5],   [2,  3, 5])).toEqual([1])
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}

try {
    test('test for array if its empty "sucess"',
        () => {
            expect(difference([2,  1, 5],   [])).toEqual([2,  1, 5])
        });
} catch (err) {
    console.error('test for array if its empty "faild"' + err);
}


function test(str, callback) {
    callback();
    console.log(str);
}