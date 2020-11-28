import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';
import { AlumnoService } from '../alumno/alumno.service';
import { Alumno } from '../modelos/alumno';
import { HomeComponent } from '../home/home.component';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  private alum:Alumno;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alumnoService:AlumnoService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.alumnoService.al$.subscribe(data => this.alum = data);
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }



  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.valid) {
      this.alumnoService.getAlumno(this.f.userName.value,this.f.password.value). 
    subscribe(
        alu =>{
          this.alum = alu 
           this.alumnoService.loadAlumno(alu);
        },
        error =>{
          this.error = error;
        }
      );

      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
