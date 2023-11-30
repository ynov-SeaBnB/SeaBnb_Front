import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.signUpForm.valid) {
      //a faire
    } else {
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
