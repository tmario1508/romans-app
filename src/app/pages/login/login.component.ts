import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    Email: new FormControl(''),
    Contraseña: new FormControl('')
  })

  constructor(private router:ActivatedRoute,private routernav: Router, private _AuthController:AuthService) { }

  ngOnInit(): void {
    localStorage.removeItem('userInf');
    localStorage.removeItem('jwt');
  }

  onLogin(){
    try{
      let {Email,Contraseña} = this.LoginForm.value;
      if(Email=="" || Contraseña==""){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No puede contener campos vacios para el login',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        try{
        this._AuthController.UserLogin(Email,Contraseña);
        this.routernav.navigate(["/perfil"]);
      }catch{
        //EMPLEADO
        this._AuthController.UserLoginEmpleado(Email,Contraseña);
        this.routernav.navigate(["/perfil"]);
      }
      }
    }catch{

    }

  }

}
