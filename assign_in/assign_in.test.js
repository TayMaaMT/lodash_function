const assign_ = require('./assign_in');
const expect = require('expect');

function  Foo()  {  
    this.a  =  1;
}

function  Bar()  {  
    this.c  =  3;
}

function  Bas()  {  
    this.f  =  5;
}
Foo.prototype.b  =  2;
Bar.prototype.d  =  4;

try {
    test('test  if its "sucess"',
        () => {
            expect(assign_({  'a':  0  },  new  Foo,  new  Bar, new Bas)).toEqual({ 'a':  1, 'b': 2, 'c': 3, 'd': 4, 'f': 5 })
        });
} catch (err) {
    console.error('test if its "faild"' + err);
}

function test(str, callback) {
    callback();
    console.log(str);
}