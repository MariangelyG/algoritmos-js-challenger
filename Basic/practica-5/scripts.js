// Remove first n characters of string
// // Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

function myFunction(a){

return a.slice(3);
}

console.log(myFunction('abcdefg')); /**esperadp 'defh' */
console.log(myFunction('1234')); /**esperadp '4' */
console.log(myFunction('fgedcba')); /**esperadp 'dcba' */