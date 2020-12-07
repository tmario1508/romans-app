import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_BASE:string = "http://localhost:3000/empleados";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }
  URL_BASE:string = "http://localhost:3000/empleados";

  /*Traer todos los empleados*/
  public GetAllEmpl = ()=>{
    try {
      return this.http.get(`${URL_BASE}/consultAll/1/10`);
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

  /*GET EMPLEADO POR ID*/
  public GetEmpleadoById = (id)=>{
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

//Insert Empleado
public AddEmpelado = (nombre,apellido,email,contraseña,salario,turno,rol) =>{
  let bodyRequest ={
    nombre:nombre,
    apellido:apellido,
    email:email,
    password:contraseña,
    salario: salario,
    turno: turno,
    rol: rol
  }
  console.log('body:'+JSON.stringify(bodyRequest));

  this.http.post(`${URL_BASE}/add`,
  bodyRequest,{headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(res =>{
    console.log(res);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Empleado insertado correctamente en la base de datos',
      showConfirmButton: false,
      timer: 1500
    })
  },err =>{
    console.log(err);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'ERROR: No se pudo insertar el empelado en la base de datos',
      showConfirmButton: false,
      timer: 1500
    })
  });

}

  /*DELETE Empleado*/
  public DeleteEmpeladosById = (id)=>{
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


  /*UPDATE Empleado*/
  public UpdateEmpleado = (id,salario,rol,turno) =>{
    let bodyRequest ={
      salario:salario,
      turno:turno,
      rol:rol
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
        title: 'Empleado:'+id+' actualizado correctamente en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    },err =>{
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'ERROR: No se pudo actualizar el empleado en la base de datos',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }


}
