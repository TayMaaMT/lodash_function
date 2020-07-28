const merge = require('./merge');
const expect = require('expect');
var  object  =   {  
    'a':  [{  'c':  2, 'b': 2  },   {  'd':  4  }],
    'b': [{  'b':  2  },   {  'd':  4  }]
}; 
var  other  =   {  
    'a':  [{  'c':  3  },   {  'e':  5  }],
    'c':  [{  'c':  3  },   {  'e':  5  }]
};
var  others  =   {  
    'a':  [{  'c':  3  },   {  'e':  5  }],
    'd':  [{  'c':  3  },   {  'e':  5  }]
};
try {
    test('test for array if its "sucess"',
        () => {
            expect(merge(object,  other, others)).toEqual({ a: [{ c: 3, b: 2 }, { d: 4, e: 5 }],
                 b: [{ b: 2 }, { d: 4 }], c: [{ c: 3 }, { e: 5 }], d: [{ c: 3 }, { e: 5 }] })
        });
} catch (err) {
    console.error('test for array if its "faild"' + err);
}





function test(str, callback) {
    callback();
    console.log(str);
}