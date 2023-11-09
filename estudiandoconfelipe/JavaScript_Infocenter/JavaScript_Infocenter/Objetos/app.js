
/*OBJETOS:  Colección dinamica de pares clave-valor
se puede comparar con objetos de la vida real.
Es una entidad independiente con propiedades que definen
sus caracteristicas */

let persona=
{
    nombre:"Pedro",
    genero:"masculino",
    estudiante:true,
    //Agregar objeto a un objeto
    idioma:{
        nativo:'Español',
        extranjero:{
            ingles:'Avanzado',
            frances:'Medio'
        }

    }

}

/*
Acceder a:
         -estudiate.
         -nativo
         -frances
*/
/*console.log(persona.estudiante);
console.log(persona.idioma.nativo);
console.log(persona.idioma.extranjero.frances);*/




let user="luz";
let objeto={
    nombre:"Alejo",
    apellido:"Velez",
    importante:true,
    //Se pued incluir texto interpolado
    texto:`Usuario: ${user}`,
    //Podemos tener una función
    miFuncion:(a,b)=>a+b,
    //Dentro de un objeto se puede tener otro objeto
    otroObjeto: persona,
    fecha: new Date()
}

//Imprimir el objeto
//console.log(objeto);
/*
console.log(objeto.nombre);
console.log(objeto.apellido);
console.log(objeto.importante);
console.log(objeto.texto);
console.log(objeto.miFuncion(5,9));
console.log(objeto.otroObjeto.genero);
console.log(objeto.fecha.getFullYear());*/

//Podemos agregar una nueva propiedad a los objetos creados

//persona.salario=3500000;

//Actualizar valor de una clave
//persona.salario=5000000;

//Eliminar propiedad
//delete persona.genero;

//Desestructurar, para mostrar una propiedad
//let{salario}=persona;

//console.log(salario);

/*
Agregar la propiedad edad y dereccion
Desestructurar salario y direccion
*/
//Agregar mas propiedades
/*
persona.edad=25;
persona.direccion='calle 50' ;

/*Desestructurar edad y direccion */
/*/
let{edad,direccion} = persona;
console.log(edad,direccion);*/



/* 
CONSTRUCTORES. Es una funcion que nos permite crear
objetos, simplica el trabajo al momento de crear 
un objeto
*/

let disco1={
    artista:'Juanes',
    album:'Vida cotidiana',
    anio:2023
}

let disco2={
    artista:'Maluma',
    album:'Don Juan',
    anio:2023
}

function Disco(artista,album,anio)
{
    this.artista=artista;
    this.album=album;
    this.anio=anio;

}

//Crear un nuevo objeto llamamos la función
/*
let disco3=new Disco('Juanes','Vida cotidiana',2023);
console.log(disco3);

let disco4=new Disco('Maluma','Don Juan',2023);
console.log(disco4);
*/

/*
Arreglos: es una coleccion de elementos que
almacena datos de cualquier tipo de dato,
pero en general se almacena datos del mismo tipo

*/
//Arreglo de un solo tipo de dato
//let arryNumero=[20,60,80,100];
//console.log(arryNumero);
//console.log(arryNumero[2]);

//Arreglo de varios tipos de datos
/*let miArray=["Ana",200,32.1,true];
console.log(miArray);
*/


//Crear un arreglo dentro de otro arreglo
/*let miArray=["Ana",200,32.1,true,["Luis",5,false]];
console.log(miArray[4][1]);*/

//Función dentro de un arrego

/*
let permitido="Usuario permitido";
let miFuncion=acceso=>acceso;
let miArray=["Ana",200,32.1,true,["Luis",5,false],miFuncion(permitido)];
//Acceder al array
console.log(miArray[5]);
*/


//Los arrays contienen objetos
/*
let permitido="Usuario permitido";
let miFuncion=acceso=>acceso;
let miArray=["Ana",200,32.1,true,["Luis",5,false],miFuncion(permitido),persona];

console.log(miArray[6].idioma.extranjero.ingles);*/



//Declar rreglo dentro del objeto person
let permitido="Usuario permitido";
let miFuncion=acceso=>acceso;

let persona1={
    nombre:"Antonio",
    miAutomovil:[
        pintura={
            color:"rojo",
            precio:4000,
            marca:"PPD"

        },
        vendedor={
            nombre:"Julian",
            edad:36

        }


    ]
}

