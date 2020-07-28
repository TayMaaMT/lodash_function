const foreach_right = require('./forEach_right');
const expect = require('expect');


test('test for array if its empty',
    () => {
        expect(foreach_right([],
            function(value) { console.log(value) })).toEqual(console.log(undefined))
    });

test('test for array with element',
    () => {
        expect(foreach_right(['a', 's', 'f'],
            function(value) { console.log(value); return value; })).toEqual(console.log('f\ns\na'))
    });

test('test for empty object',
    () => {
        expect().toEqual(undefined)
    });

test('test for object with element',
    () => {
        expect(foreach_right({ a: 1, b: 2, c: 3 },
            function(value, key) { console.log(key); })).toEqual(console.log('c\nb\na'))
    });





function test(str, callback) {
    callback();
    console.log(str);
}