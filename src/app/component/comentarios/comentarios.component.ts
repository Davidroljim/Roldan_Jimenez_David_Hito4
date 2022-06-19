import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditIncService } from 'src/app/services/edit-inc.service';
import { AulaService} from 'src/app/services/aula.service';
import { CookieService } from 'ngx-cookie-service';
//import { EditUserService } from 'src/app/services/edit-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  errorMsg: string = "";
  aula :any;
  bolInc:string= "false";

  incId: any;
  
  incidencia:any;
  user:any;
  
  signupForm: FormGroup;
  

  validarEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGroup(){
    return new FormGroup({
      correo: new FormControl('',[Validators.required, Validators.pattern(this.validarEmail)]),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required])
    });
  }

  contactForm: FormGroup;
  is_edit=true;
  iniciar:any;
  constructor(private route: ActivatedRoute, private router: Router, private incService: EditIncService, private aulaService: AulaService, private _builder: FormBuilder,private cookie:CookieService) {

    this.signupForm = this._builder.group({
      correo: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required])
      
    })

    this.contactForm = this.createFormGroup();


   }

  ngOnInit(): void {
    /*this.iniciar = this.cookie.get('validar');
    console.log(this.iniciar);
    if (this.iniciar=="") {
      this.router.navigate(["/listado"]);
    }*/

    const routeParams =this.route.snapshot.paramMap;
    this.incId = Number(routeParams.get('incId'));
    console.log(this.incId);
    this.incService.find(this.incId).subscribe((data:any)=>{
      this.incidencia = data;
      console.log(this.incidencia);
    });
    this.aulaService.listAula().subscribe({
      next: (aulas) => {
        this.aula = aulas;
      }});
  }

  update(comentario:string){
    console.log("llega");
    console.log(this.aula);

    this.incidencia.titulo=this.incidencia.titulo;
    this.incidencia.descripcion=this.incidencia.descripcion;
    this.incidencia.aula= this.incidencia.aula;
    this.incidencia.estado=this.incidencia.estado;
    this.incidencia.comentarios=comentario;

    this.incService.update(this.incId, this.incidencia).subscribe(res=>{
      this.router.navigateByUrl('/misIncidencias');
    });
  }
    
}
