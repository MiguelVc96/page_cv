import { Component, OnInit } from '@angular/core';
import { IProfileDto } from '../core/modeles/profile/IProfileDto';
import { TemplateService } from './services/template.service';

@Component({
  selector: 'app-template-app',
  templateUrl: './template-app.component.html',
  styleUrls: ['./template-app.component.scss']
})
export class TemplateAppComponent implements OnInit {


  profile?: IProfileDto;

  readonly guid: string = "a625be6d-b4d4-4c03-a098-0348f5c19859";

  //Flag
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private services: TemplateService) { }

  ngOnInit(): void {
    this.loadingInfo();
  }



  loadingInfo(){
    this.loadingComponent();
    this.services.getInfoProfile(this.guid).subscribe(
      response =>{
        this.loadingComponent();
        if(!response){
        }

        this.loadingErrorScreen(false);

        this.profile = response;
      },
      error =>{
        this.loadingComponent();
        this.loadingErrorScreen(true);
      }
    )
  }

  loadingComponent(){
    this.isLoading = !this.isLoading;
  }

  loadingErrorScreen(status: boolean){
    this.isError = status
  }

  refreshProfile(e: any){
    if(e){
      this.loadingErrorScreen(false);
      this.loadingInfo();
    }
  }

}
