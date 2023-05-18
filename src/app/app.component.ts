import { Component, OnInit } from '@angular/core';
import { PerfilService } from './core/services/perfil.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Perfil } from './core/interfaces/Perfil';
import { UserResponse } from './core/interfaces/UserResponse';
import { UserRequest } from './core/interfaces/UserRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prueba-frontend';
  formulario: FormGroup= new FormGroup({});
  get perfiles():Perfil[] { return this.perfilService.perfiles }
  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
  ) {}
  ngOnInit(): void {
    this.perfilService.llenarCampos()
      .then((data)=>{

        const firstIdPerfil = this.perfiles[0].id
        
        this.formulario = this.fb.group({
          nombre: ['',Validators.required],
          correo: ['', [Validators.required,Validators.email]],
          perfil: [firstIdPerfil]
        });
      })
      
  }



  submitFormulario() {
    this.formulario.markAllAsTouched()
    if (this.formulario.valid) {
      // Obtén los valores del formulario
      const nombre = this.formulario.value.nombre;
      const correo = this.formulario.value.correo;
      const perfil = this.formulario.value.perfil;
      
      const newUser:UserRequest = {
        nombre,
        correo,
        perfilId:perfil
      }
      this.formulario.reset();
    }
  }
}
