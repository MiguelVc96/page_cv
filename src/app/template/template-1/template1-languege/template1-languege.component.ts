import { Component, Input, OnInit } from '@angular/core';
import { ILanguagesDto } from 'src/app/core/modeles/profile/ILanguagesDto';



@Component({
  selector: 'app-template1-languege',
  templateUrl: './template1-languege.component.html',
  styleUrls: ['./template1-languege.component.scss']
})
export class Template1LanguegeComponent implements OnInit {

  @Input() languages?: ILanguagesDto[];

  constructor() { }

  ngOnInit(): void {
  }

}
