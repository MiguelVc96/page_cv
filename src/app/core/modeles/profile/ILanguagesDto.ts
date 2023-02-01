import { IAssetsDto } from "./IAssetsDto";

export interface ILanguagesDto{
  title?: string, // idioma que se habla
  level?: string, // intermedio, experto etc
  degree?: string //B2, C1  etc
  percentageSpoken?: number, // porsentaje hablado
  readingWritingPorsetanje?: number,  // porsentaje escrito y lectura
  assets?: IAssetsDto, //Imagen
  motherTongue?: boolean, // Es tu lengua materna o no
  isoFlag?: string // Norma iso para obtener la bandera de acuerdo a la api https://flagcdn.com/es/codes.json
}
