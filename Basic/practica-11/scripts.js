// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a

function myFunction(a, b)
{

return a*(b/100);
}

console.log(myFunction(100,50)); /** esperado 50 */
console.log(myFunction(10,1)); /** esperado  0.1 */
console.log(myFunction(500,25)); /** esperado  125 */