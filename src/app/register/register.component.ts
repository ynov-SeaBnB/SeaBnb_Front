import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  signUpForm: FormGroup = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordComplexityValidator.bind(this),
        ],
      ],
      confirmPassword: ['', Validators.required],
      birthDate: ['', [Validators.required, this.ageValidator]],
    },
    {
      validators: [this.passwordMatchValidator],
    },
  );

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  onSubmit() {
    if (this.signUpForm.valid) {
      const userData = {
        // @ts-ignore
        name: this.signUpForm.get('firstName').value,
        // @ts-ignore
        firstName: this.signUpForm.get('lastName').value,
        // @ts-ignore
        birthDate: this.signUpForm.get('birthDate').value,
        // @ts-ignore
        emailAddress: this.signUpForm.get('email').value,
        // @ts-ignore
        password: this.signUpForm.get('password').value,
        creationDate: new Date().toISOString(), // CURRENT DATE
      };

      console.log('Sending user data to backend:', userData);

      // Call your API service to register the user
      this.apiService.register(userData).subscribe(
        (success: any) => {
          console.log('User registered', success);
          localStorage.setItem('id', success.id);
          this.router.navigate(['/home']);
        },
        (error: any) => console.error('Registration failed', error),
      );
    }
  }

  private passwordComplexityValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
    console.log('passwordValid', passwordValid);
    return passwordValid ? null : { passwordComplexity: true };
  }

  private passwordMatchValidator(
    formGroup: AbstractControl,
  ): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMatch: true };
  }

  private ageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassedThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!isBirthdayPassedThisYear) {
      age--;
    }

    return age >= 18 ? null : { underage: true };
  }
}
