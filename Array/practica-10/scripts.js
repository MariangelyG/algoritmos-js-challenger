// Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

// Ordenar una matriz de números en orden descendente
// Escribe una función que tome una matriz de números como argumento. 
// Debería devolver una matriz con los números ordenados en orden descendente.

function myFunction(arr){

    return arr.sort().reverse()
    }
    
    console.log(myFunction([1,3,2])); /**esperado [3,2,1] */
    console.log(myFunction([4,2,3,1])); /**esperado [4,3,2,1]*/
 