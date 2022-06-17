import { Component, OnInit } from '@angular/core';
import { AulaService } from 'src/app/services/aula.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  constructor(private aulaService: AulaService) { }
  aula :any;
  ngOnInit(): void {
    this.mostrarAula();
  }

  mostrarAula(){
    this.aula = this.aulaService.listAula().subscribe(aulas=>{
      this.aula = aulas;
      console.log(this.aula);
    })
  }

}
