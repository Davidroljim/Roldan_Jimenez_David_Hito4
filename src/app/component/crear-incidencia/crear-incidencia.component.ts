import { Component, OnInit } from '@angular/core';
import { CrearIncidenciaService } from 'src/app/services/crear-incidencia.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AulaService} from 'src/app/services/aula.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent implements OnInit {

  constructor(private crearIncService : CrearIncidenciaService, private cookie:CookieService, private router:Router, private aulaService:AulaService) { }
  incidencia: any;
  iniciar:any;
  correo:any;
  aula:any;
  errorMsg:any;
  bolInc:string= "false";
  ngOnInit(): void {

    this.iniciar = this.cookie.get('tipo');
    this.correo = this.cookie.get('email');
    if (this.iniciar!="user") {
      this.router.navigate(["/"]);
    }

    this.aulaService.listAula().subscribe({
      next: (aulas) => {
        this.aula = aulas;
      }});

  }
mostrar(incidenciaAula:string){
  console.log(Number(incidenciaAula));
}
  add(incidenciaTitulo:string, incidenciaDescripcion:string, incidenciaCorreo:string,incidenciaAula:string, ){
    this.incidencia ={

      "titulo": incidenciaTitulo,
        "descripcion": incidenciaDescripcion,
        "aula": Number(incidenciaAula),
        "fcreacion": null,
        "fmodificacion": null,
        "fcierre": null,
        "estado": "Nuevo",
        "correo": incidenciaCorreo,
        "comentarios": null,
        "created_at": null,
        "updated_at": null
    };
    console.log(this.incidencia);

    for (let index = 0; index < this.aula.length; index++) {
             
      if (incidenciaAula===this.aula[index].numero_aula) {
        this.crearIncService.addIncidencia(this.incidencia as any).subscribe(incidencias=>{
          this.incidencia=incidencias;
      });
        console.log("create");
            
            this.errorMsg="";
            this.bolInc="true";
      }

    }

    if (this.bolInc=="true") {
      this.errorMsg="";
      this.router.navigateByUrl('/misIncidencias');
    }else{
      this.errorMsg="El aula "+incidenciaAula+" no existe en el Instituto";
    
    }

    //this.crearIncService.addIncidencia(this.incidencia as any).subscribe(incidencias=>{
    //    this.incidencia=incidencias;
    //});



  }
}
