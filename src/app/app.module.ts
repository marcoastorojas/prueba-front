import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GrillaComponent } from './components/grilla/grilla/grilla.component';
import { UserFormComponent } from './components/form/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    UserFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent,GrillaComponent]
})
export class AppModule { }
