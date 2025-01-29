// function generateBarChart(arr){
//     let obj = {};
//     let star = "";

//     for(let i in arr){
//         obj[i] = arr[i];
        
//     }
   

//     for(let j in obj){
//         star = ""
//         for(var i=0;i<obj[j];i++){
//             star = star + "*"
//         }
//         obj[j] = star;
//     }
//    return obj;
// }

// console.log(generateBarChart([5,3,9,2]))


// // 1 : *****
// // 2 : ***



// another way:- 

function generateBarChart(arr){
    return arr.map((currEle,index)=>{
       return index+1 + ":" + "*".repeat(currEle)
    }).join("\n")
}


console.log(generateBarChart([5,3,9,20]))
