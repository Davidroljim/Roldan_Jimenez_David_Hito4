import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListadoIncidenciasComponent } from './component/listado-incidencias/listado-incidencias.component';
import { AppRoutingModule } from './app-routing.module';
import { MisIncidenciasComponent } from './component/mis-incidencias/mis-incidencias.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { AdministrarIncidenciasComponent } from './component/administrar-incidencias/administrar-incidencias.component';
import { AdministrarUsuariosComponent } from './component/administrar-usuarios/administrar-usuarios.component';
import { CrearIncidenciaComponent } from './component/crear-incidencia/crear-incidencia.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
