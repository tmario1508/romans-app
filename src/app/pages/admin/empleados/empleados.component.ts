import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listEmpleados;

  constructor(private _EmpleadosController:EmpleadosService) { }

  ngOnInit(): void {
    this.onGetEmpleados();
  }

  onGetEmpleados(){
    this._EmpleadosController.GetAllEmpl().subscribe(
      response => this.listEmpleados = response,
    );
  }

  onDeleteEmpleado(id){
    this.onGetEmpleados();
    this._EmpleadosController.DeleteEmpeladosById(id);
    this.onGetEmpleados();
  }

}
