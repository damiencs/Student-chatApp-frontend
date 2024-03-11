import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from '../../../components/login-form/login-form.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { loginModel } from '../../../models/login.model';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    LoginFormComponent,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage: string | undefined;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  onFormSubmit(formData: loginModel) {
    this.loginService.createUser(formData).subscribe(
      (response: any) => {
        this.router.navigate(['/main-menu']);
      },
      (error: any) => {
        this.errorMessage =
          error || 'An error occurred. Please try again later.';
        this.snackBar.open(error, 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar'], // Custom CSS class
        });
      }
    );
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}
