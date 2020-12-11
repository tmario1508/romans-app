import { Component } from '@angular/core';
import { TopBarMenuService } from '../app/services/top-bar-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Romanis-FrontEnd';
  roles = 'ADMIN, EMPLEADO, USUARIO';
  menuItems:any[] = [];
  rolJson;

  constructor(private MenuService:TopBarMenuService){
    this.getData();
  }

getData(){
    this.MenuService.getItemsTopBar().subscribe((data:any)=>{
      this.menuItems = data;
      console.log("Numero de items: " +this.menuItems.length);
    });
    let userStorage = JSON.parse(localStorage.getItem('userInf'));
    if(userStorage){
      this.rolJson = userStorage.rol;
      console.log("Rol desde el componente padre: " + this.rolJson);
    }


  }

  childTopBarMenu(event){
    console.log(event);
  }

}


