// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n){

return a[n - 1];
}

console.log(myFunction('abcd',1)); /** esperado 'a' */
console.log(myFunction('zyxbwpl',5)); /** esperado 'w' */
console.log(myFunction('gfedcba',3)); /** esperado 'e' */