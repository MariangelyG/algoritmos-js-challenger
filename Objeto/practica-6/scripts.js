// Creating Javascript objects one
// Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. 
// Return the object.

function myFunction(a){
   const miObjeto = {
    key: a
};
    return {key: a}
}

// { key: a };

    console.log(myFunction('a'));
    console.log(myFunction('z'));
    console.log(myFunction('b'));