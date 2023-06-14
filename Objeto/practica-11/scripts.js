// Sum object values
// Write a function that takes an object (a) as argument. 
// Return the sum of all object values.

function myFunction(a){
 
   return Object.values(a).reduce((acc, sum) => acc + sum)
   
}
   //  let sum = 0
   //  for (let key in a){
   //     sum += a[key]
   //  }
   //  return sum
   //  }
    
    console.log(myFunction({a:1,b:2,c:3})); /**esperado 6*/ 
    console.log(myFunction({j:9,i:2,x:3,z:4})); /**esperado 18 */ 
    console.log(myFunction({w:15,x:22,y:13})); /**esperado 50 */