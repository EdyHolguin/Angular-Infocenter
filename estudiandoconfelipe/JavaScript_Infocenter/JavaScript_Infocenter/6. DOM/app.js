//Eventos

//Haciendo click

/*
saludoBtn.addEventListener('click',()=>{
    console.log("Hola desde la función flecha");
});*/


//Click derecho
/*
saludoBtn.addEventListener('contextmenu',()=>{
    console.log("Hola desde la función flecha");
});
*/

//Pasando el mouse
/*
saludoBtn.addEventListener('mouseover',()=>{
    console.log("Hola desde la función flecha");
});
*/

/*
saludoBtn.addEventListener('click',saludo);
saludoBtn.removeEventListener('click',saludo);

function saludo(){
    console.log("Hola desde una función externa");

}

*/

//imprimir propiedades del objeto event
saludoBtn.addEventListener('click',saludo);

/*function saludo(event){
    console.log(event);

}*/

//Imprimir un valor de las propiedades

function saludo(event){
    console.log(event.target.innerHTML);

}