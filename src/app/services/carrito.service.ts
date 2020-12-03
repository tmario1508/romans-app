import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  carritoLocal;

  /*AGREGAR PRODUCTO AL CARRITO*/
  AgregarCarrito(producto){
    //Obtenemos el valor actual
    let listCart = this.getCarrito();
    //Si no es el primer item del carrito
    if(listCart)
    {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.codigo == producto.codigo));
      //Si ya cargamos uno aumentamos su cantidad
      if(objIndex != -1)
      {

        if(producto){
            let p;
            let suma;
            let num:number = 1;
            p = parseInt(listCart[objIndex].cantidad);
            suma = p + num;
            listCart[objIndex].cantidad = suma;
            listCart[objIndex].total = (listCart[objIndex].cantidad) * (listCart[objIndex].precio);
        }
        else{

        }
      }
      //Si es el primer producto lo agregamos
      else {
        listCart.push(producto);
      }
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      listCart.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(listCart));
  }

  /*ELIMINAR CANTIDAD PRODUCTO DEL CARRITO*/
  RestarItemCarrito(producto){
    //Obtenemos el valor actual
    let listCart = this.getCarrito();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.codigo == producto.codigo));
    if(objIndex != -1)
    {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].cantidad -= 1;
      listCart[objIndex].total = (listCart[objIndex].cantidad) * (producto.precio);

      //Eliminamos el objeto si llego a numero cero
      if(listCart[objIndex].cantidad == 0){
        listCart.splice(objIndex,1);
      }
    }
    //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    //this.listaCarrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(listCart));
  }

  /*GENERAR PEDIDO REGISTRO EN MONGODB*/

  /*OBTENER CARRITO ACTUAL*/
  getCarrito(){
		let carritoStorage = JSON.parse(localStorage.getItem('carrito'));
		if(carritoStorage != "undefined"){
			this.carritoLocal = carritoStorage;
		}else{
			this.carritoLocal = null;
    }
    return this.carritoLocal;
  }

  /*ELIMINAR CARRITO*/
  BorrarCarrito(){
    localStorage.setItem('carrito', '');
    localStorage.removeItem('carrito');
  }

  /*OBTENER EL TOTAL*/
  CalcularTotal(){
    try {
  //Obtenemos el valor actual
  let listCart = this.getCarrito();
  let total = 0;

  for (let index = 0; index < listCart.length; index++) {
  let element = Number(listCart[index].precio * listCart[index].cantidad);
  //SI TIENE DESCUENTO
    total = total + element;
  }
  return total;
    } catch (error) {

    }

  }

}
