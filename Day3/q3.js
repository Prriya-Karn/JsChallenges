// const countChar = (str,char)=>{
//     const newStr = str.toLowerCase();
//     const newChar = char.toLowerCase();

//     const arrStr = newStr.split("");

// // accumulator need initial value in reduce method otherwise acc take initial value "m"
//     const res = arrStr.reduce((acc,currEle)=>{
//         return (currEle==newChar)?acc+=1:acc+=0;
//     },0)
//     return res;
// }

// console.log(countChar("MissIssippi","P")) 







// another question
// const areEqual = (arr1,arr2)=>{
//     if(arr1.length!=arr2.length) return false;

//     for(let i=0;i<arr1.length;i++){
//         for(let j=i;j<arr2.length;j++){
//             if(arr1[i]!=arr2[j]) return false;
//             break;
//         }
//     }
//     return true;
// }


// console.log(areEqual([1,2,3],[1,2,3,4]));  //false
// console.log(areEqual([1,2,3],[1,3,2]));    //false
// console.log(areEqual([],[]))               //true   
// console.log(areEqual([1,2,3],[1,2,3]));

// const mapLength = (arr)=>{
//     return arr.map((e)=>{
//         return e.length
//     })
// }

// console.log(mapLength(["apple","cat","four"]));

// const selectOdds = (arr)=>{
//     const newArr = []
//     for(let i of arr){
//         if(i%2!=0) newArr.push(i)
//     }
// return newArr;
// }

// console.log(selectOdds([3,2,4,5,7]))    // [3,5,7]

// console.log(selectOdds([2,4,6]))        // []


// const reverse = (arr)=>{
//     return arr.sort((a,b)=>{
//         return b-a;
//     })
// }


// console.log(reverse([1,2,3])); // [3,2,1]
// console.log(reverse([]))        // []

