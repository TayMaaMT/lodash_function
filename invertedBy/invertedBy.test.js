const invertedBy = require('./invertedBy');
const expect = require('expect');

try {
    test('test for function if its "sucess"',
        () => {
            expect(invertedBy({ 'a': 1, 'b': 2, 'c': 1 }, function(value) {
                return 'group' + value;
            })).toEqual({  group1: ["a", "c"], group2: ["b"]  })
        });
} catch (err) {
    console.error('test for function if its "faild"' + err);
}
try {
    test('test without function if its "sucess"',
        () => {
            expect(invertedBy({ 'a': 1, 'b': 2, 'c': 1 })).toEqual({ 
                 1: ["a", "c"], 
                 2: ["b"]  })
        });
} catch (err) {
    console.error('test without function if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}