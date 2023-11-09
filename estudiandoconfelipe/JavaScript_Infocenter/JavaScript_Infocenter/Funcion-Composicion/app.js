/*A un número le sumamos 3 y el resultado lo multiplicamos por 10
    1. Función para la suma
    2. Función que multiplique la suma por 10
    3. Función que junte las dos funciones

*/

/*
const suma=num=>num+3;
const mul=suma=>suma*10;
const total=function(numero){
    return mul(suma(numero));

}

const t=total(3);
console.log(t);
*/

//De otra forma
const sumNumero=function(a,b){
    return a+b
}
const multi=function(c){
    return c*10;
}
const x=4;
const resul=multi(sumNumero(3,x));
console.log(resul);

/*
GIT

GitHub



*/