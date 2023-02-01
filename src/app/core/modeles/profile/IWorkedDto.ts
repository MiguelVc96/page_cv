import { IJobFunctionsDto } from "./IJobFunctionsDto"

export interface IWorkedDto{
  job?: string, // puesto de trabajo
  nameCompany?: string, // nombre de la empresa
  companyAddress?: string //Direccion de la empres
  startDate?: string, //fecha de incio
  endDate?: string, //fecha de termino
  description?: string, // observaciones
  jobFunctions?: IJobFunctionsDto[] //funciones lavorales
}
