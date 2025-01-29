const countChar = (word,char)=>{
    const lowerchar = char.toLowerCase()
    const wordArr = word.toLowerCase().split("");
    let count = 0;
    
    for(ele in wordArr){
        if(wordArr[ele] == lowerchar){
            count+=1;
        }
    }
    return count;
}

console.log(countChar("MissIssippi","I"))      // output 4