/*3. Realizar un programa que calcule el salario de un trabajador, para ello pediremos el 
número de horas trabajadas y el precio de la hora. Si el trabajador trabajas más de 40 
horas semanales, se considera que trabaja horas extras. Las horas extras se pagan a 1.5 
veces la hora normal. 
a. Modifica el programa para que la operación se realice para cinco trabajadores. 
b. Modifica el programa anterior para que el trabajador introduzca también su 
nombre y dirección que mostraremos junto con su salario. 
c. Modifica el programa anterior para que la salida se muestre en nuestro documento 
html y también en la consola. */
let hour = parseInt(prompt("Introduce un numero"));
let price =parseInt(prompt("Introduce otro numero"));

const salary=(hour,price)=>{
    let result=hour*price;
    return result;
}