//Capturar un valor
/*
cambio.addEventListener('click',()=>{
    let inputValue=document.getElementById("mostrarValor").value;
    document.getElementById("valorCapturado").innerHTML=inputValue;


});*/

//Separando la función

cambio.addEventListener('click',capturar);

function capturar(){
    let inputValue=document.getElementById("mostrarValor").value;
    document.getElementById("valorCapturado").innerHTML=inputValue;

}