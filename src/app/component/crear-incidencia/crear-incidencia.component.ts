import { Component, OnInit } from '@angular/core';
import { CrearIncidenciaService } from 'src/app/services/crear-incidencia.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent implements OnInit {

  constructor(private crearIncService : CrearIncidenciaService, private cookie:CookieService, private router:Router) { }
  incidencia: any;
  iniciar:any;
  correo:any;
  ngOnInit(): void {

    this.iniciar = this.cookie.get('tipo');
    this.correo = this.cookie.get('email');
    if (this.iniciar!="user") {
      this.router.navigate(["/"]);
    }

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
    this.crearIncService.addIncidencia(this.incidencia as any).subscribe(incidencias=>{
        this.incidencia=incidencias;
    });
  }
}
