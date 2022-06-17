import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  find(id:number): Observable<any>{
    return this.http.get(this.url+'/api/usuarios/'+id);
  }

  update(id: number, user: any): Observable<any>{
    console.log("llega2",user);
    return this.http.put(this.url+'/api/usuarios/'+id,user,this.httpOptions);

  }


}
