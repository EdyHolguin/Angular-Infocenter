/* 
Crear un nuevo párrafo
1. Crear el nodo
2. Agregar nodo
*/

//Crear el elemento

const parrafoCuatro=document.createElement('p');

//Seleccionar el padre (div)
const elementoPadre=document.querySelector('.padre');


//Agregar Nodo
//elementoPadre.appendChild(parrafoCuatro);

//Ahora agregar el texto

const textoParrafoCuatro=document.createTextNode('<h3>Párrafo 4</h3>');

//Agregar al padre
parrafoCuatro.appendChild(textoParrafoCuatro);


//Realizado de otra forma
const parrafoCinco=document.createElement('p');
parrafoCinco.innerHTML='<h3>Párrado 5</h3>';
//elementoPadre.appendChild(parrafoCinco);

//Agregar el párrafo 6

//Otro método que nos permite agregar varios parrafos a la vez

elementoPadre.append(parrafoCuatro,parrafoCinco);