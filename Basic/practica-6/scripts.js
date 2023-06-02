// Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function myFunction(str){

return str.slice(-3);
}

console.log(myFunction('abcdefg')); /** esperado efg */
console.log(myFunction('1234')); /** esperado 234 */
console.log(myFunction('fgedcba')); /** esperado cba */