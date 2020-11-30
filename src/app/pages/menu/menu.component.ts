import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  MenuList;
  constructor(private _ProductoController:ProductoService) {
    //Pretederminado Categoria 1
    this.getMenu(1);
  }

  ngOnInit(): void {
  }

  getMenu(categoria){
    this._ProductoController.GetProductoByCategoria(categoria).subscribe((data:any) =>{
      this.MenuList = data;
  });
}

}
