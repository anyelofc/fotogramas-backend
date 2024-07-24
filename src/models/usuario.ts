export class Usuario {
  constructor(
    public vnombreUsuario: string,
    public email: string,
    public fechaRegistro: Date,
    public fotoPerfil: string,
    public seguidores: string,
    public siguiendo: string,
    public fotosSubidas: string
  ) {}
}