// Extract first half of string
// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

function myFunction(a){

return a.slice(0, a.length / 2);
}

console.log(myFunction('abcdefgh')); /*esperado 'abcd'*/
console.log(myFunction('1234')); /*esperado '12'*/
console.log(myFunction('gedcba')); /*esperado 'ged'*/