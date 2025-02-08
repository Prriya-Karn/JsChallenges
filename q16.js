const findMin = (arr)=>{
    const sortedArr = arr.sort((a,b)=>{
        return a-b;
    })

    return sortedArr[0];
}
console.log(findMin([5,10,2,8]))  // output 2
console.log(findMin([5,-3,0,12,-7]));
console.log(findMin([]))