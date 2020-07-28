/*
this is like the countBy with some diff 
this pass obj with function/null
- the function just modify the value 
- its return inverted object [key]=>[value]
-if we have the multi value after invert we put them together ?? how we do that ..
this is the critical point >>> we solve it as count by 

*/

function invertedBy(object, fun) {
    let obj = {};
    let stor_arr = [];
    if (fun !== undefined) {
        for (let i in object) {
            object[i] = fun(object[i]); // this if we pass func we modify the values of object
        }
    }
    for (let i in object) {
        if (stor_arr.indexOf(object[i]) === -1) {
            stor_arr.push(object[i]); // for the repetation
            obj[object[i]] = [i];
        } //new object with key as a value and add the key to the value value:key
        else {
            obj[object[i]] = obj[object[i]].concat(i); // if the value is repeted we add the new key by concat 
        }
    }
    return obj;
}
module.exports = invertedBy;
console.log(invertedBy({ 'a': 1, 'b': 2, 'c': 1 }, function(value) {
    return 'group' + value;
}));
//{  group1: ["a", "c"], group2: ["b"]  }
console.log(invertedBy({ 'a': 1, 'b': 2, 'c': 1 }));
//{  1: ["a", "c"], 2: ["b"]  }