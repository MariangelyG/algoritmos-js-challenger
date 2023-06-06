// Split a number into its digits
// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. 


// Dividir un número en sus dígitos
// Escribe una función que tome un número (a) como argumento. Divide a en sus dígitos individuales y devuélvelos 
// en una matriz.


function myFunction(a)
{

    return a.toString().split("").map(number => Number(number)) 

}


console.log(myFunction(10));  /** esperado [1,0] */
console.log(myFunction(931));  /** esperado [9,3,1] */
console.log(myFunction(193278));  /** esperado [1,9,3,2,7,8] */
