const sumOfSquares = (arr)=>{
    let res = 0;
    for(ele of arr){
        res = res + ele ** 2;          // 14
    }

    return res;
}


console.log(sumOfSquares([1,2,3]))
console.log(sumOfSquares([2,1,2])); //9
// console.log(i**2);