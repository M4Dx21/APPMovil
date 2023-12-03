import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      if (this.username.toLowerCase() === 'alejandro') {
        this.router.navigate(['/home']);
      } else if (this.username.toLowerCase() === 'diego') {
        this.router.navigate(['/home-profesor']);
      } else {
        console.log('Tipo de usuario desconocido');
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
