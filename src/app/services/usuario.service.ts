import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

const URL_BASE:string = environment.API.EndPoint.Node+"usuarios";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  /*Traer todos los usuarios*/
  public GetAllUsers = ()=>{
    try {
      return this.http.get(`${URL_BASE}/ConsultAll/1/10`);
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

  //REgistro de usuario
public AddUsuario = (nombre,apellido,email,contraseña,direccion,tarjeta) =>{
  let bodyRequest ={
    nombre:nombre,
    apellido:apellido,
    email:email,
    password:contraseña,
    direccion: direccion,
    tarjeta: tarjeta,
    saldo:900
  }
  console.log('body:'+JSON.stringify(bodyRequest));

  this.http.post(`${URL_BASE}/add`,
  bodyRequest,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    localStorage.setItem('userInf', JSON.stringify(res));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido!, perfil creado con éxito',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo crear perfil, contacta al administrador',
      showConfirmButton: false,
      timer: 1500
    })
  });

  }

  /*OBTENER USUARIO ACTUAL*/
  getUserInfo(){
    let userStorage = JSON.parse(localStorage.getItem('userInf'));
    let userLocal;
		if(userStorage != "undefined"){
			userLocal = userStorage;
		}else{
			userLocal= null;
    }
    return userLocal;
  }


  /*GET Usuario POR ID*/
  public GetUsuarioById = (id)=>{
    try {
        return this.http.get(`${URL_BASE}/consultById/${id}`);
  }catch{
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title:  'ERROR: No se pudo cargar la informacion del empelado',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


/*UPDATE Usuario*/
public UpdateUsuario = (id,direccion,tarjeta) =>{
  let bodyRequest ={
    direccion:direccion,
    tarjeta:tarjeta
  }
  console.log('body:'+JSON.stringify(bodyRequest));

  this.http.put(`${URL_BASE}/modify/${id}`,
  bodyRequest,{
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Usuario:'+id+' actualizado correctamente en la base de datos',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo actualizar el usuario en la base de datos',
      showConfirmButton: false,
      timer: 1500
    })
  });
}

  /*DELETE Empleado*/
  public DeleteUsuarioById = (id)=>{
    try {
      this.http.delete(`${URL_BASE}/delete/${id}`).subscribe(
        res =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Empleado:'+id+' eliminado correctamente en la base de datos',
            showConfirmButton: false,
            timer: 1500
          })
      },err =>{
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'ERROR: No se pudo actualizar el empleado en la base de datos',
          showConfirmButton: false,
          timer: 1500
        })
      });
    } catch (error) {

    }
  }

}
