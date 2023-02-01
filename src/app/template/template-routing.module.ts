import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateAppComponent } from './template-app.component';


const routes: Routes = [
  {
    path: '', component: TemplateAppComponent,
    children: [
      {path: 'information', component: TemplateAppComponent},
      {path: '**', component: TemplateAppComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
