export interface Usuario {
  id: number;
  username: string;
  password: string;
  token: string;
}

export interface UsuarioResponse{
  mensaje: string,
  token: string,
  userId:number
}
