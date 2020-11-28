import { Injectable } from '@angular/core';
import { Alumno } from '../modelos/alumno';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  private urlEndPoint:string ="http://localhost:8080/SW_Notas/session";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  URLiniciar:string = 'iniciar';
  constructor(private http:HttpClient) { }

getAlumno(correo:string,contra:string):Observable<Alumno>{
  return this.http.get<Alumno>(`${this.urlEndPoint}/${this.URLiniciar}/${correo}/${contra}`)
}



}
