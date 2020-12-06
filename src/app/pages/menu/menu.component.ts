import { Component, Input, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import {CarritoService} from '../../services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  MenuList;
  constructor(private router:ActivatedRoute,private _ProductoController:ProductoService, private _carritoService:CarritoService) {
    //Pretederminado Categoria 1
    this.getMenu(1);
    this.router.params.subscribe((param:any)=>{
      let categoria = param['categoria'];
      this.getMenu(categoria);
  });
  }

  ngOnInit(): void {
    this.router.params.subscribe((param:any)=>{
      let categoria = param['categoria'];
      this.getMenu(categoria);
  });
  }

  getMenu(categoria){
    this._ProductoController.GetProductoByCategoria(categoria).subscribe((data:any) =>{
      this.MenuList = data;
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
