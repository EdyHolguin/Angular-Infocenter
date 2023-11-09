//Agregar párrafo al inicio de la lista
const parrafoCero=document.createElement('p');
parrafoCero.innerHTML='Párrafo 0';

const elementoPadre=document.querySelector('.padre');

const parrafoUno=document.querySelector('p');

elementoPadre.insertBefore(parrafoCero,parrafoUno);


//Ubicarlo antes del parrafo 2
const parrafoDos=document.querySelector('#p2');
elementoPadre.insertBefore(parrafoCero,parrafoDos);

//Agregarlo despues del parrafo 2
//Agregarlo al final