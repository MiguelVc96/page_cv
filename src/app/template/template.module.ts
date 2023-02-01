import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateAppComponent } from './template-app.component';
import { ButtonModule } from 'primeng/button';
import { Template1Component } from './template-1/template-1.component';
import { TimelineModule } from 'primeng/timeline';
import { Template1WorkedComponent } from './template-1/template1-worked/template1-worked.component';
import { Template1CompetencieComponent } from './template-1/template1-competencie/template1-competencie.component';
import { Template1LanguegeComponent } from './template-1/template1-languege/template1-languege.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { HeaderComponent } from './header/header.component';
import {SidebarModule} from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';
import {CarouselModule} from 'primeng/carousel';




@NgModule({
  declarations: [
    TemplateAppComponent,
    Template1Component,
    Template1WorkedComponent,
    Template1CompetencieComponent,
    Template1LanguegeComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ErrorScreenComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    TemplateRoutingModule,


    // ==== PrimeNg ====
    ButtonModule,
    TimelineModule,
    ProgressBarModule,
    SidebarModule,
    CarouselModule
  ]
})
export class TemplateModule { }
