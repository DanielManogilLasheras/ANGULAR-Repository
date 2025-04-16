import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarios : Usuario [] = [];
  constructor() { }

  public addUser(usuario : Usuario){
    this.usuarios.push (usuario);
  }
  public getUsers() : Usuario[]{
    return this.usuarios;
  }
}
