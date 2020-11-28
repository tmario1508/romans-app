import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCarrito;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#D6DDDF';
 }

}
