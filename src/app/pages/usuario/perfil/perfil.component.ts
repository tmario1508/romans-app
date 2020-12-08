import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  //idUser = JSON.parse(localStorage.getItem('_id'));
  infoUser;
  constructor(private _UsuarioController:UsuarioService) {
    this.cargaInfo();
  }

  ngOnInit(): void {
    this.cargaInfo();
  }

  cargaInfo(){
    this.infoUser= JSON.parse(localStorage.getItem('userInf'));
  }

  onDeleteUsuario(id){
    this._UsuarioController.DeleteUsuarioById(id);
  }

}
