import { Component } from '@angular/core';
import { SignFormComponent } from '../../components/sign-form/sign-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    SignFormComponent,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/main-menu']);
  }
}
