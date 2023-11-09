class Nodo
{
    constructor(dato, siguiente){
      this.dato=dato;
      this.siguiente=siguiente;
  
    }
}
class listaEnlazada
  {
        constructor(){
            this.inicio=null;
            this.tamano=0;
        }
        agregar(dato)
        {
            let nuevoNodo=new Nodo(dato,null);
            if(this.inicio==null){
            this.inicio=nuevoNodo;
            
            }else{
            let actual=this.inicio;
            while(actual.siguiente){
                actual=actual.siguiente
            }
            actual.siguiente=nuevoNodo;
            }
            this.tamano++;
        }


    }

    let lista = new listaEnlazada;
    console.log(lista);
    lista.agregar(2);
    lista.agregar(15);
    console.log(lista);

    