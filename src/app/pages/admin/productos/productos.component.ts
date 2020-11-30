import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listProductos;
  constructor(private _ProductoController:ProductoService) {
    this._ProductoController.GetAllProductos().subscribe(
      response => this.listProductos = response,
    );
  }

  ngOnInit(): void {
    this._ProductoController.GetAllProductos().subscribe(
      response => this.listProductos = response,
    );
  }

  onDeleteProducto(id){
    this._ProductoController.DeleteProductoById(id);
  }

}
