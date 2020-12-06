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
    this.onGetProductos();
  }

  ngOnInit(): void {
    this.onGetProductos();
  }

  onDeleteProducto(id){
    this.onGetProductos();
    this._ProductoController.DeleteProductoById(id);
    this.onGetProductos();
  }

  onGetProductos(){
    this._ProductoController.GetAllProductos().subscribe(
      response => this.listProductos = response,
    );
  }
}
