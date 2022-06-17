import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AulaService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  listAula(){
    return this.http.get<any>(this.url+'/api/aula');
  }
}