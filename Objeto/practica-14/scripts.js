// Multiply all object values by x
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. 
// Return the resulting object.

function myFunction(a, b){
  
    const newObject = {}; for(let value of Object.keys(a)){
        newObject[value] = a [value] * b
    }
    return newObject
}


    console.log(myFunction({a:1,b:2,c:3},3)); /**esperado {a:3,b:6,c:9} */ 
    console.log(myFunction({j:9,i:2,x:3,z:4},10)); /**esperado {j:90,i:20,x:30,z:40} */ 
    console.log(myFunction({w:15,x:22,y:13},6)); /**esperado {w:90,x:132,y:78} */ 