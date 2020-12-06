import { Component, ElementRef, OnInit } from '@angular/core';
import {CarritoService} from '../../services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCarrito;
  total;

  constructor(private elementRef: ElementRef, private _carritoService:CarritoService) {
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
  }

  ngOnInit(): void {
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
    console.log(this.listaCarrito);
  }

  onEliminarCarrito(){
    this._carritoService.BorrarCarrito();
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
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

}
