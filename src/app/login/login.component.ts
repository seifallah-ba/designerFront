import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService,
                  private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem("token") === "true")
      this.router.navigate(['/stepper']);

  }

  handleLogin() {
    this.authService.connect(this.email, this.password).subscribe((result) => {
      if(result){
        localStorage.setItem("token","true");
        this.router.navigate(['/stepper']);
        this.authService.userLoggedIn$.next(result);
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful';
      }else{
        this.invalidLogin = true;
        this.loginSuccess = false;
      }
    });
  }

}