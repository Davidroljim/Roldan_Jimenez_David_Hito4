import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisIncidenciasService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listMisIncidencias(){
    
    return this.http.get<any>(this.url+'/api/incidencias');
  }

  deleteIncidencia(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/incidencias/'+id, this.httpOptions);
    
  }
}
