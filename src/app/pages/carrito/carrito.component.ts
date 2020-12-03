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
    this._carritoService.BorrarCarrito();
  }

  EliminarItem(producto){
    this.listaCarrito = this._carritoService.getCarrito();
    this._carritoService.RestarItemCarrito(producto);
    this.listaCarrito = this._carritoService.getCarrito();
    this.total = this._carritoService.CalcularTotal();
  }

}
