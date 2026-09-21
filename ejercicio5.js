/*5. Programa que pide 2 números y halla su potencia.  
a. La potencia se debe realizar mediante productos y debemos asegurarnos de que los 
valores con los que trabajamos son numéricos. 
b. No admitiremos valores negativos. */

let num1 =parseInt(prompt("Introduce un numero"));
let num2 =parseInt(prompt("Introduce otro numero"));
while(num1 <0|num2<0){
let num1 =parseInt(prompt("Introduce un numero"));
let num2 =parseInt(prompt("Introduce otro numero"));
}
const power=(num1,num2)=>{
    let result;
    // result=num1**num2; (forma rápida)
    for (let i = 0; i < num2; i++) {
    result = result * num1;
}

return result;
}
console.log(power(num1,num2));