const countby = require('./countBy');
const expect = require('expect');

try {
    test('test if the key is a fuction and return value "sucess"',
        () => {
            expect(countby([6.1,  4.2,  6.3],  Math.floor)).toEqual({ 4: 1, 6: 2 })
        });
} catch (err) {
    console.error('test if the key is a fuction and return value "faild "' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}