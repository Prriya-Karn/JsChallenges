// Create a Simple Promise

// Write a function delayedMessage that returns a Promise.
// The Promise should resolve after 2 seconds with the message "Hello, Priya!".


// Challenge: Reject if Message is Empty
// Modify the delayedMessage function so that:
// ✅ It resolves with "Hello, Priya!" after 2 seconds if the message is not empty.
// ❌ It rejects with "Error: Message is empty" if the message is an empty string ("")


// const delayedMessage = ()=>{
//     return new Promise((resolve,reject)=>{
//         const message  = ""

//         if(message.trim("").length!=0){
//             setTimeout(()=>{
//                 resolve(message)
//             },2000)
//         }else{
//             reject("message is empty")
//         }
       
//     })
// }

// delayedMessage().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })



// Write a function that returns a Promise, which resolves with a number after 1 second.
// Chain two .then() handlers:
// The first should multiply the number by 2.
// The second should subtract 3 and log the final result.


// const cal = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(5);
//         },1000)
//     })
// }

// cal().then((result)=>{
//     return result*2
// }).then((fres)=>{
//     console.log(fres-3)
// }).catch((error)=>{
//     console.log(error)
// })

// const data = "name"
// const obj = {
//     name : "priya",
//     age : 24
// }

// console.log(obj[data])
// console.log(obj["name"])

// hoisting:-
// fname = "priyakarn"
// console.log(fname);
// var fname = "priya"


// for(var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }


// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

// let fruits;
// console.log(fruits)




// let c =  {name:"priya"};
// let d;
// d = c;
// c.name = "madhu";
// console.log(d.name)

// let c = "priya";
// let d;
// d = c;
// c = "madhu";
// console.log(d)

// var a;
// var a = 20;
// console.log(a)

// const fruit = "apple"
// const fname = ["priya",...fruit];
// console.log(fname)



// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);



// rest operator:-
// const sum = (...num)=>{
//     return typeof(num)
//     return num.reduce((acc,e)=>{
//        return acc+=e;
//     },0)
// }

// console.log(sum(1,2,3))

// spread operator:-
// const arr = [10,20];
// const number = [1,2,3,...arr];
// console.log(number);


// const [fname,lname,...rest] = ["priya","karn",18,22,25];
// console.log(rest)



// const sum = ()=>{
//     'use strict'
//     a = 18; 
//     console.log(a)
// }

// sum()

// a = 18;
// console.log(a)


// const obj = {a:"priya",b:"karn",a:"madhu"};
// console.log(obj);
// console.log(obj.hasOwnProperty("a"))
// console.log(obj.hasOwnProperty(a));


// for(var i=1;i<5;i++){
//     if(i==3) continue;
//     console.log(i)
// }

// const fname = "priya";

// const sum = ()=>{
//     console.log(fname)
// }

// sum()




console.log(!!null);
console.log(!!"");
console.log(!!1);

let data = 2 + 3 + "4";
console.log(typeof data)