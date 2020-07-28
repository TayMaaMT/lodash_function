/*
*this function will return the first object that find it 
*it has 3 parameter 1 array of object / 2 collection (function-array-string-object)/3 start serching 
*if the collection is funnction we pass the element of array(object) 
and return true or false after execute the function .. 
*if the collection is array this array will just have two element the first for key 
and secound for value
*if the collection is object we check if all property of it match any object of array
*if the collection is string this string will be the key that we search on it at object 
if its value is true it will return the object 

*/

function find(arry, collection, start = 0) {
    if (typeof collection == 'function') {
        for (start; start < arry.length; start++) {
            let back = collection(arry[start]); //if the function find the result in object it return true 
            if (back == true) {
                return arry[start]; //return that object
            }
        }
    }

    if (Array.isArray(collection)) {
        for (start; start < arry.length; start++) {
            let obj = arry[start]; //save object in variable
            for (let i in Object.keys(obj)) { //compar the first element of array with keys of object && compar the secound element of array with values of object 
                if ((collection[0] == Object.keys(obj)[i]) && (collection[1] == Object.values(obj)[i])) {
                    return arry[start];
                }
            }
        }
    }

    if (typeof collection == 'object') {
        for (start; start < arry.length; start++) {
            let obj = arry[start];
            for (i in collection) {
                if (obj[i] !== collection[i]) { //if the value of object dosent match value of collection object 
                    break; //return to for loop and see the next element
                }
                return arry[start];
            }
        }
    }

    if (typeof collection == 'string') {
        for (start; start < arry.length; start++) {
            let obj = arry[start];
            for (let i in Object.keys(obj)) { // serch if the string collection in keys and if it has atrue value
                if ((collection == Object.keys(obj)[i]) && (obj[collection])) {
                    return arry[start];
                }
            }
        }
    }

}
module.exports = find;
// var  users  =   [  
//     {  'user':   'barney',    'age':  36,   'active':  true  },    {  'user':   'fred',      'age':  40,   'active':  false  },    {  'user':   'pebbles',   'age':  1,    'active':  true  },
//     {  'user':   'pebbles',   'age':  33,    'active':  false }
// ];

// console.log(find(users, (o) => o.age == 40));
// console.log(find(users,   {  'age':  1,   'active':  true  }));
// console.log(find(users,   ['age', 40 ]));
// console.log(find(users, 'age', 2));


// if (typeof collection == 'string') {
//     for (start; start < arry.length; start++) {
//         let obj = arry[start];
//         for (let i in Object.keys(obj)) {
//             if ((collection == Object.keys(obj)[i])&&(obj[collection])) {
//             break;
//
//             }
//             else{
//                 return false;
//                 }


//         }
//     }
//     return true;

// }