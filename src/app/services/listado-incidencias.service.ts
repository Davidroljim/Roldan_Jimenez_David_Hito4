import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoIncidenciasService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listIncidencias(){
    
    return this.http.get<any>(this.url+'/api/incidencias');
  }

  deleteIncidencia(id: any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/incidencias/'+id, this.httpOptions);
    
  }

  find(id:number): Observable<any>{
    return this.http.get(this.url+'/api/incidencias/'+id);
  }

  update(id: number, incidencia: any): Observable<any>{
    console.log("llega2",incidencia);
        return this.http.put(this.url+'/api/incidencias/'+id,incidencia,this.httpOptions);
    
      }
}
