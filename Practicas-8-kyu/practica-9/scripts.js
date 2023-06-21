// Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.
// Por ejemplo:
// Dada [34, 15, 88, 2]su solución volverá2
// Dada [34, -345, -1, 100]su solución volverá-345
// Puede suponer, a los efectos de este kata, que la matriz proporcionada no estará vacía.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Math.min(...args) 
  return min 
    }
  }