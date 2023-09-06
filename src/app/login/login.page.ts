import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  textBtn = "INGRESAR";
  textUser = "Usuario";
  textPass = "Contraseña";
  desUser = "ingrese Alejandro";
  desPass = "ingrese Valdivia";

  user={
    usuario:"Alejandro",
    apellido:"Valdivia"
  }

    usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
  });

  testclase(){
    this.router.navigate(['/home']);
}

  goToPagina2() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/home'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
