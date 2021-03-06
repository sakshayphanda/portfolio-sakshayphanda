import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  @Output('selectedAction') selectedAction = new EventEmitter();
  @Output('toggleSideMenu') toggleSideMenu = new EventEmitter();

  constructor() { }
}
