import { Component,OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  isLoggedIn$: Observable<boolean>; 
  constructor(private authService: AuthService){}
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
  onLogout(){
    this.authService.logout();                      // {3}
  }

}
