import { Component, Input, OnInit } from '@angular/core';
import { ICompetenciesDto } from 'src/app/core/modeles/profile/ICompetenciesDto';


@Component({
  selector: 'app-template1-competencie',
  templateUrl: './template1-competencie.component.html',
  styleUrls: ['./template1-competencie.component.scss']
})
export class Template1CompetencieComponent implements OnInit {
  @Input() competencies?: ICompetenciesDto[];
  constructor() { }

  ngOnInit(): void {
  }

}
