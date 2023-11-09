//
/*
let opcion=4;
switch(opcion){
    case 1:
        document.write("Menú Usuario");
        break;
    case 2:
        document.write("Menú Administrativo");
        break;
    case 3:
        document.write("Configuración");
        break;
    default:
        document.write("SALIR");
        break;
 
}
*/
/*1. Leer nombre y estado civil, este es un código 
previamente establecido si es 1 indica que es soltero, 
si es 2 es casado, si es 3 es separado.
 Imprimir nombre, código, descripción de ese código*/

let nombre =prompt("Ingrese su nombre");
let estadoCivil= parseInt(prompt("Ingrese su estado civil:\n1. Soltero\n2. Casado\n3. Separado"));
let codigo=0;
let descripcion="";

switch(estadoCivil){
    case 1: 
          codigo=1;
          descripcion="Soltero";
          break;
    case 2:
          codigo=2;
          descripcion="Casado";
          break;
    case 3:
        codigo=3;
        descripcion="Separado";
        break;
    default:
        alert("Estado civil no valido");
        break;
}

console.log("Nombre: " +nombre);
console.log("Código: " +codigo);
console.log("Descripción: " +descripcion);

/*
En una tienda de descuento se efectúa una promoción en la 
cual se hace un descuento sobre el valor de la compra total 
según el color de la bolita que el cliente saque al pagar en caja. 
Si la bolita es de color blanco no se le hará descuento alguno, si 
es verde se le hará un 10% de descuento, si es amarilla un 25%, 
si es azul un 50% y si es roja un 100%. Determinar la cantidad 
final que el cliente deberá pagar por su compra se sabe que solo 
hay bolitas de los colores mencionados OK.

*/