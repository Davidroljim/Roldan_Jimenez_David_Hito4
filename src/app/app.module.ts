import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListadoIncidenciasComponent } from './component/listado-incidencias/listado-incidencias.component';
import { AppRoutingModule } from './app-routing.module';
import { MisIncidenciasComponent } from './component/mis-incidencias/mis-incidencias.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { AdministrarIncidenciasComponent } from './component/administrar-incidencias/administrar-incidencias.component';
import { AdministrarUsuariosComponent } from './component/administrar-usuarios/administrar-usuarios.component';
import { CrearIncidenciaComponent } from './component/crear-incidencia/crear-incidencia.component';
import { AulaComponent } from './component/aula/aula.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditIncComponent } from './component/edit-inc/edit-inc.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { CookieService } from 'ngx-cookie-service';
import { ComentariosComponent } from './component/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoIncidenciasComponent,
    MisIncidenciasComponent,
    RegistrarComponent,
    AdministrarIncidenciasComponent,
    AdministrarUsuariosComponent,
    CrearIncidenciaComponent,
    AulaComponent,
    EditIncComponent,
    EditUserComponent,
    ComentariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
