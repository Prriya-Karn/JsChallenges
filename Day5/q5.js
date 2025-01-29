function sortAscendingOrder(arr){
    let newArr = arr.map((currEle)=>{
        return currEle;
    });

    

    for(var i=0;i<newArr.length;i++){
        for(var j=i+1;j<newArr.length;j++){
            if(newArr[i]>newArr[j]){
                let temp = newArr[j];
                newArr[j] = newArr[i]
                newArr[i] = temp;
            }   
        }
    }
    return newArr;
}

console.log(sortAscendingOrder([13,15,100,10]))

