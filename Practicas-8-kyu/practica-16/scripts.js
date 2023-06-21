// Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8  : number * 9
}