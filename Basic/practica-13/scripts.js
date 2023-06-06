// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a.
//  If not, append it to the end. Return the concatenation

// Escriba una función que tome dos cadenas (a y b) como argumentos. 
// Si a contiene b, agregue b al principio de a. Si no, añádelo al final. Devolver la concatenación

function myFunction(a, b)
{

return a.includes(b) ? b+a : a+b

}
console.log(myFunction('cheese', 'cake'));  /**esperado 'cheesecake'*/
console.log(myFunction('lips', 's')); /**esperado 'slips'*/
console.log(myFunction('Java', 'script')); /**esperado 'Javascript'*/
console.log(myFunction(' think, therefore I am', 'I')); /**esperado 'I think, therefore I am'*/