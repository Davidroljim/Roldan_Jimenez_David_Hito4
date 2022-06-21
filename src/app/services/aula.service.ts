import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AulaService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listAula(){
    return this.http.get<any>(this.url+'/api/aula');
  }

  enviarMail(email:string, messages:string){
    console.log("Email enviar");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xnqwyney',
        { name: "david.roldan.jimenez.al@iespoligonosur.org", replyto: email, message: messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
  }
}