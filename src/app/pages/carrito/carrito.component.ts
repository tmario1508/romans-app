import { Component, ElementRef, OnInit } from '@angular/core';
import {CarritoService} from '../../services/carrito.service';

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
    alert('Se ha eliminado el pedido');
    this._carritoService.BorrarCarrito();
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
  }

  EliminarItem(producto){
    alert('Se ha eliminado 1 orden de: '+producto.nombre);
    this.listaCarrito = this._carritoService.getCarrito();
    this._carritoService.RestarItemCarrito(producto);
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
  }

}
