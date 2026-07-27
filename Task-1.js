const sumArray=(array)=>{  //sumArray ka function bna kay array as a parameter day deya
    let sum=0; //starting may sum 0 rakha
    for(let i=0; i<array.length; i++){  //loop chalaya array ki length say aik kamm takk
        sum+=array[i]; //sum update hota gya array kay har index ki value bari bari add hoti gai
    }
    return sum;  //sum return kar deya
}
const array=[1,2,3,4,5];
const result=sumArray(array);
console.log(`sum of array is: ${result}`);