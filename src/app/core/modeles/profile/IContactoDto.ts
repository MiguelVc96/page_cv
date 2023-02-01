import { IAssetsDto } from "./IAssetsDto";

export  interface IContactoDto{
  type?: string, // tipo de contacto facebook, celular, gmail etc
  isActive?: boolean, // esta activo ese tipo de contacto
  description?: string, // puede tener el numero telefonico o correo
  assets?: IAssetsDto, // icono de la red de contacto
  url?: string,
}
