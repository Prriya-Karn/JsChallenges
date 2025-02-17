const timeCount = ()=>{
    let time = 0;
   let res =  setInterval(()=>{
        document.querySelector(".num").innerHTML = time;
        time++;
        if(time>10){
            clearInterval(res);
           }
    },1000);  
}
timeCount();