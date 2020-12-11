import { Component, EventEmitter, Input,OnInit, Output} from '@angular/core';
import {UsuarioService} from '../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();

  @Input() titleMenu: string = "";
  @Input() subtitleMenu: string = "";
  @Input() menuItems: any[] = [];
  @Input() rolJson;
  rol;
  usuario;
  constructor(private _usuarioService:UsuarioService, private routernav: Router, private _AuthController:AuthService) {
    this.getUserInfo();
   }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onclick_Menu(categoria:number){
    this.onClickMenu.emit({
      categoria,
      name:categoria
    });
  }

  onLogout(){
    this._AuthController.LogOut();
    this.getUserInfo();
    this.routernav.navigate(["/home"]);
  }

  getUserInfo(){
    this.usuario = this._usuarioService.getUserInfo();
    if(this.usuario){
      this.rol = this.rolJson;
    }
  }

}
