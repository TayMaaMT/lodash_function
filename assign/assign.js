function  Foo()  {  
    this.a  =  1;
} 
function  Bar()  {  
    this.c  =  3;
}

function  Bas()  {  
    this.v  =  3;
} 
Foo.prototype.b  =  2;
Bar.prototype.d  =  4;

function assign_(obj, ...objs) {
    return Object.assign(obj, ...objs);
}
let output = assign_({  'a':  0  },  new  Foo,  new  Bar, new Bas);
console.log(output);
