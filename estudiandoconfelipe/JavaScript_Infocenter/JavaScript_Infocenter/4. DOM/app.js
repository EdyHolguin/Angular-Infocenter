/*Párrafos antes y después del nodo padre
beforebegin: se agrega fuera del div
afterbegin: Se comporta como un hijo y va al inicio
beforeend: se comporta como hijo antes de la etiqueta de cierra
afterend: después de la etiqueta de cierre, después del contenedor padre

*/

//Agregar párrafo extra
const parrafoExtra=document.createElement('p');
parrafoExtra.innerHTML='Párrafo Extra';

const elementoPadre=document.querySelector('.padre');

elementoPadre.insertAdjacentElement("beforebegin",parrafoExtra);
//elementoPadre.insertAdjacentElement("afterbegin",parrafoExtra);
//elementoPadre.insertAdjacentElement("beforeend",parrafoExtra);
//elementoPadre.insertAdjacentElement("afterend",parrafoExtra);


//Agregar atributo
parrafoExtra.setAttribute('class','parrafos');