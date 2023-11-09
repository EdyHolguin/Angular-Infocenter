/*let dato=10;
let dato1=20;

let and=(dato>30 && dato1<20);
document.write("AND " +and + "<br>");

let or=(dato>30 || dato1<50);
document.write("OR " +or + "<br>");

let not =!(dato<20);
document.write("NEGACIÓN " +not + "<br>");
*/

//Averiguar cual de los dos numeros es mayor
/*let numero1=66;
let numero2=200;

if(numero1>numero2)
{
    document.write("Número 1 es mayor");

}
else{
    document.write("Número 2 es mayor");

}
*/

//Ingresando datos desde el teclado

/*
let numero1,nunmero2;
numero1=parseInt(prompt("Ingrese el primer número"));

numero2=parseInt(prompt("Ingrese el segundo número"));

if(numero1>numero2)
{
    document.write("Número 1 es mayor")
}else{
    document.write("Número 2 es mayor");
}*/

//Operador ternario condicional. Atajo del if
//condicion  ?   TRUE:FALSE
/*
var numero1;
var numero2;

numero1=prompt("Ingrese el primer numero");
var primerNum=parseInt(numero1);

numero2=prompt("Ingrese el segundo numero");
var segundoNum=parseInt(numero2);

var resultado=primerNum>segundoNum ? "Numero1 es mayor": "Numero2 es mayor";
document.write(resultado);*/

//1. Ingrese un número diga si se encuentra entre el rango de 1-100: ok

/*2. Leer tres números diferentes e imprimir solo el número mayor 
de los tres. OK*/  

let resultado=primerNum>segundoNum && primerNum>tercerNum ?
 "Numero1 es mayor: "+primerNum: segundoNum>primerNum && segundoNum>tercerNum ?
 "Numero2 es mayor: "+segundoNum: "Numero3 es mayor: "+tercerNum;
document.write(resultado);


/*3.  Leer 2 números si son iguales que los multiplique, si el
primero es mayor que el segundo que los reste y sino que los
sume.  OK*/




/*4. En una llantera se ha establecido una promoción de
la siguiente manera: Si se compran menos de cinco
llantas el precio es de $300 cada una, de $250 si se
compran de cinco a 10 y de $200 si se compran más
de 10. Obtener  el valor a pagar por llanta y lo que
tiene que pagar por el total de la compra*/


/*5. En una empresa cada empleado debe teclear un código 
identificador de 3 cifras en la entrada. Diseñe un 
algoritmo que muestre por pantalla la categoría del 
empleado teniendo en cuenta que: 
• Si el código es divisible por 2, por 3 y por 5, la categoría del 
empleado es “Director general”. 
• Si el código es divisible por 3 y por 5 pero no por 2, la 
categoría del empleado es “Directivo”.
• Si el código es divisible por 2, pero no por 3 ni por 5, la 
categoría del empleado es “Personal”. 
• Si el código no es divisible por 2, ni por 3 ni por 5, la 
categoría del empleado es “Seguridad”. ok */

et codigo;

 

codigo = parseInt(prompt("Ingrese el código de empleado: "));

 

let cargo = (codigo%2==0)&&(codigo%3==0)&&(codigo%5==0) ? "Director General":

(codigo%3==0)&&(codigo%5==0)&&(codigo%2!=0) ? "Directivo":

(codigo%2==0)&&(codigo%3!=0)&&(codigo%5!=0) ? "Personal":

"Seguridad";

 

document.write("La categoría del empleado es: " + cargo);