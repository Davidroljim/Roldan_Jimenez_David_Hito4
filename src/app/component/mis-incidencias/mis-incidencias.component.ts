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
 email:any;
 inc:Array<any> = [];
 
 
 ngOnInit(): void {
   this.mostrarIncidencia();
   this.iniciar = this.cookie.get('tipo');
   this.email=this.cookie.get('email');
   console.log(this.cookie.get('tipo'));
 }

 mostrarIncidencia(){
   this.incidencia = this.misincidenciaService.listMisIncidencias().subscribe(incidencias=>{
    for (let index = 0; index < incidencias.length; index++) {
      //const element = incidencias[index];
      console.log(incidencias[index].correo);
      if (this.email===incidencias[index].correo) {
        this.inc.push(incidencias[index]);
        //console.log("hola",incidencias[index].email);
      }
    }
    
     
     //console.log(this.incidencia);
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
