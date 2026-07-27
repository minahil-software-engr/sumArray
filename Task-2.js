const sumArray=(array)=>{  //sumArray ka function bna kay array as a parameter day deya
    let sum=0; //starting may sum 0 rakha
    array.forEach((number)=>{ //for each may call back function likha yah loop array ki har value kay liya chalay ga
        sum+=number;  //sum update hota gya array ki har value bari bari add hoti gayi
    });
    return sum;
}
const array=[1,2,3,4,5];
const result=sumArray(array);
console.log(`sum of array is: ${result}`);