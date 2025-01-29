// const generateHash = (str)=>{
//     if(str.length>280 || str.trim().length==0) return false;
//     const newStr = str.trim();   // remove starting and ending space from the str

//     const strArr = newStr.split(" ");
//     const strCap = strArr.map((e)=>{
//         return e.at(0).toUpperCase() + e.slice(1)
//     })
//     return "#"+strCap.join("");
// } 

// console.log(generateHash(" my name is priya karn "))


// another way :-

const generateHash = (str)=>{
    if(str.length>280 || str.trim().length==0) return false;
    const newStr = str.trim();   // remove starting and ending space from the str

    const strArr = newStr.split(" ");
    const strCap = strArr.map((e)=>{
        return e.replace(e[0],e[0].toUpperCase());
    })
    return `#${strCap.join("")}`

} 

console.log(generateHash("my name is priya karn"))
