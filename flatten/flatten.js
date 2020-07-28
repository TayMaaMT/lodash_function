function flatten (array){
    let temp=[]
            for (let i in array){
                if(Array.isArray(array[i])){
                    for(let m in array[i]){
                        temp.push(array[i][m])
                    }
                 }
                else{
                temp.push(array[i])
    
                }
    
            }
    return temp;
    
    }








// function flatten(array) {
//     let m = array.reduce(
//         function(start, value) {
//             return start.concat(value);
//         }, []
//     );
//     return m;
// }

console.log(flatten([1, [3, 4],  
    [2,   [3,   [4]],  5], 8
]));