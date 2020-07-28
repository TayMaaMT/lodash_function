const sortedBy = require('./sortedBy');
const expect = require('expect');

try {
    test('test for array if its "sucess"',
        () => {
            expect(sortedBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}