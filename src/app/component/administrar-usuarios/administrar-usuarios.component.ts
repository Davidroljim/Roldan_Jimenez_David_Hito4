import { Component, OnInit } from '@angular/core';
import { RegistrarService } from 'src/app/services/registrar.service';
@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit {

  constructor(private registrarService: RegistrarService) { }
  usuario :any;
  user: any;

  ngOnInit(): void {
    this.mostrarusuario();
  }

  mostrarusuario(){
    this.usuario = this.registrarService.listUsuarios().subscribe(usuarios=>{
      this.usuario = usuarios;
      console.log(this.usuario);
    })
  }

  deleteUser(id:any){
    this.registrarService.deleteUser(id).subscribe(
      res => {
        this.user = this.user.filter((a:any) => a.id ==id);
        this.refresh();
      }
    );
    //this.router.navigateByUrl('/listado');
    
  }

  refresh(): void { window.location.reload(); }
}
