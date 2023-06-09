// Check if all array elements are equal
// Write a function that takes an array as argument. It should return true if all elements in the array are equal. 
// It should return false otherwise.

function myFunction(arr){
    
    return arr.every(item => item === arr[0]);
    }
    
    console.log(myFunction([true, true, true, true])); /**esperado true */
    console.log(myFunction(['test', 'test', 'test'])); /**esperado true */
    console.log(myFunction([1,1,1,2])); /**esperado false */
    console.log(myFunction(['10',10,10,10])); /**esperado false */