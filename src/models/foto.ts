import { Usuario } from "./usuario";
export class Foto {
  constructor(
    public id: string,
    public ruta: string,
    public descripcion: string,
    public hashtags: string[],
    public fechaSubida: Date,
    public usuario: Usuario,
    public meGusta: Usuario[]
  ) {}
}