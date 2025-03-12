import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    role: 'user',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const { username, email, password, role } = this.form;

    this.authService.register(username, email, password, [role]).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
    });
  }
}
