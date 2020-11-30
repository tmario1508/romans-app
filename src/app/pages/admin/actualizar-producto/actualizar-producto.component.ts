import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductoService} from '../../../services/producto.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  infoProducto;
  idProducto;
  UproductoForm = new FormGroup({
    Nombre: new FormControl(''),
    Descripcion: new FormControl(''),
    Precio: new FormControl(''),
    Imagen: new FormControl(''),
    IdCategoria: new FormControl(''),
  })

  constructor(private router:ActivatedRoute,private _ProductoController:ProductoService) {
  this.router.params.subscribe((param:any)=>{
    this.idProducto = param['codigo'];
    this.getInfoProducto(this.idProducto);
});
}

  ngOnInit(): void {
  }

  getInfoProducto(codigo){
    this._ProductoController.GetProductoById(codigo).subscribe((data:any) =>{
      this.infoProducto = data;
      //LLENAR FORMULARIO
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element);
        this.UproductoForm.setValue({
          Nombre: data[index].nombre,
          Descripcion: data[index].descripcion,
          Precio: data[index].precio,
          Imagen: data[index].imagen,
          IdCategoria: data[index].idCategoria,
        });
      }
    });
  }

  onUpdateProducto(){
    try{
      let {Nombre,Descripcion,Precio,Imagen,IdCategoria} = this.UproductoForm.value;
      if(Nombre=="" || Descripcion =="" || Precio=="" || Imagen=="" || IdCategoria==""){
        alert('No puede contener campos vacios para el registro');
      }else{
        this._ProductoController.UpdateProduct(this.idProducto,Nombre,Descripcion,Precio,Imagen,IdCategoria);
      }
    }catch{

    }
  }

}