let miArray=["Ana",200,32.1,true,["Luis",5,false],miFuncion(permitido),persona1];
//console.log(miArray[6].miAutomovil[1].edad);


//Agregar, modificar, eliminar elementos de un array

let carros=[
    {
        "color":"morado",
        "tipo":"minivan",
        "registroDia": new Date('2017-01-03'),
        "capacidad":7

    },

    {
        "color":"rojo",
        "tipo":"camioneta",
        "registroDia": new Date('2017-01-03'),
        "capacidad":5

    },
  ]
  //console.log(carros);

  //Añadir objeto en la primera posicion del array

  carros.unshift(
        {
        "color":"verde",
        "tipo":"cabrio",
        "registroDia": new Date('2017-01-03'),
        "capacidad":2

        }


  )
 // console.log(carros);

  //Añadir nuevo objeto en la última posición
  let longitud=carros.push(
    {
        "color":"azul",
        "tipo":"automovil",
        "registroDia": new Date('2017-01-03'),
        "capacidad":4


    }

  )
  //console.log(carros);
 // console.log(longitud);

  /*
Añadir un objeto en el medio, usamos splice. 
Array.splice(
    {índice donde va a empezar},
    {cuántos elemetos para eliminar},
    {elemento para agregar}

)  */

//Agregar objeto en la cuarta posicion

let carro={
        "color":"gris",
        "tipo":"camioneta",
        "registroDia": new Date('2017-01-03'),
        "capacidad":2

}
//carros.splice(3,0,carro);

//console.log(carros);


/*Digamos que quiero encontrar un carro verde
usamos la funcion find*/

let carro1=carros.find(carro=>carro.color==="verde");
//console.log(carro1);


//Eliminar el último elemento del array

//carros.pop();
//console.log(carros);

//Eliminar el primer elemento del array
//carros.shift();
//console.log(carros);

//Eliminar a partir de un elemento,
//carros.splice(1);
//console.log(carros);

//Eliminar dos elementos a partir del dos

//carros.splice(2,2);
//console.log(carros);

//Modificar un valor de una clave en un array

carros[1].color='Naranjado';
//console.log(carros);


/*typeof. Averigua el tipo de datode una
variable */
/*
let acceso=true;
console.log(acceso+" "+typeof acceso);

console.log(typeof persona1);

console.log(typeof persona1.nombre);
*/

/* 
SALTOS E INTERRUPCIONES
break
continue
*/
/*
let contador=0;
while(contador<5)
{
    contador++;
    console.log(contador);
    if(contador===3) break;

}
*/

//Par continue
/*
let i=0;
while(i<10)
{
    i++;
    if(i>=5&&i<=7){continue;}
    document.write(i);

}
*/
//TALLER

/* 1. Ingresar 3 nombres desde el teclado,
almacenarlo en un array e imprimir OK*/


/*
let nombres=[]; 
for(let i=0; i<3; i++)
{ let dato = prompt("Ingrese el nombre");
 nombres.push(dato);
 }
 console.log("Nombres ingresados:"); 
 for(let i=0; i<nombres.length;i++)
 { console.log(nombres[i]); }

 */

/*
2. Crear un constructor con las siguientes
propiedades: nombre, salario, estado civil,
celular.
Los datos se piden por teclado
Mostrar los datos ingresados
*/

/* 3. Para el ejercicio anterior. Se ingresan
registros hasta que el usuario no desee
ingresar más registros*/


/*
4. Partimos de dos arrays:
artículos que contiene nombres de artículos y precios que
contiene lo precios correspondientes de cada artículo.       
Se trata de crear una función precio(articulo) precio que lleva
como argumento el nombre de un artículo y devuelve el precio 
correspondiente. si el artículo no existe devolverá -1
*/
/*
function precios(articulo){
    let lista = ["pan", "jugo", "sal", "canela", "pimienta"];
    let precio = [1000, 5000, 2000, 1200, 4800];
    let posicion =-1;
    for(let j=0; j<lista.length; j++){
        if(lista[j]== articulo){
            posicion = j;
        }        
    }
    if(posicion >-1){
        return precio[posicion];
    }
    else
        return posicion;
}

let buscar = prompt("Ingrese el nombre del artículo");
let valor = precios(buscar);

document.write(valor);*/

