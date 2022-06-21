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
    return this.http.post('https://mandrillapp.com/api/1.0/messages/send.json',
      {
          key: 'API KEY',
          message: {
          html: '<p>Example HTML content</p>',
          subject: 'example subject',
          from_email: 'message.from_email@example.com',
          from_name: 'Example Name',
          to: [
            {
              email: 'recipient.email@example.com',
              name: 'Recipient Name',
              type: 'to'
            }
          ],
          headers: {
            'Reply-To': 'message.reply@example.com'
          }
        }

      });
  }
}