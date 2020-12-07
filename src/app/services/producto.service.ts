import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  URL_BASE:string = environment.API.EndPoint.Azure;
  InfoProductoId;
  ultimosproductos:any ={};
  ultimosproductosf:any ={};
  /*INSERT PRODUCTO*/
  public InsertProduct = (nombre,descripcion,precio,imagen,categoria) =>{
    let bodyRequest ={
      Nombre:nombre,
      Descripcion:descripcion,
      Precio:precio,
      Imagen:imagen,
      IdCategoria:parseInt(categoria)
    }
    console.log('body:'+JSON.stringify(bodyRequest));

    this.http.post(this.URL_BASE+"/insert",
    bodyRequest,{headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(res =>{
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto insertado correctamente en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    },err =>{
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se pudo insertar el producto en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    });

  }

  /*UPDATE PRODUCTO*/
  public UpdateProduct = (id,nombre,descripcion,precio,imagen,categoria) =>{
    let bodyRequest ={
      Nombre:nombre,
      Descripcion:descripcion,
      Precio:precio,
      Imagen:imagen,
      IdCategoria:parseInt(categoria)
    }
    console.log('body:'+JSON.stringify(bodyRequest));

    this.http.put(this.URL_BASE+"/update/"+id,
    bodyRequest,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(res =>{
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto:'+id+' actualizado correctamente en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    },err =>{
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se pudo actualizar el producto en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  /*DELETE PRODUCTO*/
  public DeleteProductoById = (id)=>{
    try {
      this.http.delete(this.URL_BASE+'/delete/'+id).subscribe(
        res =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto:'+id+' eliminado correctamente en la base de datos',
            showConfirmButton: false,
            timer: 1500
          })
      },err =>{
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'ERROR: No se pudo actualizar el producto en la base de datos',
          showConfirmButton: false,
          timer: 1500
        })
      });
    } catch (error) {

    }
  }

  /*GET PRODUCTOS*/
  public GetAllProductos = ()=>{
    try {
      return this.http.get(this.URL_BASE);
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se pudo encontrar la informacion del servidor',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  /*GET INDEX PRODUCTOS*/
  public GetIndexProductos = (cantidad:number)=>{
    try {
     return this.http.get(this.URL_BASE).subscribe(data =>{
        this.ultimosproductos = Object.values(data);
        Array.prototype.lastIndexOf = function(n){
          return this.slice(-n)
        };
        this.ultimosproductosf = this.ultimosproductos.lastIndexOf(cantidad).reverse();
        console.log(this.ultimosproductosf);
    });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title:  'ERROR: No se pudieron cargar los productos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  /*GET PRODUCTOS POR CATEGORIA*/
  public GetProductoByCategoria = (categoria)=>{
    try {
      return this.http.get(this.URL_BASE+'/category/'+categoria);
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title:   'ERROR: No se pudieron cargar los productos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  /*GET PRODUCTO POR ID*/
  public GetProductoById = (id)=>{
    try {
        return this.http.get(this.URL_BASE+'/search/'+id);
  }catch{
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title:  'ERROR: No se pudo cargar la informacion del producto',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

}
