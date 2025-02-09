const toCamelCase = (str)=>{
    const arrStr = str.toLowerCase().split(" ");
   const halfstr = arrStr.splice(1).map((e)=>{
        return e[0].toUpperCase() + e.slice(1);
    })

    return arrStr[0] + halfstr.join("")
}
console.log(toCamelCase("hello world pRIYa")); // helloWorldPriya
console.log(toCamelCase("World hello"));