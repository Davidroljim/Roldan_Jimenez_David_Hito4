import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrarService } from 'src/app/services/registrar.service';
import { LoginService } from 'src/app/services/login.service';

import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aula :any;
  signupForm: FormGroup

  validarEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGroup(){
    return new FormGroup({
      usuario: new FormControl('',[Validators.required, Validators.pattern(this.validarEmail)]),
      contrasenya: new FormControl('', [Validators.required])
    });
  }

  contactForm: FormGroup;

  constructor(private _builder: FormBuilder,private registrarService: RegistrarService, private loginService: LoginService, private cookie:CookieService) {

    this.signupForm = this._builder.group({
      email: ['',Validators.compose([ Validators.required, Validators.pattern(this.validarEmail)])],
      contrasenya: ['',Validators.compose([ Validators.required])]
    })

    this.contactForm = this.createFormGroup();

   }
  usuario :any;
  user:any;
  ngOnInit(): void {
    this.loginService.listUsuarios().subscribe({
      next: (aulas) => {
        this.aula = aulas;
      }});
      
  }

  mostrarusuario(){
    this.usuario = this.registrarService.listUsuarios().subscribe(usuarios=>{
      this.usuario = usuarios;
      console.log(this.usuario);
    })
  }

  comparar(usuario:string, contrasenya:string){
    for (let index = 0; index < this.aula.length; index++) {
             
      if (usuario===this.aula[index].correo && contrasenya===this.aula[index].contrasenya) {
        this.cookie.set('email', usuario);
        this.cookie.set('tipo', this.aula[index].tipo);
        this.cookie.set('validar', this.aula[index].validar);
        console.log(this.cookie.get('email'));
      }

    }
  }


}
