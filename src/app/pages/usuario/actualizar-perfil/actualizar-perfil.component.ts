import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit {

  infoUsuario;
  idUsuario;

  UpUsuarioForm = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Email: new FormControl(''),
    Direccion: new FormControl(''),
    Tarjeta: new FormControl('')
  })

  constructor(private router:ActivatedRoute,private _UsuarioController:UsuarioService,private routernav: Router) {
      this.router.params.subscribe((param:any)=>{
      this.idUsuario = param['codigo'];
      this.getInfoUser(this.idUsuario);
    });
   }

  ngOnInit(): void {
  }

  getInfoUser(codigo){
      this._UsuarioController.GetUsuarioById(codigo).subscribe((data:any) =>{
      this.infoUsuario = data.result;
      console.log(this.infoUsuario);
      //LLENAR FORMULARIO
        this.UpUsuarioForm.setValue({
          Nombre: data.result.nombre,
          Apellido: data.result.apellido,
          Email: data.result.email,
          Direccion: data.result.direccion,
          Tarjeta: data.result.tarjeta
        });
    });
  }

  onUpdateUsuario(){
    try{
      let {Direccion,Tarjeta} = this.UpUsuarioForm.value;
      if(Direccion=="" || Tarjeta==""){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No puede contener campos vacios para el registro',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this._UsuarioController.UpdateUsuario(this.idUsuario,Direccion,Tarjeta);
        this.routernav.navigate(["/perfil"]);
      }
    }catch{

    }
  }

}
