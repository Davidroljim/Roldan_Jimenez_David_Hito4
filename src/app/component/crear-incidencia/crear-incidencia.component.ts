import { Component, OnInit } from '@angular/core';
import { CrearIncidenciaService } from 'src/app/services/crear-incidencia.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent implements OnInit {

  constructor(private crearIncService : CrearIncidenciaService) { }
  incidencia: any;
  ngOnInit(): void {
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
        "estado": null,
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
