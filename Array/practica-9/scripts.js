// Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument.
//  Sort the array elements alphabetically. 
// Return the result.


// Ordenar una matriz de cadenas alfabéticamente
// Escriba una función que tome una matriz de cadenas como argumento.
//  Ordene los elementos de la matriz alfabéticamente. 
// Devuelve el resultado.

function myFunction(arr){

    return arr.sort()
    }
    
    console.log(myFunction(['b', 'c', 'd', 'a']));  /** esperado ['a', 'b', 'c', 'd'] */
    console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); /** esperado  ['a', 'a', 'c', 'd', 'w', 'y', 'z']*/
    