//Seleccionar elementos
/*
//Por ID
let elementoPorId=document.getElementById('p1');
elementoPorId.innerHTML='HTML';

//Por nombre de la clase
let elementoPorClase=document.getElementsByClassName('parrafos');
console.log(elementoPorClase.length);
elementoPorClase[1].innerHTML='CSS';*/

let elementoPorClase=document.querySelector('.parrafos');
console.log(elementoPorClase);//Muestra la primera clase osea el primer parrafo

//Listando todas las clases
/*let elementoPorClaseTodo=document.querySelectorAll('.parrafos');
console.log(elementoPorClaseTodo);*/

//Transformar el NodeList a Array
/*
let elementoPorClaseTodo=document.querySelectorAll('.parrafos');
const arreglo=[...elementoPorClaseTodo];
console.log(arreglo);
arreglo[1].innerHTML='Selectot de clase Arreglo';
*/

//Por etiqueta
let elementoPorEtiqueta=document.querySelectorAll('p');
const arreglo=[...elementoPorEtiqueta];
arreglo[2].innerHTML='Elemento por etiqueta';
arreglo[2].style.color='orange';


//Color al parrafo 1