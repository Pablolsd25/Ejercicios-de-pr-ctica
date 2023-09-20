/* Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######
Puede ser útil saber que puedes encontrar la longitud de un string escribiendo .length después de él:

let abc = "abc";
console.log(abc.length);
// → 3 */
//usando recursión
function imprimirTriangulo(n) {
  if (n > 0) {
    imprimirTriangulo(n - 1);
    let linea = "";
    for (let i = 0; i < n; i++) {
      linea += "#";
    }
    return console.log(linea);
  }
}

imprimirTriangulo(7);

/*Escribe un programa que cree un string que represente
una cuadrícula de 8 × 8, usando caracteres de nueva 
línea para separar las líneas. En cada posición de 
la cuadrícula hay un espacio o un carácter "#". 
Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo 
como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, 
define una vinculación tamaño = 8 y cambia el 
programa para que funcione con cualquier tamaño, 
dando como salida una cuadrícula con el alto y ancho dados. */
function ajedrez(n) {
  for (let i = 0; i < n; i++) {
    let fila = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        fila += "#";
      } else {
        fila += " ";
      }
    }
    console.log(fila);
  }
}

ajedrez(8);

function calcularMinimo(a, b) {
  return console.log(Math.min(a, b));
}

calcularMinimo(8, 7);

function esPar(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
  esPar(n);
}

console.log(esPar(4));

function contarFs(string) {
  return console.log(string.length);
}

contarFs("jjdjkdsssss");
//Escribe una función rango
// que tome dos argumentos, inicio
//y final y retorne un array que
//que contenga todos los números
//desde inicio a final.

function rango(inicio, final, paso = 1) {
  let resultado = [];
  if (paso > 0) {
    for (let i = inicio; i <= final; i += paso) {
      resultado.push(i);
    }
  } else if (paso < 0) {
    for (let i = inicio; i >= final; i += paso) {
      resultado.push(i);
    }
  } else {
    return resultado;
  }

  return resultado;
}

function suma(arr) {
  let total = 0;
  for (let numero of arr) {
    total += numero;
  }
  return total;
}

const miRango = rango(1, 10);
console.log(miRango);
console.log(rango(1, 10, 2));
const nuevaSuma = suma(miRango);

console.log(nuevaSuma);
