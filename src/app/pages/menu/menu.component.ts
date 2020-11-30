import { Component, Input, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  MenuList;
  constructor(private router:ActivatedRoute,private _ProductoController:ProductoService) {
    //Pretederminado Categoria 1
    this.getMenu(1);
    this.router.params.subscribe((param:any)=>{
      let categoria = param['categoria'];
      this.getMenu(categoria);
  });
  }

  ngOnInit(): void {
    this.router.params.subscribe((param:any)=>{
      let categoria = param['categoria'];
      this.getMenu(categoria);
  });
  }

  getMenu(categoria){
    this._ProductoController.GetProductoByCategoria(categoria).subscribe((data:any) =>{
      this.MenuList = data;
  });
}

}
