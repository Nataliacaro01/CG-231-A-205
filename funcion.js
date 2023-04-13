
//Escriba la definición de una función en javascript que reciba un arreglo de elementos de tipo entero y retorne el elemento de menor valor.

function NumeroMenor(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

 /* Escriba la definición de una función en javascript que reciba un vector 3D cualquiera como parámetro 
 (interpretarlo como mejor lo considere) y retorne si el mismo es o no paralelo a uno de los ejes principales (X, Y o Z).
Texto de la respuesta*/


  function Paralelo(vector) {
    const e = 0; // Valor pequeño para comparación cercana a cero
    // Comprobar si el vector es paralelo al eje X
    if (Math.abs(vector.x) < e && Math.abs(vector.y) < e) {
      return true;
    }
    // Comprobar si el vector es paralelo al eje Y
    if (Math.abs(vector.y) < e && Math.abs(vector.z) < e) {
      return true;
    }
    // Comprobar si el vector es paralelo al eje Z
    if (Math.abs(vector.x) < e && Math.abs(vector.z) < e) {
      return true;
    }
    // Si el vector no es paralelo a ningún eje principal, devolver false
    return false;
  }