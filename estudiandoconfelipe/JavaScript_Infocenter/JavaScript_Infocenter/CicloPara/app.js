//Listar los números 1-5
/*
for(let i=1; i<=5;i++)
{
    document.write(i);
}
*/
/*1. Escriba un algoritmo que lea n números reales
y muestre el promedio de los números leidos

*/
/*
let n=parseInt(prompt("Ingrese cantidad de números a promediar"));
let suma=0;
for(let i=1; i<=n;i++)
{
    let numero=parseFloat(prompt("Ingrese el número"));
    suma=suma+numero;
}
let promedio;
promedio=suma/n;
console.log(promedio);

/*
2. Escriba un algoritmo que lea n números reales y muestre 
cual es el menor y número mayor ok
*/

/*
3. Diseñe un algoritmo que lea un número entero n y, luego, 
solicite los nombres, el sexo y las edades de n personas. Calcule 
y muestre: a) La cantidad de hombres b) La cantidad de 
mujeres c) El promedio de edad de las mujeres y el promedio 
de edad de los hombres.
*/
/*
const n = parseInt(prompt("Ingrese la cantidad de personas a registrar:"));
let cantidadHombres = 0;
let cantidadMujeres = 0;
let sumaEdadHombres = 0;
let sumaEdadMujeres = 0;
let promdeioH=0;
let promdeioM=0;

for (let i = 1; i <= n; i++) {
  const nombre = prompt(`Ingrese el nombre de la persona #${i + 1}:`);
  const sexo = parseInt(prompt("Ingrese el sexo:  1. Masculino 2. Femenino"));
  const edad = parseInt(prompt("Ingrese la edad"));

  if (sexo==1) {
    cantidadHombres++;
    sumaEdadHombres += edad;
  } else if (sexo==2) {
    cantidadMujeres++;
    sumaEdadMujeres += edad;
   
  } 
  }

  promedioH=sumaEdadHombres/cantidadHombres;
  promdeioM=sumaEdadMujeres/cantidadMujeres;
    
  console.log("Cantidad hombres: "+cantidadHombres);
  console.log("Promedio Hombres: "+promedioH);
  console.log("Cantidad Mujeres: "+cantidadMujeres);
  console.log("Promedio Mujeres: "+promdeioM);


  /*Escriba un algoritmo para cada uno de los siguientes patrones 
de asteriscos. Por ejemplo, para el patrón de asteriscos B), lea 
un entero n y muestre n asteriscos en la primera fila, n- 1 
asteriscos en la segunda fila y así sucesivamente.(imagen).  Solo 
el patron A y B */

/*
for (let i = 1; i <= 5; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += '*';
    }
    console.log(linea);
  }
*/

  /*Diseñe un algoritmo que muestre la siguiente secuencia de 
números:(imagen) ok
*/


