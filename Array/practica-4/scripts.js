// Get first n elements of an array
// Write a function that takes an array (a) as argument. Extract the first 3 elements of a.
//  Return the resulting array

function myFunction(a){

    return a.slice(0,3)
    }
    
    console.log(myFunction([1,2,3,4]));   /** esperado [1,2,3] */
    console.log(myFunction([5,4,3,2,1,0])); /** esperado [5,4,3] */
    console.log(myFunction([99,1,1])); /** esperado [99,1,1] */