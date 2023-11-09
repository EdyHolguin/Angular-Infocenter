/*
Funciones.  Conjunto de sentencias que realizan una tarea

*/

/*
function saludo(){
    document.write("Hola a todos");
}

//Invocar la función

saludo();
*/

//Función con parametros

/*
function suma(a,b){
    let resultado=a+b;
    document.write(resultado);

}

suma(2,9);*/

/*
function suma(a,b){
    let resultado=a+b;
    return resultado;
}
document.write(suma(2,9));

*/


//Podemos pasarle funciones a una variable
/*
let miSuma=function(a,b){
    return a+b;

}

document.write(miSuma(2,9));

document.write("<br>");

document.write(miSuma(22,9));

//Podemos pasar variables
 let n1=90;
 let n2=50;

 document.write("<br>");

 document.write(miSuma(n1,n2));*/

 /*1.  Escriba una función que devuelva si un número
 es divisible por 3 */
/*
 function divisible()
  {
    let numero=parseInt(prompt("Ingrese el número"));
    if(numero%3==0)
    {
        return "El número es divisible";

    }else{
        return "El número NO divisible";

    }

  }
  let respuesta=divisible();
  console.log(respuesta);
  */


  /*
  2. Ingresando datos desde el teclado. Crear una función
  que calcule el área de un rectángulo a partir de sus 
  dos lados ok
  */

  /*3. Realizar un programa que una vez que solicita dos números por teclado, 
  los pasa a una función donde se calcula la suma de éstos. 
  La función devolverá dicho resultado, pero en el caso de que 
  salga negativo, deberá cambiarle el signo antes de devolverlo. 
  Imprimir el resultado en la función principal ok
  
  */

  /*
  4.  Realizar un programa que, pidiendo la introducción de un número,
   averigüe mediante una función, si dicho número que se le pase es 
   positivo, negativo o nulo. Para ello, deberá escribir en pantalla, 
   en caso positivo, el mensaje “El número es positivo”.
    En el caso de ser negativo escribirá “El número es negativo”.
     Si resulta ser nulo escribirá “El número es nulo”  ok
  
  */
    
     /*5. Crea una función que reciba 2 parámetros ingresados por el usuario,
 precio e iva, y devuelva el precio con iva incluido. Si el usuario
 no ingresa el iva, aplicará el 21 por ciento por defecto.
 El iva es del 21% ok*/


 //Funcion flecha o ARROW 
 /*
 let acceso=true;
 let accesoU=function (a){
    return a;
 }

 accesoU(acceso)==true?document.write("Usuario permitido"):document.write("Usuario denegado");
*/
 //Sintaxis: flecha()=>{}

/*
 let acceso=false;
 let accesoU=a=>a  //Función que retorna un valor

 accesoU(acceso)==true?document.write("Usuario permitido"):document.write("Usuario denegado");*/

/*
 let accesoU=()=>true;
 accesoU()==true?document.write("Usuario permitido"):document.write("Usuario denegado");
*/


 //Cuando tiene varios parametros
 /*
let acceso=true;
let accesoU=(a,nombre)=>document.write(`Usuario: ${nombre} Acceso: ${a}`);

accesoU(acceso,"Luis");*/

//Cuando se devuelve más de un valor hay que colocar llaves
/*
let acceso=true;
let accesoU=(a,nombre)=>{
    document.write(`Usuario: ${nombre} en ejecución,  `);
    return a;

}

accesoU(acceso,"Gabriel")==true?document.write("Usuario permitido"):
document.write("Usuario denegado");

/*Caracteristicas de la función flecha
1. Funicón anónima
2. No necesita la palabra reservada function
3. Permite optimizar el código
4. De acueerdo a los parametros:
   a. si no tiene parametros, lleva parentesis vacios
   b. si lleva un solo parametro, no lleva parentesis
   c. si lleva más de un parametro, lleva parentesis
5. Si lleva mas de un retorno lleva llaves

*/

/*1. Crear una función donde se ingresen dos números 
para multiplicarlos okj */

/* 2.Crear y llamar a una función flecha que recibe un número 
y muestre su cubo con un console.log*/



 /* Funciones numéricas*/
 /*1. isNumber.  si es entero es verdadero,
  si es decimal es falso*/
/*
 let numero=50.23;
 let respuesta=Number.isInteger(numero);
 document.write(respuesta);*/

 /*2. Convierte a entero */
 /*let numero1=50.30;
 let res=Number.parseInt(numero1);
 document.write(res);*/

 
 /*3. Reducir decimales
 */
let n=50.304050;
let res=Number.parseFloat(n).toFixed(3);
document.write(res);


/*
Diga si un número ingresado por el usuario es o no
un entero.
*/




