const find = require('./find');
const expect = require('expect');
var  users  =   [  
    {  'user':   'barney',    'age':  36,   'active':  true  },    {  'user':   'fred',      'age':  40,   'active':  false  },    {  'user':   'pebbles',   'age':  1,    'active':  true  },
    {  'user':   'pebbles',   'age':  33,    'active':  false }
];
try {
    test('test for function if its "sucess"',
        () => {
            expect(find(users, (o) => o.age == 40)).toEqual({  'user': 'fred', 'age':  40, 'active': false  })
        });
} catch (err) {
    console.error('test for function if its "faild"' + err);
}
try {
    test('test for function with start index if its "sucess"',
        () => {
            expect(find(users, (o) => o.age < 40, 3)).toEqual({  'user':   'pebbles',   'age':  33,    'active':  false })
        });
} catch (err) {
    console.error('test for function with start index if its "faild"' + err);
}

try {
    test('test for object if its "sucess"',
        () => {
            expect(find(users,   {  'age':  1,   'active':  true  })).toEqual({  'user':   'pebbles',   'age':  1,    'active':  true  })
        });
} catch (err) {
    console.error('test for object if its "faild"' + err);
}

try {
    test('test for array if its "sucess"',
        () => {
            expect(find(users, ['age', 40 ])).toEqual({  'user': 'fred', 'age':  40, 'active': false  })
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}

try {
    test('test for string if its "sucess"',
        () => {
            expect(find(users, 'age', 2)).toEqual({  'user':   'pebbles',   'age':  1,    'active':  true  })
        });
} catch (err) {
    console.error('test for string if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}