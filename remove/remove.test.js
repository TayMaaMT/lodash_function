const remove = require('./remove');
const expect = require('expect');

let a = [1, 2, 3, 4];
try {
    test('test for array if its remove "sucess"',
        () => {
            expect(remove(a, function(n) {
                return n % 2 == 0;
            })).toEqual([2, 4])
        });
} catch (err) {
    console.error('test for array if its remove "faild"' + err);
}

console.log(a);
// 
var arr = ['foo', 27, 'man', 42, 'chew'];
try {
    test('test for array if its remove "sucess"',
        () => {
            expect(remove(arr, function(el) {
                return typeof el === 'number';
            })).toEqual([27, 42])
        });
} catch (err) {
    console.error('test for array if its remove "faild"' + err);
}

try {
    test('test for array if its remove "sucess"',
        () => {
            expect(arr).toEqual(['foo', 'man', 'chew'])
        });
} catch (err) {
    console.error('test for array if its remove "faild"' + err);
}




function test(str, callback) {
    callback();
    console.log(str);
}