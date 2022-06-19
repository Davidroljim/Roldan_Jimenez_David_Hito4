import { Component, OnInit } from '@angular/core';
import { ListadoIncidenciasService } from 'src/app/services/listado-incidencias.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-administrar-incidencias',
  templateUrl: './administrar-incidencias.component.html',
  styleUrls: ['./administrar-incidencias.component.css']
})
export class AdministrarIncidenciasComponent implements OnInit {

  constructor(private incidenciaService: ListadoIncidenciasService, private router: Router,  private cookie:CookieService) {

   }
  incidencia :any;
  iniciar:any;
  ngOnInit(): void {
    this.iniciar = this.cookie.get('tipo');
    if (this.iniciar!="admin") {
      this.router.navigate(["/"]);
    }
    this.mostrarIncidencia();
    //this.fechaCierre();

  }

  mostrarIncidencia(){
    this.incidencia = this.incidenciaService.listIncidencias().subscribe(incidencias=>{
      this.incidencia = incidencias;
      console.log(this.incidencia);
    })
  }

  deleteIncidencia(id:any){
    this.incidenciaService.deleteIncidencia(id).subscribe(
      res => {
        this.incidencia = this.incidencia.filter((a:any) => a.id ==id);
        this.refresh();
      }
    );
    //this.router.navigateByUrl('/listado');
    
  }

  fechaCierre(incId:any){
    var dateDay = new Date();
    var fecha = dateDay.getFullYear() + '-' + ( dateDay.getMonth() + 1 ) + '-' + dateDay.getDate();
    console.log("Fecha actual: ",incId);
    this.incidenciaService.find(incId).subscribe((data:any)=>{
      this.incidencia = data;
      console.log("Llega Incidencia:",this.incidencia);
      this.incidencia.fcierre=fecha;
    })
    
    console.log("Fecha cierre buena: ",this.incidencia.fcierre)
    this.incidenciaService.update(incId, this.incidencia).subscribe(res=>{
      console.log("update");
        this.router.navigateByUrl('/adminInc');
    });
  }

  //Refrescar pagina
  refresh(): void { window.location.reload(); }
}
