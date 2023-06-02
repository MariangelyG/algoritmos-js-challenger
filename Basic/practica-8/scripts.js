// Find the position of one string in another
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

function myFunction(a){

return a.indexOf("is");
}

console.log(myFunction("praise")); /**esperado 3 */
console.log(myFunction("risky")); /**esperado 1 */
console.log(myFunction("paris")); /**esperado 3 */