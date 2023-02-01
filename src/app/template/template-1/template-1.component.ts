import { Component, Input, OnInit } from '@angular/core';
import { ICertificatesDto } from 'src/app/core/modeles/profile/ICertificatesDto';
import { ICoursesDto } from 'src/app/core/modeles/profile/ICoursesDto';
import { IProfileDto } from 'src/app/core/modeles/profile/IProfileDto';
import { IWorkedDto } from 'src/app/core/modeles/profile/IWorkedDto';
import { PdfService } from '../services/pdf.service';
import { TemplateService } from '../services/template.service';



@Component({
  selector: 'app-template-1',
  templateUrl: './template-1.component.html',
  styleUrls: ['./template-1.component.scss']
})
export class Template1Component implements OnInit {

  @Input() profile?: IProfileDto;
  worked: IWorkedDto[] = [];

  constructor(private services: TemplateService,
    private pdfService: PdfService) { }

  ngOnInit(): void {

  }



  /**
   * Verificamos si existe expereincia laboral para mostrar la linea de tiempo
   * @returns
   */
  isWorkExperience(){
    this.getWorkedTimeLine();

    if(this.worked)
      return true

    return false;
  }

  /**
   * Metodo para obtener la line de tiempo de la experienca laboral
   * se ejecuta depues de obtener todo los datos del pefil para depues
   * en el front mostrar la inforamcion
   */
  getWorkedTimeLine(){

    //verifica que exita la informacion

    if(this.profile?.worked  != undefined)
    /*si existe recorremos el arreglo de experiencia laboral y lo setiamos en la variable
      worked y esta sera usada en el compone te timeLine
    */
      for(var i=0; i < this.profile?.worked.length;  i++ ){
        this.worked.push(this.profile?.worked[i]);
      }


  }


  /**Metod para mostrar o ocultar el apartado de certificado */
  getHaveCertificates(certificates?: ICertificatesDto[]){
    /** Se verifica que los datos existan para el certificado */
    if(certificates == undefined){
      return false;
    }else{
      // si existe verificamos que no vengan vacios
      if(certificates.length <= 0){
        return false;
      }
      // si no viene vacios mostramos el apartado de certificado
      return true
    }
  }

   /**Metod para mostrar o ocultar el apartado de cursos */
  getHaveCourses(course?: ICoursesDto[]){
    /** Se verifica que los datos existan para el curso */
    if(course == undefined){
      return false;
    }else{
      // si existe verificamos que no vengan vacios
    if(course.length <= 0){
      return false;
    }
    // si no viene vacios mostramos el apartado de cursos
    return true
  }

}

//metodo para el boton de descarga
onCLikDownloadFile(){
  this.pdfService.downloadFile();
  //this.pdfService.downloadCv();
}


onClikScrollTop(){
  window.scrollTo(0, 0);
}


}





