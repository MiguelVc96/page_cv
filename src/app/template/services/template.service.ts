import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProfileDto } from 'src/app/core/modeles/profile/IProfileDto';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  profile?: IProfileDto;

  constructor(private http: HttpClient) { }

  hostName: string = environment.api_development;

  getInfoProfile(guid: string): Observable<IProfileDto>{
    const url = `https://${this.hostName}/cv/GetProfile/Info?guid=${guid}`;
    return this.http.get<IProfileDto>(url).pipe(
      map(
        resp => {
          return resp
        }
      )
    )

  }



  // getInfoProfile(guid: string): Observable<IProfileDto>{

  //   this.profile =  {
  //     guid: guid,
  //     name: 'Miguel Angel',
  //     alias: 'Miguel Valencia',
  //     surnames: 'Valencia Carrillo',
  //     age: 26,
  //     jobTitle: 'Desarrollador Web / Full stack',
  //     email: 'miguel.angel.valencia.c.96@gmail.com',
  //     phoneNumber: '+52 55 3694 7508',
  //     assets: {
  //       img: 'http://millencia.com/img/user/miguel-valencia.jpeg',
  //       isActive: true
  //     },

  //     objective: `Busco desarrollarme en una empresa donde pueda aplicar
  //                 los conocimientos obtenidos de mi preparación
  //                 profesional como Desarrollador Jr, así mismo poder aportar soluciones y
  //                 propuestas innovadoras para el beneficio mutuo y obtener
  //                 mayor crecimiento profesional y personal; Con una
  //                 continua preparación.`,

  //     contacto: [
  //       {
  //         type: 'git',
  //         description: 'Perfil de GitHub',
  //         assets: {
  //           img: 'http://millencia.com/img/somedia/git.png'
  //         },
  //         url: 'https://github.com/MiguelVc96',
  //         isActive: true
  //       },
  //       {
  //         type: 'phone',
  //         description: '+52 55 3694 7508',
  //         assets: {
  //           img: 'http://millencia.com/img/somedia/whatsapp.png'
  //         },
  //         url: 'https://api.whatsapp.com/send?phone=525536947508&text=Hola, ¡Necesito más información!',
  //         isActive: true
  //       },
  //       {
  //         type: 'email',
  //         description: 'miguel.angel.valencia.c.96@gmail.com',
  //         assets: {
  //           img: 'http://millencia.com/img/somedia/gmail.png'
  //         },
  //         url: 'mailto:miguel.angel.valencia.c.96@gmail.com',
  //         isActive: true
  //       },
  //       {
  //         type: 'youtube',
  //         description: 'Canal Youtube',
  //         assets: {
  //           img: 'http://millencia.com/img/somedia/youtube.png'
  //         },
  //         url: 'https://www.youtube.com/user/parkurmiki/videos',
  //         isActive: true
  //       }

  //     ],
  //     education: [
  //       {
  //         academicDegree: 'Ingenería en Sistemas Computacionales',
  //         description: 'Titulación en tramite.',
  //         nameSchool: 'Tecnológico de Estúdios Superiores de Ecatepec',
  //         schoolAddress: 'MÉXICO, Av. Tecnológico S/N, 55210 Ecatepec de Morelos, Méx',
  //         startDate: 'Agosto 2016',
  //         endDate: 'Diciembre 2021',
  //         ItFinished: true
  //       }
  //     ],
  //     worked: [
  //       {
  //         startDate: 'Agosto 2021',
  //         endDate: 'Enero 2023',
  //         job:'Desarrollador Web Jr',
  //         nameCompany: 'truiki.com',
  //         companyAddress: 'Calle Porto Palermo, SMZ 317, C.P 77535, Cancún, México',
  //         jobFunctions: [
  //           {
  //             description: `Desarrollo de requerimientos de Front end con Angular 11, TypeScript, JavaScript, sCss y HTML 5.`
  //           },
  //           {
  //             description: `Desarrollos de Api Rest con C#, .Net 5, con conexiones a bases de datos MySql y PostgreSql
  //                           e implementación de consultas a las bases de datos con sintaxis de método LINQ.`
  //           },
  //           {
  //             description: `Implementación de Daemon para ejecutar procesos determinados automáticamente en Fedora Linux.`
  //           },
  //           {
  //             description: `Desarrollo de aplicaciones móviles para android en Nativescript.`
  //           },
  //           {
  //             description: `Implementación de sitios web en Wordpress y desarrollo de plugins en Php,
  //                           JavaScript, css y HTML 5 para wordpress.`
  //           },
  //           {
  //             description: `Diseño y creación de base de datos en Mysql y PostgreSql.`
  //           },
  //           {
  //             description: `Uso de de Firebases para ocupar los servicios de data bases, storage y Firebase Cloud Messaging (FCM).`
  //           }
  //         ]
  //       },
  //       {
  //         startDate: 'Septiembre 2015',
  //         endDate: 'Enero 2016',
  //         job:'Becario como Desarrollador web',
  //         nameCompany: 'LORES CONSULTING',
  //         companyAddress: 'Hegel 141, Polanco, Polanco V Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX',
  //         jobFunctions: [
  //           {
  //             description: `Ejecutar consultas a la Base de Datos y comparar los resultados
  //                           obtenidos con los XML correspondientes, e informar si los datos no coincidían.`
  //           }
  //         ]
  //       }

  //     ],
  //     certificates:[
  //       {
  //         title: 'AZ-900 MICROSOFT AZURE FUNDAMENTALS',
  //         date: 'Marzo 2021',
  //         description: 'Manejo de soluciones empleando la nube de Azure',
  //         url: 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=zOVt2ZrPn4sJhbE1G7UziQ=='
  //       }
  //     ],
  //     courses:[
  //       {
  //         title: 'ANGULAR 11 Y FIREBASE CRUD',
  //         date: 'Julio 2021',
  //         description: 'Impartido Undemy',
  //       },
  //       {
  //         title: 'TÉCNICO EN REDES DE DATOS ',
  //         date: 'Julio 2021',
  //         description: 'Impartido por Capacitante para el empleo',
  //       },
  //       {
  //         title: 'TÉCNICO EN REDES IP',
  //         date: 'Mayo 2021',
  //         description: 'Impartido por Capacitante para el empleo',
  //       },
  //       {
  //         title: 'CAP - PROGRAMMING ESSENTIALS IN PYTHON',
  //         date: 'Noviembre 2020',
  //         description: 'Impartido por CISCO Networking Academy',
  //       },
  //       {
  //         title: 'LINUX TUTORIALS AND PROJECTS',
  //         date: 'Junio 2018',
  //         description: 'Tomado en Undemy',
  //       }
  //     ],
  //     competencies:[
  //       {
  //         description: 'Trabajo en equipo',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/trabajo-en-equipo.png'
  //         }
  //       },
  //       {
  //         description: 'Comunicación',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/chat.png'
  //         }
  //       },
  //       {
  //         description: 'Adaptación',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/adaptacion.png'
  //         }
  //       },
  //       {
  //         description: 'Compromiso',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/compromiso.png'
  //         }
  //       },
  //       {
  //         description: 'Metodología ágil SCRUM',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/scrum.png'
  //         }
  //       },
  //       {
  //         description: 'Responsabilidad',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/responsabilidad.png'
  //         }
  //       },
  //       {
  //         description: 'Autodidacta',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/aprender-en-linea.png'
  //         }
  //       },
  //       {
  //         description: 'Proactivo',
  //         assets: {
  //           img: 'http://millencia.com/img/compe/idea.png'
  //         }
  //       }
  //     ],

  //     languages: [
  //       {
  //         title: 'Italiano',
  //         degree: 'B2',
  //         level: 'Intermedio',
  //         percentageSpoken: 70,
  //         readingWritingPorsetanje: 80,
  //         isoFlag: 'it',
  //         motherTongue: false
  //       }
  //     ],

  //     personalProjects: [
  //       {
  //         title: `Desarrollo de curriculum vitae web `,
  //         description: `Empleando las siguientes herramientas: Angular 13, Tyscript, HTML, sCss, primeNG.
  //                       Montado en un servidor de Hostgator`,
  //         url: 'https://millencia.com/'
  //       },
  //       {
  //         title: `Implementación y coordinación de un sistema para el control de tutorías para
  //                 la institución Tecnológico de Estudios Superiores de Ecatepec`,
  //         description: `Empleando las siguientes herramientas: Angular 11, Tyscript, Fireabse, NodeJS,
  //                       HTML, css y bootstrap.
  //                       Montado en un servidor de Netlify`,
  //         url: 'https://stoic-nobel-8bd275.netlify.app/#/'
  //       }
  //     ]







  //   }

  //   return of(this.profile);

  // }




}
