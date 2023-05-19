import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/Perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  public perfiles: Perfil[] = []
  constructor() {}


  llenarCampos() {
    return new Promise((res,rej)=>{
      setTimeout(() => {
        this.perfiles = [
          { id:"1",value: "user" },
          { id:"2", value: "otro" },
          { id:"3",value: "admin" },
        ]
        res("todo bien")
      }, 1000);
    })

  }
}
