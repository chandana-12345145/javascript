let arr=[1,2,3,4,5];
console.log(arr);
for(let val of arr){
    if(val%2==0){
    console.log(val);
    }
}
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);