import { IAssetsDto } from "./IAssetsDto";
import { ICertificatesDto } from "./ICertificatesDto";
import { ICompetenciesDto } from "./ICompetenciesDto";
import { IContactoDto } from "./IContactoDto";
import { ICoursesDto } from "./ICoursesDto";
import { IEducationDto } from "./IEducationDto";
import { ILanguagesDto } from "./ILanguagesDto";
import { IPersonalProjects } from "./IPersonalProjects";
import { IWorkedDto } from "./IWorkedDto";

export interface IProfileDto{
  guid: string,
  age: number, // edad
  name: string, // nombre
  surnames: string, // apellido
  alias: string, //apodo que aparecesa en el menu
  jobTitle: string, // titulo profesional
  email: string, // correo electronico
  phoneNumber: string, // numero telefonico
  assets?: IAssetsDto, // foto de perfil
  contacto?: IContactoDto[], // contacto
  objective?: string, // objetivo personal
  competencies?: ICompetenciesDto[], // competencias
  languages?: ILanguagesDto[], // idioma
  education?: IEducationDto[], // educacion
  worked?: IWorkedDto[], // experiencia laboral
  certificates?: ICertificatesDto[], // certificados
  courses?: ICoursesDto[], // cursos
  personalProjects?: IPersonalProjects[]


}
