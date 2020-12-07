import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const URL_BASE:string = environment.API.EndPoint.Node+"pedidos";

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  constructor(private http: HttpClient) { }

  CodigoRandom() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

   /*GENERAR PEDIDO REGISTRO EN MONGODB*/
   generarPedido(user,productos,total,comentarios){
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    var fecha = day+"-"+(monthIndex+1)+"-"+year;
    let hora = hours+':'+minutes;

    let bodyRequest ={
      codigo:this.CodigoRandom(),
      user:user,
      productos:productos,
      total:total,
      fecha:fecha,
      hora:hora,
      estatus:'EN ESPERA',
      comentarios:comentarios
    }
    try {
      //INSERT MONGO DB TABLA PEDIDOS
      this.http.post(`${URL_BASE}/add`,
  bodyRequest,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pedido realizado con el codigo: '+bodyRequest.codigo,
      text:'revise la seccion de pedidos para mas información',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo realizar el pedido',
      text:'Intente de nuevo',
      showConfirmButton: false,
      timer: 1500
    })
  });
    } catch {
    }
    return true;
  }

  /*CONSULTA DE PEDIDOS - ADMIN*/

  /*CONSULTA DE PEDIDOS POR USUARIO*/

  /*CONSULTA DE PEDIDOS DISPONIBLES - REPARTIDORES*/

  /*ACTUALIZAR PEDIDOS - REPARTIDORES*/

}
