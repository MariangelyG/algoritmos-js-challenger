// Multiplication, division, and comparison operators
// Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. 
// Otherwise, multiply both numbers. Return the resulting value

// Operadores de multiplicación, división y comparación
// Escribe una función que tome dos números (a y b) como argumentos. Si a es más pequeño que b, divide a por b. 
// De lo contrario, multiplica ambos números. Devolver el valor resultante

function myFunction(a,b)
{

return  a < b ? a / b : a * b;

}

console.log(myFunction(10, 100));  /** esperado 0.1 */
console.log(myFunction(90, 45));  /** esperado 4050*/
console.log(myFunction(8, 20));  /** esperado 0.4*/
console.log(myFunction(2, 0.5));  /** esperado 1*/