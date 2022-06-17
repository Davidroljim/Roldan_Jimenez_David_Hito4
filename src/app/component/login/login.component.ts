import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrarService } from 'src/app/services/registrar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signupForm: FormGroup

  validarEmail: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGroup(){
    return new FormGroup({
      usuario: new FormControl('',[Validators.required, Validators.pattern(this.validarEmail)]),
      contrasenya: new FormControl('', [Validators.required])
    });
  }

  contactForm: FormGroup;

  constructor(private _builder: FormBuilder,private registrarService: RegistrarService) {

    this.signupForm = this._builder.group({
      email: ['',Validators.compose([ Validators.required, Validators.pattern(this.validarEmail)])],
      contrasenya: ['',Validators.compose([ Validators.required])]
    })

    this.contactForm = this.createFormGroup();

   }
  usuario :any;
  user:any;
  ngOnInit(): void {
  }

  mostrarusuario(){
    this.usuario = this.registrarService.listUsuarios().subscribe(usuarios=>{
      this.usuario = usuarios;
      console.log(this.usuario);
    })
  }

  

  add(usuario:string, contrasenya:string ){
    //if (this.contactForm.valid) {
      console.log(usuario);
    this.user ={
      "correo": usuario,
      "contrasenya": contrasenya,
      "updated_at": null ,
      "created_at":null ,
      
  };
    console.log(this.user);
    this.registrarService.addUser(this.user as any).subscribe(users=>{
        this.user=users;
    });
   // }else{
      console.log('No valido');
   // }
    
  }
}
