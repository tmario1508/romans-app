import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {ProductoService} from '../../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  RproductoForm = new FormGroup({
    Nombre: new FormControl(''),
    Descripcion: new FormControl(''),
    Precio: new FormControl(''),
    Imagen: new FormControl(''),
    IdCategoria: new FormControl(''),
  })

  constructor(private _ProductoController:ProductoService) { }

  ngOnInit(): void {
  }

  onRegistroProducto(){
    try{
    let {Nombre,Descripcion,Precio,Imagen,IdCategoria} = this.RproductoForm.value;
    if(Nombre=="" || Descripcion =="" || Precio=="" || Imagen=="" || IdCategoria==""){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No puede contener campos vacios para el registro',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this._ProductoController.InsertProduct(Nombre,Descripcion,Precio,Imagen,IdCategoria);
      this.Limpiar();
    }
  }catch{

  }
  }

  Limpiar(){
    this.RproductoForm.setValue({
      Nombre: '',
      Descripcion:'',
      Precio:'',
      Imagen:''
    });
  }

}
