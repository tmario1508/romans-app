import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {

  RempleadoForm = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Email: new FormControl(''),
    Contraseña: new FormControl(''),
    Salario: new FormControl(''),
    Turno: new FormControl(''),
    Rol: new FormControl(''),
  })

  constructor(private _EmpleadoController : EmpleadosService) { }

  ngOnInit(): void {
  }

  onRegistroEmpleado(){
    try{
    let {Nombre,Apellido,Email,Contraseña,Salario,Turno,Rol} = this.RempleadoForm.value;
    if(Nombre=="" || Apellido =="" || Email=="" || Contraseña=="" || Salario=="" || Turno=="" || Rol==""){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No puede contener campos vacios para el registro',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this._EmpleadoController.AddEmpelado(Nombre,Apellido,Email,Contraseña,Salario,Turno,Rol);
      this.Limpiar();
    }
  }catch{

  }
  }

  Limpiar(){
    this.RempleadoForm.setValue({
      Nombre: '',
      Apellido:'',
      Email:'',
      Contraseña:'',
      Salario:'',
      Rol:'',
      Turno:''
    });
  }


}
