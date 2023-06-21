// Cuando se le proporciona una letra, devuelve su posición en el alfabeto.
// Entrada: "a"
// Salida: "Posición del alfabeto: 1"

function position(letter){
// let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return letter.search("")
   }

   console.log(position("a"));
   console.log(position("z"));
   console.log(position("e"));