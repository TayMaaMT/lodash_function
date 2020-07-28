/* 
*we have an objects each object has key and the value is array of objects
*we want to return object with all keys in objects and the values (array of object )
if we have multible keys have the same name we must add thair value together on one array of object ??
this is the critcal point >>>
we must add the objects that have the same index together using assign:) 


*/
function merge(...arg) {
    let new_obj = {}
    let temp = [];
    for (let o in arg) { //loop for all objects i pass
        let obj = arg[o];
        for (let key in obj) { //loop at the single object

            if (temp.indexOf(key) == -1) { // if the key at first time
                temp.push(key); // to check
                new_obj[key] = obj[key] //add the key and value to return object

            } else {
                for (let i in new_obj[key]) // if the key is repeted >> loop for value of new object (array of objects)
                    Object.assign(new_obj[key][i], obj[key][i]) //the object of array of object assing to new object


            }

        }
    }
    return new_obj;
}

module.exports = merge;
// var  object  =   {  
//     'a':  [{  'c':  2, 'b': 2  },   {  'd':  4  }],
//     'b': [{  'b':  2  },   {  'd':  4  }]
// }; 
// var  other  =   {  
//     'a':  [{  'c':  3  },   {  'e':  5  }],
//     'c':  [{  'c':  3  },   {  'e':  5  }]
// };
// var  others  =   {  
//     'a':  [{  'c':  3  },   {  'e':  5  }],
//     'd':  [{  'c':  3  },   {  'e':  5  }]
// };

// console.log(merge(object,  other, others));