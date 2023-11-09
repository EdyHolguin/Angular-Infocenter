//ELIMINAR NODOS

//Seleccionar el nodo padre

const elementoPadre=document.querySelector('.padre');

//Crear un nodo hijo
const parrafoCuatro=document.createElement('p');

//Crear el texto
parrafoCuatro.innerHTML='Párrafo 4';

//Agregamos al padre con el metodo appendChild

elementoPadre.appendChild(parrafoCuatro);

/*************************************************** */
//Eliminar
const parrafoUno=document.querySelector('#p1');

//Remover el parrafo con removeChild
elementoPadre.removeChild(parrafoUno);


//Eliminar el párrafo 2
const parrafoDos=document.querySelector('#p2');
parrafoDos.remove();

//Para eliminar vamos a reemplazar
const parrafoTres=document.querySelector('#p3');

   //Tomamos como referencia al elemento padre
   elementoPadre.replaceChild(parrafoCuatro,parrafoTres);