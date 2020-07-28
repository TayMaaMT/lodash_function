const pull = require('./pull');
const expect = require('expect');
try {
    test('test for array if its "sucess"',
        () => {
            expect(pull([1, 1, 2, 2, 2, 3, 3], 1, 2)).toEqual([3, 3])
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}





function test(str, callback) {
    callback();
    console.log(str);
}