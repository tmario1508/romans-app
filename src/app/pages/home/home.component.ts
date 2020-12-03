import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  MenuList;
  ultimosproductos:any ={};

  constructor(public _ProductoController:ProductoService) {
    this.getIndexMenu(6);
  }

  ngOnInit(): void {
    this.getIndexMenu(6);
  }

  getIndexMenu(cantidad){
    this._ProductoController.GetIndexProductos(cantidad);
  }
}
