// const isEmptyObject = (obj)=>{

//     for(let i in obj){
//         if(obj.hasOwnProperty(i)){
//             return "it's not empty"
//         }
//     }
//     return "its empty"
// }

// console.log(isEmptyObject({"fname" : "priya", "lname" : "karn"}));
// console.log(isEmptyObject({"fname" : ""}));
// console.log(isEmptyObject({}));


// another way :

const isEmptyObject = (obj)=>{

   return Object.keys(obj).length == 0 ? "its empty" : "its not empty"
   
}

console.log(isEmptyObject({"fname" : "priya", "lname" : "karn"}));
console.log(isEmptyObject({"fname" : ""}));
console.log(isEmptyObject({}));
