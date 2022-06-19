import { Component, OnInit } from '@angular/core';
import { MisIncidenciasService } from 'src/app/services/mis-incidencias.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-mis-incidencias',
  templateUrl: './mis-incidencias.component.html',
  styleUrls: ['./mis-incidencias.component.css']
})
export class MisIncidenciasComponent implements OnInit {

  constructor(private misincidenciaService: MisIncidenciasService, private router: Router, private cookie:CookieService) {}
 incidencia :any;
 miIncidencia: any;
 iniciar:any;
 
 ngOnInit(): void {
   this.mostrarIncidencia();
   this.iniciar = this.cookie.get('tipo');
   console.log(this.cookie.get('tipo'));
 }

 mostrarIncidencia(){
   this.incidencia = this.misincidenciaService.listMisIncidencias().subscribe(incidencias=>{
     this.incidencia = incidencias;
     console.log(this.incidencia);
   })
 }

 deleteIncidencia(id:any){
   this.misincidenciaService.deleteIncidencia(id).subscribe(
     res => {
       this.miIncidencia = this.miIncidencia.filter((a:any) => a.id ==id);
       this.refresh();
     }
     
   );
   //this.router.navigateByUrl('/listado');
   
 }
 //Refrescar pagina
 refresh(): void { window.location.reload(); }
}
