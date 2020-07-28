const fill = require('./fill_');
const expect = require('expect');
try {
    test('test for array if its empty with positive start "sucess"',
        () => {
            expect(fill([], '*', 2, 5)).toEqual([])
        });
} catch {
    console.error('test for array if its empty with positive start "faild"');
}
try {
    test('test for array if its empty with negative start & end "sucess"',
        () => {
            expect(fill([], '*', -2, -1)).toEqual([])
        });
} catch {
    console.error('test for array if its empty with negative start & end "faild"');
}
try {
    test('test for array with elements and positive start & end "sucess"',
        () => {
            expect(fill([1, 2, 3], '*', 2, 5)).toEqual([1, 2, '*'])
        });
} catch {
    console.error('test for array with elements and positive start & end "faild"');
}

try {
    test('test for array with elements and negative start & end "sucess"',
        () => {
            expect(fill([1, 2, 3], '*', -1, -2)).toEqual([1, 2, '*'])
        });
} catch (err) {
    console.error('test for array with elements and negative start & end "faild\n"' + err);
}
try {
    test('test for array with elements and negative start & end "sucess"',
        () => {
            expect(fill([1, 2, 3], '*', -2, -1)).toEqual([1, '*', 3])
        });
} catch (err) {
    console.error('test for array with elements and negative start & end "faild\n"' + err);
}



function test(str, callback) {
    callback();
    console.log(str);
}