const checkTriangleType = (a,b,c)=>{
    // a==b && b==c so here if a==b && b==c then obviously a==c 
    if(a==b && b==c) return "equilateral triangle"
    if(a==b || b==c || c==a) return "isosceles triangle"
    return "scalene triangle"
}

console.log(checkTriangleType(3,3,3));  //equilateral triangle
console.log(checkTriangleType(1,20,10));  // isosceles triangle
console.log(checkTriangleType(2,2,2));  // scalene triangle 

