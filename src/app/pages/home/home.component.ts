import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MenuList;
  ultimosproductos:any ={};

  constructor(public _ProductoController:ProductoService, private _carritoService:CarritoService) {
    this.getIndexMenu(6);
  }

  ngOnInit(): void {
    this.getIndexMenu(6);
  }

  getIndexMenu(cantidad){
    this._ProductoController.GetIndexProductos(cantidad);
  }

  onAgregarCarrito(producto)
  {
    let totalMXN = 0;
    totalMXN = producto.precio * 1;

    let p = {
      codigo:producto.idProducto,
      nombre:producto.nombre,
      descripcion:producto.descripcion,
      precio:producto.precio,
      imagen:producto.imagen,
      categoria:parseInt(producto.idCategoria),
      cantidad: 1,
      total:totalMXN,
    };
    Swal.fire({
      title: '',
      icon:'success',
      text: 'Se ha agregado 1 orden de: '+producto.nombre+' a su pedido',
      confirmButtonText: `Aceptar`,
    });
    this._carritoService.AgregarCarrito(p);
  }
}
