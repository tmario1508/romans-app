import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

const URL_BASE:string = environment.API.EndPoint.Node+"auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  /*REGISTRO DE USUARIO*/

  /*LOGIN*/

  //Insert Empleado
  public UserLogin = (email,contraseña) =>{
  let bodyRequest ={
    email:email,
    password:contraseña
  }
  console.log('body:'+JSON.stringify(bodyRequest));

  this.http.post(`${URL_BASE}/login`,
  bodyRequest,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    const newToken = (<any>res).token;
    const userInf = (<any>res).info;
    localStorage.setItem("jwt", newToken);
    localStorage.setItem("userInf", JSON.stringify(userInf));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo iniciar sesión, intentelo nuevamente',
      showConfirmButton: false,
      timer: 1500
    })
  });

  }

/*LOGIN EMPLEADO*/
  public UserLoginEmpleado = (email,contraseña) =>{
  let bodyRequest ={
    email:email,
    password:contraseña
  }
  console.log('body:'+JSON.stringify(bodyRequest));

  this.http.post(`${URL_BASE}/login/empleado`,
  bodyRequest,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    const newToken = (<any>res).token;
    const userInf = (<any>res).info;
    localStorage.setItem("jwt", newToken);
    localStorage.setItem("userInf", JSON.stringify(userInf));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo iniciar sesión, intentelo nuevamente',
      showConfirmButton: false,
      timer: 1500
    })
  });

  }

  /*LOG OUT*/

}
