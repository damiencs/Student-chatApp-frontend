import { Component, OnInit } from '@angular/core';
import { SignFormComponent } from '../../components/sign-form/sign-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';
import { userSignUpModel } from '../../models/userSignUp.model';
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
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private signUpService: SignUpService) {}
  ngOnInit(): void {}

  onFormSubmit(formData: userSignUpModel) {
    this.signUpService.createUser(formData).subscribe(
      (response: any) => {
        this.router.navigate(['/main-menu']);
      },
      (error: any) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
