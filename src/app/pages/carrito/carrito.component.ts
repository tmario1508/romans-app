import { Component, ElementRef, OnInit } from '@angular/core';
import {CarritoService} from '../../services/carrito.service';
import {UsuarioService} from '../../services/usuario.service';
import {PedidoService} from '../../services/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCarrito;
  total;
  comentarios;

  constructor(private elementRef: ElementRef, private _carritoService:CarritoService,
    private _pedidoService:PedidoService, private _usuarioService:UsuarioService) {
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
    let usuario = this._usuarioService.getUserInfo();
    console.log(usuario);
  }

  ngOnInit(): void {
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
    console.log(this.listaCarrito);
    let usuario = this._usuarioService.getUserInfo();
    console.log(usuario);
  }

  onEliminarCarrito(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Eliminarás todos los productos de tu pedido y tendrás que volver a agregarlos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quitar productos',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '',
          text: "Orden cancelada con exito",
          icon: 'success',
          confirmButtonText: 'Aceptar',
        })
        this._carritoService.BorrarCarrito();
        this.listaCarrito = this._carritoService.getCarrito();
        this.total = this._carritoService.CalcularTotal();
      }else{
        this.listaCarrito = this._carritoService.getCarrito();
        this.total = this._carritoService.CalcularTotal();
      }
    })
  }

  EliminarItem(producto){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Eliminaras 1 orden de: "+producto.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '',
          text: "Eliminaste 1 orden de: "+producto.nombre,
          icon: 'success',
          confirmButtonText: 'Aceptar',
        })
        this.listaCarrito = this._carritoService.getCarrito();
        this._carritoService.RestarItemCarrito(producto);
        this.listaCarrito = this._carritoService.getCarrito();
        this.total = this._carritoService.CalcularTotal();
      }else{
        this.listaCarrito = this._carritoService.getCarrito();
        this.total = this._carritoService.CalcularTotal();
      }
    })
  }

  onPedido(){
    let orden = this._carritoService.getCarrito();
    let user = this._usuarioService.getUserInfo();

    //Si el usuario no esta logeado
    if(!user|| user == null){
      Swal.fire(
        'Lo sentimos',
        'Necesitas iniciar sesión para poder realizar tu pedido',
        'info'
      ).then((result) => {

      })
    }

    //Si no contiene productos en su pedido
    if(!orden || orden == null){
      Swal.fire(
        'No has incluido productos a tu pedido',
        'Incluye e intenta denuevo',
        'info'
      ).then((result) => {

      })
    }

  //Si el usuario esta loegado y tiene productos en su pedido
    if(user && orden){
      Swal.mixin({
        confirmButtonText: 'Siguiente &rarr;',
        showCancelButton: true,
        allowOutsideClick:false,
        progressSteps: ['1','2','3','4','5','6'],
        cancelButtonText: 'Cancelar'
      }).queue([
        {
          title: 'Total de la orden',
          text: '$'+this.total+' MXN',
          inputValidator: (result) => {
            console.log(result);
            this.comentarios = result;
            if(result || result == ""){

            }
            return !result && ''
          }
        },
        {
          input: 'textarea',
          title:'Comentarios:',
          inputPlaceholder: 'Escribenos... (especificaciones, modelos, dudas, instrucciones, etc)',
          inputValidator: (result) => {
            console.log(result);
            this.comentarios = result;
            if(result || result == ""){

            }
            return !result && ''
          }
        },
        {
          title: 'Domicilio de entrega:',
          text: user.direccion,
          inputValidator: (result) => {
            console.log(result);
            this.comentarios = result;
            if(result || result == ""){

            }
            return !result && ''
          }
        },
        {
          title: 'Cargo a la tarjeta:',
          text: user.tarjeta,
          inputValidator: (result) => {
            console.log(result);
            this.comentarios = result;
            if(result || result == ""){

            }
            return !result && ''
          }
        },
        {
          title:'Terminos y condiciones',
          input: 'checkbox',
          inputPlaceholder:'Acepto los terminos y condiciones',
          inputValidator: (result) => {

            if (result) {
              const answers = JSON.stringify(result)
              try{
                this._pedidoService.generarPedido(user,orden,this.total,this.comentarios);
                this._carritoService.BorrarCarrito();
                this.listaCarrito = this._carritoService.getCarrito();
                this.total = this._carritoService.CalcularTotal();
              }catch{

              }
            }else{
              return !result && 'Necesitas aceptar los terminos para realizar el pedido'
            }
          }
        },
      ]).then((result) => {

      })
    }
  }
}
