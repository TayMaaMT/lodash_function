

function find(arry, collection, start = 0) {

   
    if (typeof collection == 'function') {
        for (let i=arry.length-1; i > 0; i--) {
            let back = collection(arry[start]); //if the function find the result in object it return true 
            if (back == true) {
                arry.pop(); //return that object
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
    return arry;

}