//traditional code
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
//arrow function
const oddOrEven=(no)=>{
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
findOddOrEven(10);
oddOrEven(78);
