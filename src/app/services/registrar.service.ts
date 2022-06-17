import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listUsuarios(){
    return this.http.get<any>(this.url+'/api/usuarios');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addUser(user:any): Observable<any>{
    console.log("hola usuarios");
    return this.http.post<any>(this.url+'/api/usuarios',user,this.httpOptions);
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/usuarios/'+id, this.httpOptions);
    
  }
}
