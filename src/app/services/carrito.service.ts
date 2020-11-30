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
      let objIndex = listCart.findIndex((obj => obj.id == producto.idProducto));
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

  /*ELIMINAR PRODUCTO DEL CARRITO*/

  /*GENERAR PEDIDO*/

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

}
