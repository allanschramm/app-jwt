import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/interfaces/login-model';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  credentials!: LoginModel;

  constructor(private router: Router, private service: CredentialsService) { }

  ngOnInit(): void {
    this.credentials = { username: '', password: ''};
  }

  login(credentials: LoginModel) : void {
    this.service.validate(credentials)
      .subscribe({
        next: (response) => {
          const token = response.token;
          console.log(token);
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        error: (erro: HttpErrorResponse) => this.invalidLogin = true
    });
  } 
}
