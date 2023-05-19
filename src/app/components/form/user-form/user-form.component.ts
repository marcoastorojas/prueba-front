import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Perfil } from 'src/app/core/interfaces/Perfil';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { UserRequest } from 'src/app/core/interfaces/UserRequest';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = 'prueba-frontend';
  formulario: FormGroup = new FormGroup({});
  get perfiles(): Perfil[] { return this.perfilService.perfiles }
  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private userService: UserService,
  ) { }
  ngOnInit(): void {
    this.perfilService.llenarCampos()
      .then((data) => {

        const firstIdPerfil = this.perfiles[0].id

        this.formulario = this.fb.group({
          nombre: ['', Validators.required],
          correo: ['', [Validators.required, Validators.email]],
          perfil: [firstIdPerfil]
        });
      })

  }



  submitFormulario() {
    console.log(this.formulario.controls);
    
    this.formulario.markAllAsTouched()
    if (this.formulario.valid) {
      const nombre = this.formulario.value.nombre;
      const correo = this.formulario.value.correo;
      const perfil = this.formulario.value.perfil;

      const newUser: UserRequest = {
        nombre,
        correo,
        perfilId: perfil
      }
      this.userService.addNewUser(newUser);
      this.formulario.controls["nombre"].reset()
      this.formulario.controls["correo"].reset()
      this.formulario.controls["perfil"].setValue(this.perfiles[0].id)
    }
  }
}