/* 
Crear un vector de numeros enteros de 10 posiciones, averiguar
el mayor, el menor y ordenar el vector

*/
//for in
/*
const obj={
    a: 1,
    b: 2,
    c: 3

};
for(const i in obj)
{
    console.log(obj[i]);

}
 
let nombre=["Juan","Lucas","Ana"];
for(let i in nombre)
{
 console.log(nombre[i]);

}
*/

/*Filter:  */
/*
let gente=[
    {nombre: "Ana",edad:14},
    {nombre: "Luis",edad:2},
    {nombre: "Juan",edad:22},
    {nombre: "Lucas",edad:5},
    {nombre: "Lina",edad:3},
    {nombre: "Yina",edad:1},
    {nombre: "Sofia",edad:21},
]

let peque=gente.filter(persona=>persona.edad<=3);
console.log(peque);*/
/*
let equipo=[
    {nombre:"Luis", rol: "Desarrollador"},
    {nombre:"Ana", rol: "Diseñador"},
    {nombre:"Lucas", rol: "backend"},
    {nombre:"Gloria", rol: "Desarrollador"},
    {nombre:"Hugo", rol: "Diseñador"},
    {nombre:"Kelly", rol: "Desarrollador"},

]

let desarrolladores=equipo.filter(miembro=>miembro.rol=="Desarrollador");
console.log(desarrolladores);*/

//Otro ejemplo. Filtrar los números menores de 5
/*let numero=[1,5,89,2,4,96,14];

const Filtrado=numero.filter(x=>x<5);
console.log(Filtrado,numero);*/
/*
const mascota=[
    {nombre:"memo",edad:10,tipo:"gato"},
    {nombre:"luna",edad:1,tipo:"perro"},
    {nombre:"polo",edad:10,tipo:"perro"},
];
//Listar los perros
const perros=mascota.filter(x=>x.tipo=='perro');
console.log(perros);
*/
/*MAP. Genera otro arreglo que va a ser igual longitud
que el arreglo inicial pero todos los elementos cambiados  */

/*Crear un arreglo de números y generar uno nuyevo
multiplicando cada elemento por 2
*/
/*
const numero=[1,2,3,4];
const mul=numero.map(x=>x*2);
console.log(mul);
*/
//Formar parejas [1,1],[2,2],[3,3],[4,4]


//Formar parejas con el doble de cada número [1,1],[2,4],,[3,9]

//Obterner el promedio de edades de las mascotas
const mascota=[
    {nombre:"memo",edad:10,tipo:"gato"},
    {nombre:"luna",edad:1,tipo:"perro"},
    {nombre:"polo",edad:8,tipo:"perro"},
];
//función suma
const suma=(sm)=>{
  let acumulado=0;
  for(let i=0;i<sm.length;i++)
  {
    acumulado+=sm[i];
  }
  return acumulado;
}
/*
//Crear un array solo para las edades
const edades=mascota.map(x=>x.edad);
//console.log(edades);
const resultado=suma(edades);
//console.log(resultado);
console.log(resultado/edades.length);*/


/* Reduce. reduce un arreglo de valores a un solo valor.
Recibe dos argumentos el primero es un valor que esta siendo
acumulado y el segundo es el emento que se esta iterando. 
Devuelve un nuevo elemento que se esta acumulando */

//Ejemplo: sumnar un vector
/*const reducir=[1,2].reduce((acc,el)=>acc+el,0);
console.log(reducir);*/


/*const numero=[1,2,3,4];
const suma1=numero.reduce(function(acc,el){
    return acc+el;
},0);

console.log(suma1);
*/

//Obterner el promedio de edades de las mascotas, aplicando reduce ok

/*Muestre las veces que aparece un elemento en el arreglo */

//let mascotas=['perro','gato','pollo','perro','perro','gato','conejo','pollo'];

//Transformar este arrego a uno solo
const anidado=[1,[2,3],4,[5]];
const plano=anidado.reduce((acc,el)=>acc.concat(el),[]);
console.log(plano);



  
// Liste el número de frutas que hay en el vector
let frutas = ["plátano", "plátano", 
"fresa", "naranja", "uva", "uva", 
"fresa", "plátano"];
  

//Contar los elementos verdaderos
const booleans =[true,true,false,true,false,true];

const contador=(arr)=>{
    return arr.reduce((acc,el)=>{
        return acc+(el ? 1 : 0)
    },0)
}

console.log(contador(booleans));

