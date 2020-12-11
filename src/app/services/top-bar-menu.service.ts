import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endPoint: string = 'assets/json/topbarmenu.json';

@Injectable({
  providedIn: 'root'
})
export class TopBarMenuService {

  constructor(private http: HttpClient) { }

  getItemsTopBar() {
    return this.http.get(endPoint);
  }
}
