import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/modeles/Menu/IMenu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() alias?: string;

  display: boolean = false;

  menu: IMenu[] = [];

  constructor(private scroller: ViewportScroller,
              private menuService: MenuService ) { }

  ngOnInit(): void {
    this.loadOptionMenu();
  }



  //Metodo para relizar un scroll al apartado de acuerdo al id
  goDown(target: string) {
    this.scroller.scrollToAnchor(target);
    this.closeMenu();
  }

  /**Metodo para cargar las opciones de menu */
  loadOptionMenu(){
    this.menu = this.menuService.getOptionMenu();

    //verificamos que tenga datos
    if(!this.menu)
      return null;

    //si no retornamos null
    return this.menu;
  }

  /**Metodo para cerrar el menu */
  closeMenu(){
    this.display = false;
  }


}
