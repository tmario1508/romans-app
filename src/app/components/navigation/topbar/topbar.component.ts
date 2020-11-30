import { Component, EventEmitter, Input,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclick_Menu(categoria:number){
    this.onClickMenu.emit({
      categoria,
      name:categoria
    });
  }

}
