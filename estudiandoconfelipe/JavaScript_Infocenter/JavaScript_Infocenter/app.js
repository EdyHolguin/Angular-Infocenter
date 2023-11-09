/*alert("Hola");
console.log("Hola");
/*Este es un comentario,varias lineas */
//comentario una línea
/*document.write("Hola");*/

//Declarar variables

var cadena="juan";
document.write(cadena+"<br>")

var numero=9.8;
document.write(numero+"<br>")

var numeroEntero=9;
document.write(numeroEntero+"<br>")

var activo=false;
document.write(activo+"<br>");

//Objetos de fecha
var fecha=new Date();
document.write(fecha+"<br>")

var dia=fecha.getDay();
document.write(dia+"<br>")

var mes=fecha.getMonth();
document.write(mes+"<br>")

var anio=fecha.getFullYear();
document.write(anio+"<br>")

//Variables locales y globales

//Variables globales
/*
var nombre="Luisa";
document.write("Fuera de la función"+ "  "+nombre+"<br>")

function saludo()
{
    document.write("Dentro de la función"+ "  "+nombre+"<br>")
}
saludo();

function saludo1()
{
    let nombre="Juan";
    document.write("Dentro de la función con let"+ "  "+nombre+"<br>")

}
saludo1();
document.write("Fuera  de la función let"+ "  "+nombre+"<br>")

//Constantes. No cambia a lo largo de la ejecución del programa

const pi=3.1416;
document.write(pi);

/*pi=150;
document.write(pi);*/

//Obterner infomacion desde el teclado y pantalla
/*
var nombreUsuario=prompt("Ingrese su nombre:  ");
alert("El nombre es: "+nombreUsuario);
console.log(nombreUsuario);

//Calculando

document.write("<br>");
var numero1,numero2,total;
numero1=parseInt(prompt("Ingrese el primer número:  "));
numero2=parseInt(prompt("Ingrese el segundo número:  "));
total=numero1+numero2;
document.write("La suma es: "+total);

*/
//OPERADORES
var dato=10;
var dato1=20;

//Suma
var suma=dato+dato1;
document.write("La suma es: "+suma+"<br>");

//Resta
var resta=dato1-dato;
document.write("La resta es: "+resta+"<br>");

//Multiplicacion
var multi=dato*dato1;
document.write("El producto es: "+multi+"<br>");

//Division
var divi=dato1/dato;
document.write("La división es: "+divi+"<br>");

//Residuo
var modulo=dato1 % dato;
document.write("El modulo es: "+modulo+"<br>");

//Incremento
var incremento=dato;
incremento++;
document.write("La suma es: "+incremento+"<br>");

//Decremento
var decremento=dato;
decremento--;
document.write("La suma es: "+decremento+"<br>");