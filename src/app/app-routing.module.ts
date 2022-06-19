import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListadoIncidenciasComponent } from './component/listado-incidencias/listado-incidencias.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { MisIncidenciasComponent } from './component/mis-incidencias/mis-incidencias.component';
import { AdministrarIncidenciasComponent } from './component/administrar-incidencias/administrar-incidencias.component';
import { AdministrarUsuariosComponent } from './component/administrar-usuarios/administrar-usuarios.component';
import { CrearIncidenciaComponent } from './component/crear-incidencia/crear-incidencia.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditIncComponent } from './component/edit-inc/edit-inc.component';
import { ComentariosComponent } from './component/comentarios/comentarios.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listado', component: ListadoIncidenciasComponent,},
  {path: 'registrar', component: RegistrarComponent,},
  {path: 'misIncidencias', component: MisIncidenciasComponent,},
  {path: 'adminInc', component: AdministrarIncidenciasComponent,},
  {path: 'adminUser', component: AdministrarUsuariosComponent,},
  {path: 'crear', component: CrearIncidenciaComponent,},
  {path: 'registrar', component: RegistrarComponent,},
  {path: 'editUser/:userId', component: EditUserComponent,},
  {path: 'adminInc/:incId', component: AdministrarIncidenciasComponent,},
  {path: 'editInc/:incId', component: EditIncComponent,},
  {path: 'comInc/:incId', component: ComentariosComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
