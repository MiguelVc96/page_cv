import { Injectable } from '@angular/core';
import { IMenu } from 'src/app/core/modeles/Menu/IMenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: IMenu[] = [];

  constructor() { }

  getOptionMenu(){
    return this.menu = [
      {
        description: 'Educacion',
        target: 'targetEducation',
        isMovile: true,
        isDesktop: true,
      },
      {
        description: 'Experiencia',
        target: 'targetWorked',
        isMovile: false,
        isDesktop: true,
      },
      {
        description: 'Certificados',
        target: 'targetCertificate',
        isMovile: true,
        isDesktop: true,
      },
      {
        description: 'Cursos',
        target: 'targetCourses',
        isMovile: true,
        isDesktop: false,
      },
      {
        description: 'Competencias',
        target: 'targetCompetencie',
        isMovile: true,
        isDesktop: true,
      },
      {
        description: 'Idiomas',
        target: 'targetLanguages',
        isMovile: true,
        isDesktop: false,
      },
      {
        description: 'Proyectos personales',
        target: 'targetPersonalProjects',
        isMovile: true,
        isDesktop: false,
      }


    ]
  }

}
