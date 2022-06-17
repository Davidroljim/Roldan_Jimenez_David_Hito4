import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditIncService } from 'src/app/services/edit-inc.service';
import { AulaService} from 'src/app/services/aula.service';

//import { EditUserService } from 'src/app/services/edit-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-inc',
  templateUrl: './edit-inc.component.html',
  styleUrls: ['./edit-inc.component.css']
})
export class EditIncComponent implements OnInit {
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
      aula: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      fcierre: new FormControl('', [Validators.required])
    });
  }

  contactForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private incService: EditIncService, private aulaService: AulaService, private _builder: FormBuilder) {

    this.signupForm = this._builder.group({
      correo: new FormControl('',[Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      fcierre: new FormControl('', [Validators.required])
    })

    this.contactForm = this.createFormGroup();


   }

  ngOnInit(): void {
    //this.mostrarAula();
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

  update(incTitulo:string, incDescripcion:string ,incAula:string,  incEstado:string, incCorreo:string){
    console.log("llega");
    console.log(this.aula);

    this.incidencia.titulo=incTitulo;
    this.incidencia.descripcion=incDescripcion;
    this.incidencia.aula=incAula;
    this.incidencia.estado=incEstado;
    this.incidencia.correo=incCorreo;


    if (incEstado==="Resuelto"|| incEstado==="NuevaIn") {
      var dateDay = new Date();
    var fecha = dateDay.getFullYear() + '-' + ( dateDay.getMonth() + 1 ) + '-' + dateDay.getDate();
      this.incidencia.fcierre=fecha;
    }else{
      this.incidencia.fcierre=null;
    }


    // this.incidencia = this.aulaService.listAula().subscribe({
    //   next: (aulas) => {
    //     this.aula = aulas;
    //   },
    //   error: (err) => {
    //    
    //   },
    //   complete: ()=> {
        
    //   }
    // })
    
    for (let index = 0; index < this.aula.length; index++) {
             
      if (incAula===this.aula[index].numero_aula) {
        console.log("bien");
        this.incService.update(this.incId, this.incidencia).subscribe(res=>{
          
        });
        console.log("update");
            this.router.navigateByUrl('/adminInc');
            this.errorMsg="";
            this.bolInc="true";
      }

    }

    if (this.bolInc=="true") {
      this.errorMsg="";
    }else{
      this.errorMsg="El aula "+incAula+" no existe en el Instituto";
    
    }
    

  }


  /*mostrarAula(){
    this.incidencia = this.aulaService.listAula().subscribe(aulas=>{
      this.aula = aulas;

      
    })
  }*/
}
