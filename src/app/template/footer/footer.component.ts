import { environment } from './../../../environments/environment';
import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IProfileDto } from 'src/app/core/modeles/profile/IProfileDto';
import { PdfService } from '../services/pdf.service';
import { TemplateService } from '../services/template.service';
import { HeaderComponent } from '../header/header.component'
import { MenuService } from '../services/menu.service';
import { IMenu } from 'src/app/core/modeles/Menu/IMenu';
import { ViewportScroller } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() profile?: IProfileDto;

  menu: IMenu[] = [];

  developerName: string = environment.developerName;
  version: string = environment.version;

  constructor(private services: TemplateService,
              private pdfService: PdfService,
              private menuService: MenuService,
              private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.loadOptionMenu();
  }


  //Metodo para relizar un scroll al apartado de acuerdo al id
  goDown(target: string) {
    this.scroller.scrollToAnchor(target);
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

  //metodo para el boton de descarga
  onCLikDownloadFile(){
    //this.pdfService.downloadFile();
    this.pdfService.downloadFile();
  }


  getCurrentYear(): string{
    return moment().format('yyyy');
  }



}
