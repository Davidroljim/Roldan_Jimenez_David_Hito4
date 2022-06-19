import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserService } from 'src/app/services/edit-user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: any;
  usuario: any;
  usuario1:any;
  user:any;
  
  signupForm: FormGroup;
  

  validarEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern(this.validarEmail)]),
      contrasenya: new FormControl('', [Validators.required])
    });
  }

  contactForm: FormGroup;
  iniciar:any;
  constructor(private route: ActivatedRoute, private router: Router, private userService: EditUserService, private _builder: FormBuilder,private editService: EditUserService,   private cookie:CookieService) {

    this.signupForm = this._builder.group({
      email: ['',Validators.compose([ Validators.required, Validators.pattern(this.validarEmail)])],
      contrasenya: ['',Validators.compose([ Validators.required])]
    })

    this.contactForm = this.createFormGroup();


   }

  ngOnInit(): void {

    this.iniciar = this.cookie.get('tipo');
    if (this.iniciar!="admin") {
      this.router.navigate(["/"]);
    }

    const routeParams =this.route.snapshot.paramMap;
    this.userId = Number(routeParams.get('userId'));
    console.log(this.userId);
    this.userService.find(this.userId).subscribe((data:any)=>{
      this.usuario1 = data;
      console.log(this.usuario1);
    })
  }

  update(userUsuario: string, userContrasenya:string, userValidar:string, userTipo:string){
    console.log("llega");
    this.usuario1.contrasenya=userContrasenya;
    this.usuario1.correo=userUsuario;
    this.usuario1.validar=userValidar;
    this.usuario1.tipo=userTipo;
    this.userService.update(this.userId, this.usuario1).subscribe(res=>{
        this.router.navigateByUrl('/adminUser');
    });
   // }else{
     // console.log('No valido');
   // }
    
  }

  
}

