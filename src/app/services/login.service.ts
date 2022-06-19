import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = 'http://localhost:8000';
  

  constructor(private http: HttpClient) { }
  
  listUsuarios(){
    return this.http.get<any>(this.url+'/api/usuarios');
  }
}
