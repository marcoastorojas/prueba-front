import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/core/interfaces/Perfil';
import { UserRequest } from 'src/app/core/interfaces/UserRequest';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { UserService } from 'src/app/core/services/user.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  itemToEdit:number = -1;
  nameControl:FormControl= new FormControl();
  constructor(
    private userService:UserService,
    private perfilService:PerfilService
  ) { }

  ngOnInit(): void {
  }

  get usersToAdd():UserRequest[]{
    return this.userService.users;
  }
  get perfiles ():Perfil[]{
    return this.perfilService.perfiles;
  }

  getPerfilById(id:string):string{
    return this.perfiles.find(perfil => perfil.id === id)?.value!;
  }

  deleteUser(index:number){
    this.userService.removeUser(index)
  }

  editRegistro(index:number){

    this.itemToEdit = index;
  }
  confirmChange(element:HTMLParagraphElement, index:number){
    const newNombre = element.parentElement!.parentElement!.querySelectorAll("input")[0].value
    const newCorreo = element.parentElement!.parentElement!.querySelectorAll("input")[1].value
    const perfil = element.parentElement!.parentElement!.querySelector("select")!.selectedIndex
    const newPerfilId = this.perfiles[perfil].id
    const newUser:UserRequest = {
      nombre : newNombre,
      correo: newCorreo,
      perfilId: newPerfilId
    }
    this.userService.changeUser(newUser, index);
    
    this.itemToEdit=-1
  }

  cancel(){
    this.itemToEdit=-1
  }
}
