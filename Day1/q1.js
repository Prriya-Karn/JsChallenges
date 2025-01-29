
const findLongestWord = (name)=>{
    if(name.trim().length==0) return false;

    const nameArr = name.trim().split(" ");

    return nameArr.reduce((acc,currEle)=>{
        return acc.length > currEle.length ? acc : currEle;
    })

}


console.log(findLongestWord(('shiv is javascript infinite')));     // 
console.log(findLongestWord("js is"));

console.log(findLongestWord(""));