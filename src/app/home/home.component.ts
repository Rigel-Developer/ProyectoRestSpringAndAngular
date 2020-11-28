import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/alumno';
import { AlumnoService } from '../alumno/alumno.service';
import { LoginComponent } from '../login/login.component';
import { Horario } from '../modelos/horario';
import { Notas } from '../modelos/notas';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  


  userCredentials:string;
  userCarrera:string;
  al:Alumno;
  codigo:number;
  isLoggedIn$: Observable<boolean>; 
  alumnoXHorario:Horario[] = []
  alumnoXNotas:Notas[] = []

  constructor(private authService: AuthService,private alumno:Alumno,private alumnoService:AlumnoService){}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    this.alumnoService.al$.subscribe((data) =>{
      this.codigo = data?.codigoAlumno;
       this.al = data as Alumno
      console.log(this.codigo)
      
      });
      

    
    }

 
  onLogout(){
    this.authService.logout();                      // {3}
  }


  getAlumnoObser(alu:Alumno){
    this.al = alu;
  }
  
  getHorarios(){
    this.alumnoService.getHorarios(this.codigo).subscribe(
      horarios => this.alumnoXHorario = horarios
    )
  }

  getNotas(){
    this.alumnoService.getNotas(this.codigo).subscribe(
      horarios => this.alumnoXNotas = horarios
    )
  }



 
}
