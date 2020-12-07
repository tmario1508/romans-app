import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  infoUser;
  constructor(private _UsuarioController:UsuarioService) { }

  ngOnInit(): void {
    this.infoUser= JSON.parse(localStorage.getItem('userInf'));
  }

  cargaInfo(){
    //location.reload();
  }

  onDeleteUsuario(id){
    this._UsuarioController.DeleteUsuarioById(id);
  }

}
