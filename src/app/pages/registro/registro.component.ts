import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
//import bcrypt from 'bcryptjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  RusuarioForm = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Email: new FormControl(''),
    Contraseña: new FormControl(''),
    ConfContraseña: new FormControl(''),
    Direccion: new FormControl(''),
    Tarjeta: new FormControl('')
  })

  constructor(private _UsuarioController : UsuarioService,private routernav: Router) { }

  ngOnInit(): void {
  }

  onRegistroUsuario(){
    try{
    let {Nombre,Apellido,Email,Contraseña,Direccion,Tarjeta,ConfContraseña} = this.RusuarioForm.value;
    if(Nombre=="" || Apellido =="" || Email=="" || Contraseña=="" || Direccion=="" || Tarjeta=="" || ConfContraseña==""){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No puede contener campos vacios para el registro',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      if(Contraseña != ConfContraseña ){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'La contrasena no es la misma que la confirmación',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this._UsuarioController.AddUsuario(Nombre,Apellido,Email,Contraseña,Direccion,Tarjeta);
        this.Limpiar();
        this.routernav.navigate(["/login"]);
        //this.router.navigate(["/"]);
      }
    }
  }catch{

  }
  }

   /*EncriptarPassword(Contraseña){

    var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(Contraseña, salt);

    return password

  }*/

  Limpiar(){
    this.RusuarioForm.setValue({
      Nombre: '',
      Apellido:'',
      Email:'',
      Contraseña:'',
      ConfContraseña: '',
      Direccion:'',
      Tarjeta:''
    });
  }

}
