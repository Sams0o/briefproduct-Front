import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginUser';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: LoginUser = {
    email: '',
    password: '',
  };

  isFormValidate = false;
  loginInvalid = false;

  constructor(private userService: UserService, private router: Router) {}

  connection() {
    this.isFormValidate = true;
    this.loginInvalid = false;

    this.userService.loginUser(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        alert('Connexion réussi !');
        this.router.navigate(['/products']);
      },
      error: (error) => {
        console.error(
          "Une erreur s'est produite lors de la connexion :",
          error
        );
        this.loginInvalid = true;
      },
    });
  }
}