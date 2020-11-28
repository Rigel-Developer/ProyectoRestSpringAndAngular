import { Injectable } from '@angular/core';
import { Alumno } from '../modelos/alumno';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable ,of,BehaviorSubject} from 'rxjs';
import { map, finalize, tap } from 'rxjs/operators';
import { Horario } from '../modelos/horario';
import { Notas } from '../modelos/notas';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {


  
  private al = new BehaviorSubject<Alumno>(null);
  al$ = this.al.asObservable();

  private urlEndPoint:string ="http://localhost:8080/SW_Notas/session";


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  URLiniciar:string = 'iniciar';
  URLhorarios:string = 'cargarHorarioxAlumno';
  URLNotas:string = 'getNotas';
  constructor(private http:HttpClient) { }

getAlumno(correo:string,contra:string):Observable<any>{
  return  this.http.get<Alumno>(`${this.urlEndPoint}/${this.URLiniciar}/${correo}/${contra}`) 
}

get isDataAlum() {
  return this.al.asObservable();
}

getHorarios(codigo:number):Observable<Horario[]>{
  return  this.http.get<Horario[]>(`${this.urlEndPoint}/${this.URLhorarios}/${codigo}`) 
}

getNotas(codigo:number):Observable<Notas[]>{
  return  this.http.get<Notas[]>(`${this.urlEndPoint}/${this.URLNotas}/${codigo}`) 
}



/*
getCursos(codigo:number):Observable<Horario[]>{
  
}*/




loadAlumno(alumno:Alumno){
  this.al.next(alumno);
  console.log(alumno.dniAlumno)
}

}
