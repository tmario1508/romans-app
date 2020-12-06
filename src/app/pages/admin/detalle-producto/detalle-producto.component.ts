import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto.service';
import {CarritoService} from '../../../services/carrito.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  ProductoInfo;
  constructor(private router:ActivatedRoute,public _ProductoController:ProductoService, private _carritoService:CarritoService) {
    this.router.params.subscribe((param:any)=>{
      let id = param['platillo'];
      this.getDetalleProducto(id);
  });
  }

  ngOnInit(): void {
    this.router.params.subscribe((param:any)=>{
      let id = param['platillo'];
      this.getDetalleProducto(id);
  });
  }

  getDetalleProducto(productoId){
    this._ProductoController.GetProductoById(productoId).subscribe((data:any) =>{
      this.ProductoInfo = data;
      console.log(this.ProductoInfo);
  });
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
    if(p){
      Swal.fire({
        title: '',
        icon:'success',
        text: 'Se ha agregado 1 orden de: '+producto.nombre+' a su pedido',
        confirmButtonText: `Aceptar`,
      });
      this._carritoService.AgregarCarrito(p);
    }else{
      
    }

  }

}
