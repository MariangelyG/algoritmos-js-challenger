// Check if a number is even
// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function myFunction(a)
{

return a % 2 === 0;
}

console.log(myFunction(10));  /** esperado true*/
console.log(myFunction(-4));  /** esperado true*/
console.log(myFunction(5));  /** esperado false*/
console.log(myFunction(-111));  /** esperado false*/
