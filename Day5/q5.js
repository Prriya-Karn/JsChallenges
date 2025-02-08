const sortAscending = (arr)=>{
    let newArr = [];             // [1,3,5,8]        output:- // [1,3,5,8]
    let temp;
    
    for(ele of arr){
        newArr.push(ele);
    }
    
    // for(let i=0;i<newArr.length;i++){                           //     i = 4   , j = 4,  4<4   // 5
    //     for(let j=i+1;j<newArr.length;j++){
    //         if(newArr[i]>newArr[j]){
    //             temp = newArr[i];  // 
    //             newArr[i] = newArr[j]; // 
    //             newArr[j] = temp;
    //         }
    //     }
    // }


    // return newArr.sort((a,b)=>{
    //     return a-b;
    // })
   
}

console.log(sortAscending([5,3,1,8]))        // output: [1,3,5,8]
console.log(sortAscending([18,7,14]));
console.log(sortAscending([0,-1,-10,-20,2,10]))