const countVowels = (word)=>{
    const vowel = ["a","e","i","o","u","A","E","I","O","U"];

    const wordArr = word.split("");
    let count = 0;
    
    for(ele of wordArr){
       if(vowel.includes(ele)==true){
         count+=1;
       }
    }
    return count;
}


console.log(countVowels("HeLlO world"));      // 3
console.log(countVowels("ThE qUick brOwn fox")); // 5
console.log(countVowels("Brrrp")) // 0
console.log(countVowels("priya MADHU"))