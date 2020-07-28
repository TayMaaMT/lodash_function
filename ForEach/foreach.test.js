const foreach_ = require('./forEach_');
const expect = require('expect');


test('test for array if its empty',
    () => {
        expect(foreach_([],
            function(value) { console.log(value) })).toEqual(console.log(undefined))
    });

test('test for array with element',
    () => {
        expect(foreach_(['a', 's', 'f'],
            function(value) { console.log(value) })).toEqual(console.log('a\ns\nf'))
    });

test('test for empty object',
    () => {
        expect(foreach_({},
            function(value) { console.log(value) })).toEqual(console.log(undefined))
    });

test('test for object with element',
    () => {
        expect(foreach_({ a: 1, b: 2, c: 3 },
            function(value, key) { console.log(key) })).toEqual(console.log('a\nb\nc'))
    });





function test(str, callback) {
    callback();
    console.log(str);
}