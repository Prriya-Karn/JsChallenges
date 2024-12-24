// const findLongestWord = (Str) => {
//     if(Str.trim().length==0) return false;

//     const arrStr = Str.split(" ");
//     let res = "";

//     for(const i of arrStr){
//         if(res.length<i.length){
//             res = i;
//         }
//     }
    
//     return res;
// }


// console.log(findLongestWord("worldbest javascriptprogramming language"))




// another way using some predefined function :-

// sort method
// const findLongestWord = (Str) => {
//     if(Str.trim().length==0) return false;

//     const arrStr = Str.split(" ");
//     const res = arrStr.sort((a,b)=>{
//         return a.length - b.length       // number in ascending order
//     })
//     // return res[res.length-1]

//     //or use at();

//     return res.at(-1)
// }


// console.log(findLongestWord("world best javascript programming language"))


// reduce method:- 

// const findLongestWord = (Str) => {
//     if(Str.trim().length==0) return false;

//     const arrStr = Str.split(" ");

//     return arrStr.reduce((acc,currWord,arr)=>{
//         return currWord.length>acc.length?currWord:acc
//     })
// }


// console.log(findLongestWord("world bestjavascript programming language"))
