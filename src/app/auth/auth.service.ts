import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  //Observables para mostrar las llamadas
  private mostrarHomeAside:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private mostrarListaHorarios:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private mostrarListaNotas:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private mostrarListaCursos:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isMostrarHome(){
    return this.isMostrarHome.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  showHome(){
    this.mostrarHomeAside.next(true);
    this.router.navigate(['/escuela']);
  }
}
