import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  infoEmpleado;
  idEmpleado;

  UpEmpleadoForm = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Email: new FormControl(''),
    Salario: new FormControl(''),
    Rol: new FormControl(''),
    Turno: new FormControl(''),
  })

  constructor(private router:ActivatedRoute,private _EmpleadoController:EmpleadosService) {
    this.router.params.subscribe((param:any)=>{
      this.idEmpleado = param['codigo'];
      this.getInfoEmpleado(this.idEmpleado);
    });
   }

  ngOnInit(): void {
    this.router.params.subscribe((param:any)=>{
      this.idEmpleado = param['codigo'];
      this.getInfoEmpleado(this.idEmpleado);
  });
  }

  getInfoEmpleado(codigo){
    this._EmpleadoController.GetEmpleadoById(codigo).subscribe((data:any) =>{
      this.infoEmpleado = data.result;
      //LLENAR FORMULARIO
        this.UpEmpleadoForm.setValue({
          Nombre: data.result.nombre,
          Apellido: data.result.apellido,
          Email: data.result.email,
          Salario: data.result.salario,
          Rol: data.result.rol,
          Turno: data.result.turno
        });
    });
  }

  onUpdateEmpleado(){
    try{
      let {Salario,Rol,Turno} = this.UpEmpleadoForm.value;
      if(Salario=="" || Rol=="" || Turno==""){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No puede contener campos vacios para el registro',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this._EmpleadoController.UpdateEmpleado(this.idEmpleado,Salario,Rol,Turno);
      }
    }catch{

    }
  }

}
