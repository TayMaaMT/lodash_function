function Foo() {
    this.an = 'a';
    this.b = 'b';
}

Foo.prototype.c = 'c';

function functions(obj) {
    return Object.keys(obj);
}
functions(new Foo);


///////////////////////
function Foo() {
    this.an = 'a';
    this.b = 'b';
}

Foo.prototype.c = 'c';

function functionsIN(obj) {
    Object.assign(obj, Object.getPrototypeOf(obj));
    return Object.keys(obj).concat();
}
functionsIN(new Foo);