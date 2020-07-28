const bykey = require('./Bykey');
const expect = require('expect');

try {
    test('test if the key is a fuction and return value "sucess"',
        () => {
            expect(bykey([  {  'dir':   'left',   'code':  97  },    {  'dir':   'right',   'code':  100  }],
                function(o)  { return  String.fromCharCode(o.code + 10); })).toEqual({
                k: { dir: "left", code: 97 },
                n: { dir: "right", code: 100 }
            })
        });
} catch (err) {
    console.error('test if the key is a fuction and return value "faild "' + err);
}
/////////////////////////////////////////////////

try {
    test('test if the key is a prparty name "sucess"',
        () => {
            expect(bykey([  {  'dir':   'left',   'code':  97  },    {  'dir':   'right',   'code':  100  }], 'dir')).toEqual({
                left: { dir: "left", code: 97 },
                right: { dir: "right", code: 100 }
            })
        });
} catch (err) {
    console.error('test if the key is a prparty name "faild "' + err);
}

///////////////////test for uses
var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];

posts = bykey(posts, "id");

try {
    test('test that get an object with a specific property  "sucess"',
        () => {
            expect(posts["34abc"]).toEqual({ id: "34abc", title: "The blog post we want", content: "..." })
        });
} catch (err) {
    console.error('test that get an object with a specific property "faild "' + err);
}


function test(str, callback) {
    callback();
    console.log(str);
}