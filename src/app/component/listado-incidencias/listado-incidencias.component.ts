import { Component, OnInit } from '@angular/core';
import { ListadoIncidenciasService } from 'src/app/services/listado-incidencias.service';

@Component({
  selector: 'app-listado-incidencias',
  templateUrl: './listado-incidencias.component.html',
  styleUrls: ['./listado-incidencias.component.css']
})
export class ListadoIncidenciasComponent implements OnInit {

  constructor(private incidenciaService: ListadoIncidenciasService) { }
  incidencia :any;
  ngOnInit(): void {
    this.mostrarIncidencia();
  }

  mostrarIncidencia(){
    this.incidencia = this.incidenciaService.listIncidencias().subscribe(incidencias=>{
      this.incidencia = incidencias;
      console.log(this.incidencia);
    })
  }
}
