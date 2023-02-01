import { Component, Input, OnInit } from '@angular/core';
import { IWorkedDto } from 'src/app/core/modeles/profile/IWorkedDto';

@Component({
  selector: 'app-template1-worked',
  templateUrl: './template1-worked.component.html',
  styleUrls: ['./template1-worked.component.scss']
})
export class Template1WorkedComponent implements OnInit {

  @Input() worked: IWorkedDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
