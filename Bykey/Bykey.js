/*
- It helps a lot when trying to get an object with a specific property.

- Let’s say we have 100 blog posts and we want to get the post with Id “34abc”. How can we achieve this? 
*** you can see the test file to answer this quistion ...
- The second argument can also be a function.


*/

function bykey(arrayOfObject, key) {
    let obj = {}
    if (typeof key == 'string') { // if the type is string thats mean the key will be the value 
        for (i in arrayOfObject) {
            obj[arrayOfObject[i][key]] = arrayOfObject[i]; //arrayOfObject[i] is the single object we put [key] to get the value of this key 
        } // now we pass that value as key in new object and its value will be the single object   
    }
    if (typeof key == 'function') { // if the type is function thats mean the key wil be the execution funtion that take the value as argument .
        for (i in arrayOfObject) {
            obj[key(arrayOfObject[i])] = arrayOfObject[i]; // this function like the previous but the key will not be the value  
        } // we first pass the value to the function and the return value will be the key 
    }
    return obj;
}

module.exports = bykey;

//code from github


// keyBy for array only
const keyBy = (array, key) => (array || []).reduce((r, x) => ({...r, [key ? x[key] : x]: x }), {});

// keyBy for array and object
const collectionKeyBy = (collection, key) => {
    const c = collection || {};
    return c.isArray() ? keyBy(c, key) : Object.values(keyBy(c, key));
}