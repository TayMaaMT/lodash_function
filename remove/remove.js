/*
- the method that you pass will return true of false, 
if what is returned is true the element will be removed.
- The array base is modify.
the break point is how to return new array with removable element as the same time 
modify the base array...

*/


function remove(array, func) {

    let arr = array.slice(0); // cpoy arr with diff reference
    let arr_remove = array.slice(0);
    for (let m = 0; m < arr.length; m++) { //note the length must be static 
        array.pop(); // remove all the element from the reference..
    }
    arr = arr.filter(val => !func(val)); //filter the remain array 
    for (let i in arr) { // add the remain array element by element to the array reference
        array[i] = arr[i];
    }
    return arr_remove.filter(val => func(val)); // return the remove array 
}

module.exports = remove;