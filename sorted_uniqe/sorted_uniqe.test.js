const sortedUniq = require('./sorted_uniqe');
const expect = require('expect');

try {
    test('test for array if its "sucess"',
        () => {
            expect(sortedUniq([1, 1, 1, 2, 2, 2, 3, 3])).toEqual([1, 2, 3])
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}