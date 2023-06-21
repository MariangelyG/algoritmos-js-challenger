// La función Math.min ha dejado de funcionar, por lo que debemos usar nuestra propia función. Hemos tenido un buen comienzo, pero esta función no parece manejar todo correctamente. Agregue los controles adecuados para devolver NaNcualquier cosa que no sea un número real, excepto tratar nullcomo 0.

function min(a, b){
    return Math.min(a, b)
  }

//   (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b)