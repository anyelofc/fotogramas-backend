import { Usuario } from "./usuario";

export class Comentario {
  constructor(
    public id: string,
    public texto: string,
    public fecha: Date,
    public usuario: Usuario
  ) {}
}