const invokeMap = require('./invokeMap');
const expect = require('expect');


try {
    test('test for string if its "sucess"',
        () => {
            expect(invokeMap([
                [5,  1,  7],  
                [3,  2,  1]
            ],  'sort')).toEqual([
                [1, 5, 7],
                [1, 2, 3]
            ])
        });
} catch (err) {
    console.error('test for string if its "faild"' + err);
}
try {
    test('test for Property.method if its "sucess"',
        () => {
            expect(invokeMap([123,  456],  String.prototype.split,  '')).toEqual([
                ["1", "2", "3"],
                ["4", "5", "6"]
            ])
        });
} catch (err) {
    console.error('test for string if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}