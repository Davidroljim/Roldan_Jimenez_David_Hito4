import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearIncidenciaService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  addIncidencia(incidencia:any): Observable<any>{
    console.log("hola asdfa");
    return this.http.post<any>(this.url+'/api/incidencias',incidencia,this.httpOptions);
  }
}