import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private cookie:CookieService) {}

  iniciar:any;
  user:any;
 
 ngOnInit(): void {
  
   this.iniciar = this.cookie.get('tipo');
   this.user = this.cookie.get('email');
   console.log(this.cookie.get('email'));
 }

 deleteCookie(){
  this.cookie.deleteAll();
  this.refresh();
 }

 refresh(): void { window.location.reload(); }
  title = 'proyecto-FCT';
}
