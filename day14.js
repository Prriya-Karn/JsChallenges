const isPowerOfTwo = (num)=>{
    for(var i=1;i<num;i++){
        if((2**i)==num) return true;
    } 
    return false;
}

// 2*2 = 4
// 2*2*2 = 8
console.log(isPowerOfTwo(8)) // true 
console.log(isPowerOfTwo(7)) // false

