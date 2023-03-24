/**
 * Crear un programa que realice lo siguiente:
 * - Solicitar un numero por prompt y guardarlo
 * - Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
 * - Debe imprimir el resultado por consola o por el DOM.
 * - Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
 */

function calcularFibonnacci() {
  alert("Bienvenido al calculo Fibonacci");
  let number = Number(prompt("Ingresa un numero"));
  //Compruebo si es numero
  while (isNaN(number) || number <= 0) {
    alert("El valor ingresado no es correcto");
    number = Number(prompt("Ingresa un numero"));
  }
  fibonacci(number);
}
function fibonacci(number) {
  let a = 0;
  let b = 1;
  let c;
  let resultados = [];
  //Asigno los nuevos valores para la secuencia
  for (let i = 0; i < number; i++) {
    c = a + b;
    resultados.push(a);
    a = b;
    b = c;
  }
  console.log(resultados);
  document.getElementById('resultado').innerHTML = `La secuencia Fibonacci para el numero: ${number} es => ${resultados}`;
}


calcularFibonnacci();




