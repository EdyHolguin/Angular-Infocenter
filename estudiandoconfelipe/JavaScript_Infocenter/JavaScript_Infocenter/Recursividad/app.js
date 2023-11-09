//Imprimir números en forma descendente
/*
const conteoRegresivo=(a)=>{
    if(a<0) return
     console.log(a)
     return conteoRegresivo(a-1)
  }
  
  conteoRegresivo(10);*/

  //Imprimir de formma ascendente


/*
  const conteoRegresivo=(a)=>{
    if(a<0) return
    
     conteoRegresivo(a-1);
     console.log(a)
  }
  conteoRegresivo(10);*/

    //Averiguar el factorial de un numero
   /* const factorial=(a)=>{
        if(a==0) return 1
        
         return a*(factorial(a-1));
      }
      
      console.log(factorial(3));*/



//Averiguar el número de cifras

//Clases en JS

//Definición de una clase

/*
class Persona{
    //Constructor para inicializar las propiedades 

    constructor(nombre, edad){
        //Campos de la instancia para representar el estado
        this.nombre=nombre;
        this.edad=edad;
    }

    //Método de la clase para mostrar información
    mostrarInformacion(){
        console.log(`nombre:${this.nombre}, Edad: ${this.edad}`);

    }
}
//Crear los objetos basados en la clase Persona
const persona1=new Persona("Juan",30);
const persona2=new Persona("Andres",20);
const persona3=new Persona("Luis",40);
///LLamar a los métodos de la clase
persona1.mostrarInformacion();
persona2.mostrarInformacion();
persona3.mostrarInformacion();
*/

/*Crear la clase empleado con siguiente campos:
nombre,edad,direccion,telefono,salario,profesion,estadoCivil

*/

//Herencia
/*
class Estudiante extends Persona
{
    #semestre;//atributo propio de la clase Estudiante
    
    constructor(nombre,semestre)
    {
        super(nombre);
        this.semestre=semestre;
    }
    mostrar(){
        console.log(`Hola me llamo ${this.nombre} y estoy en el semestre
        ${this.semestre}.`);
    }

}
const est1=new Estudiante("Ana",2);
est1.mostrar();
*/
/*Crear una clase DirectorEjecutivo que hereda de Empleado
nombre, salario. Esta clase tiene como atributo propio
el idDirector*/
 /*
 
 /*Crear una clase DirectorEjecutivo que hereda de Empleado
nombre y salario. Esta clase tiene como atributo propio el idDirector*/

/* 
USO DE TRY CATCH. para gestionar errores. Es una estrutura que nos permite atrapar
excepciones

Usando una palabra clave throw.  Errores personalizados
donde encuentra el error hay se queda

*/
/*
console.log("Antes");
throw "Error";//Rompemos la ejecución normal
console.log("Después");//Nunca se va a ejecutar
*/
//Ejemplo

/*
const numPiezas=10;
const probError=0.25;
const comprobarSiEsDefectuoso=()=>Math.random()<probError;

for(let i=1;i<numPiezas;i++){
    const esDefectuosa=comprobarSiEsDefectuoso();
    if(esDefectuosa){
        throw `Pieza ${i} defectuosa`;
        console.log(`Pieza ${i} fabricada`);
    }

}
*/
/*
const numPieza=10;
const probError=0.25;
let correcta=0;
let defectuosa=0;
const comprobarSiEsDefectuoso=()=>Math.random()<probError;
for(let i=1;i<=numPieza;i++){
    const esDefectuosa=comprobarSiEsDefectuoso();
    try {
        if(esDefectuosa)throw `->Pieza ${i} defectuosa`;
        console.log(`Pieza ${i} fabricada`)
        correcta++;
        
    } catch (ex) {
        defectuosa++;
        console.log(ex)
    }
}
console.log(`Fabricadas:${numPieza}`);
console.log(`Correctas:${correcta}`);
console.log(`Defectuosas:${defectuosa}`);

 
 //Propiedades de los errores

 try {
    lalalala
 } catch (ex) {
    //console.log(ex);
    //console.log(ex.name);
    //console.log(ex.message);
    //console.log(ex.stack);
 }
*/
/*
let tamanoCambiante={
    get tamano(){
        return Math.floor(Math.random()*100);
    }
};
console.log(tamanoCambiante.tamano);*/

/*
class Temperatura{
    constructor(celsius){
        this.celsius=celsius;
    }
    get fahrenheit(){
        return this.celsius*1.8+32;
    }
    set fahrenheit(valor){
        this.celsius=(valor-32)/1.8;
    }
    static desdefahrenheit(valor){
        return new Temperatura((valor-32)/1.8);
    }
}

let temp=new Temperatura(22);
console.log(temp.fahrenheit);

temp.fahrenheit=86;
console.log(temp.celsius);*/


//Dividir un número


//JSON:

let persona={
    nombre:"Juan",
    twiter: "#juanperez",

}

let personaJSON=JSON.stringify(persona);
document.write(personaJSON);

//Acceder a nombre
document.write("<br>");
document.write(personaJSON.nombre);

let nuevaPersona=JSON.parse(personaJSON);

document.write("<br>");
document.write(nuevaPersona);

document.write("<br>");
document.write(nuevaPersona.nombre);





