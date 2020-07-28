/*
*this function return an array of array that have the same index
*first thing what if the each array have diff length ??
- we solve it by evaluate the max length of arrays 
* what now !! 
-the return array is aray of aray so we could push aray by aray to it
*each element of array have the same index of previous array ??
this is the critical point >>
*we have tow loop the fist for elements of internal array /the secound for element of external array
why ??
to loop in all arrays and pick the same index
[arrays][index of arrays]
[0][1]
[1][1]
[2][1]
then push the array to the result array


*/
function Zip(...arg) {
    let array = [];
    let length = Math.max(...arg.map(val => val.length)); //evaluate the max length of arrays 
    for (let i = 0; i < length; i++) { //for elements of internal array 
        let arr_row = [];
        for (let m in arg) { //element of external array
            arr_row.push(arg[m][i]); //push the element to row array
        }
        array.push(arr_row); //push the row to array result
    }
    return array;
}

console.log(Zip(['a',  'b'],   [1,  2, 3],   [true,  false]));