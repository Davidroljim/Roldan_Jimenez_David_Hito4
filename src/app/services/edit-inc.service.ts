import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditIncService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  find(id:number): Observable<any>{
    return this.http.get(this.url+'/api/incidencias/'+id);
  }

  update(id: number, incidencia: any): Observable<any>{
console.log("llega2",incidencia);
    return this.http.put(this.url+'/api/incidencias/'+id,incidencia,this.httpOptions);

  }
}
