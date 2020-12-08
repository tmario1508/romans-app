import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  idUser = JSON.parse(localStorage.getItem('_id'));
  constructor(private _UsuarioController:UsuarioService) { }

  ngOnInit(): void {

  }

  cargaInfo(){
    //location.reload();
  }

  onDeleteUsuario(id){
    this._UsuarioController.DeleteUsuarioById(id);
  }

}
