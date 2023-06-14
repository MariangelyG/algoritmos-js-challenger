// Remove a property from an object
// Write a function that takes an object as argument. It should return an object with all original object properties. 
// except for the property with key 'b'

function myFunction(obj){
    
 return delete obj.b ? obj : undefined
}

// _.omit(obj , "b")
    console.log(myFunction({ a: 1, b: 7, c: 3 })); /**esperado { a: 1, c: 3 } */ 
    console.log(myFunction({ b: 0, a: 7, d: 8 })); /**esperado { a: 7, d: 8 } */ 
    console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 })); /**esperado { e: 6, f: 4, a: 3 } */ 