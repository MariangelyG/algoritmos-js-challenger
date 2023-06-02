// Get type of value
// Write a function that takes a value as argument. Return the type of the value.

function myFunction(a){

return typeof a;
}

console.log(myFunction(1)); /** esperado number */
console.log(myFunction(false)); /** esperado boolean */
console.log(myFunction({})); /** esperado object */
console.log(myFunction(null)); /** esperado object */
console.log(myFunction('string')); /** esperado string */
console.log(myFunction(['array'])); /** esperado object */