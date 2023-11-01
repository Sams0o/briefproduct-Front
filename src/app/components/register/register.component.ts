import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    admin: false,
  };

  isFormSubmit = false;
  registrationValid = true;

  constructor (
    private userService: UserService,
    private router: Router,
  ) {}

  registration(registerUserForm: NgForm) {
    this.isFormSubmit = true;

    if(registerUserForm.valid) {
      this.userService.registerUser(this.user).subscribe({
        next: (res) => {
          this.router.navigate(['/admin/login']);
          alert('Enregistrement réussi !');
        },
        error: (error) => {
          this.registrationValid = false;
          console.error(
            "Une erreur est survenue lors de l'enregistrement :",
            error
          );
        },
      })
    }
  }
}
