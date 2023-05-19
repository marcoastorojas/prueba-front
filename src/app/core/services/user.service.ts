import { Injectable } from '@angular/core';
import { UserRequest } from '../interfaces/UserRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:UserRequest[] = [];

  constructor() { 
    this.users = [
      {
        nombre:"marco",
        correo:"marcoasto123@gmail.com",
        perfilId:"1"
      },
      {
        nombre:"cristian",
        correo:"cristianasto123@gmail.com",
        perfilId:"2"
      },
      {
        nombre:"raquel",
        correo:"raquelasto123@gmail.com",
        perfilId:"2"
      },
      {
        nombre:"diana",
        correo:"dianaasto123@gmail.com",
        perfilId:"3"
      }
    ]
  }

  addNewUser(user:UserRequest){
    this.users.push(user);
  }
  removeUser(index:number){
    this.users = this.users.filter( (user,i)=> i!==index);

  }
  changeUser(newuser:UserRequest, index:number){
    this.users = this.users.map((user,i)=>index!==i?user:newuser)
  }
}
