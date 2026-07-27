const sumArray=(array)=>{
    let total=array.reduce((result,currentValue)=>{  //reduce function may callback function likha jismay 2 parameter deya aik result or aik array ki har value kay liya 
        return result+currentValue;  //iski value return hokay har dfa result may jati hay or currentvalue may tu array ki values bari bari jati rahti hay
    });
    return total;  //finally total return kar datay hay
}
const array=[1,2,3,4,5];
let result=sumArray(array);
console.log(`sum of array is: ${result}`);

