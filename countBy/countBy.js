/*
** Creates an object composed of keys generated from the results of running each element of array thru iteratee function/string(value).
- we check if the iteratee function or string value
- we return new array by map that modify the old array 
- we then want to return the object that count the same element and retern it in 
object thats key is element and value is the count of repet element.. how we do that ??
this is the critiacl point ... 



*/

function countby(arr, fun_string) {
    let array = [];
    let val = {};
    //let count = 0;
    let stor_arr = [];
    if (typeof fun_string == 'function') {
        array = arr.map(val => fun_string(val)); //new array that return from exe function /function(value)
    }
    if (typeof fun_string == 'string') {
        array = arr.map(val => val[fun_string]); // new array that return from string parameter /value.string
    }
    for (let i in array) {
        if (stor_arr.indexOf(array[i]) === -1) { // this to know if the element is repeted or not 
            stor_arr.push(array[i]);
            val[array[i]] = 1; // if the elment is the first we add it as prparty name with value 1 
        } else {
            val[array[i]] = val[array[i]] + 1; // increment the value by 1 if its repeted
        }
    }



    return val;
}
module.exports = countby;

// console.log(countby([6.1,  4.2,  6.3],  Math.floor));
// {4: 1, 6: 2}

// var orders = [
//     { date: "30-60-90 Day", Name: "Kim", amount: 415 },
//     { date: "30-60-90 Day", Name: "Kelly", amount: 175 },
//     { date: "30 Day", Name: "Shelly", amount: 400 },
//     { date: "30 Day", Name: "Sarvesh", amount: 180 }
// ];
// console.log(countby(orders, "date"));
// {30-60-90 Day: 2, 30 Day: 2}

/////////////////////////////// stak
/*

function countBy(collection, func) 
{
  var object = Object.create(null);

  collection.forEach(function(item) {
    var key = func(item);
    if (key in object) {
      ++object[key];
    } else {
      object[key] = 1;
    }
  });

  return object;
} */