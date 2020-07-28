/*
this function is return the element of array after execute function
that return diff array and sort_uniqe this array then return the old array 

the critical point is that we can execute function on the array 
and sort_uniqe the new array that return from the exeution function 
but**how we cold return the old array with remove element ????

* first we return new array from execution function 
* secound return the index of sorted_uniqe (not the element) this is was the harder :(
* finaly we filter the old array by new index

*/


function sortedBy(arr, func) {
    let m = arr.map((val) => func(val));
    let stor_arr = [];
    let temp = [];
    let val = [];
    for (let i in m) {
        if (stor_arr.indexOf(m[i]) === -1) {
            stor_arr.push(m[i]); // we push the elment uniqe and push the index of it to another array that we need
            temp.push(i);

        }
    }
    for (i in temp) { //filter the old array by new index using for loop
        val.push(arr[temp[i]]); //push the element that have the index from the new array
    }
    return val;
}
module.exports = sortedBy;