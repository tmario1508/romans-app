import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  URL_BASE:string = "https://localhost:44308/api/producto";
  InfoProductoId;
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
    bodyRequest,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(res =>{
      console.log(res);
      alert('Producto insertado correctamente en la base de datos');
    },err =>{
      console.log(err);
      alert('ERROR: No se pudo insertar el producto en la base de datos');
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
      alert('Producto:'+id+' actualizado correctamente en la base de datos');
    },err =>{
      console.log(err);
      alert('ERROR: No se pudo actualizar el producto en la base de datos');
    });
  }

  /*DELETE PRODUCTO*/
  public DeleteProductoById = (id)=>{
    try {
      this.http.delete(this.URL_BASE+'/delete/'+id).subscribe(
        res =>{
        alert('Producto:'+id+' eliminado correctamente en la base de datos');
      },err =>{
        alert('ERROR: No se pudo eliminar el producto en la base de datos');
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
    }
  }

  /*GET PRODUCTOS POR CATEGORIA*/
  public GetProductoByCategoria = (categoria)=>{
    try {
      return this.http.get(this.URL_BASE+'/category/'+categoria);
    } catch (error) {
      console.log(error);
    }
  }

  /*GET PRODUCTO POR ID*/
  public GetProductoById = (id)=>{
    try {
        return this.http.get(this.URL_BASE+'/search/'+id);
  }catch{

  }
}

}
