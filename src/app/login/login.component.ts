import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface ValidationError {
  required?: boolean;
  emailAddress?: boolean;
  minlength?: { requiredLength: number; actualLength: number };
  // Add other validation properties as needed
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  // Specific getters for each form control
  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.apiService.login(this.loginForm.value).subscribe(
      (success: any) => {
        console.log('User logged in', success);
        localStorage.setItem('id', success.id);
        this.router.navigate(['/home']);
      },
      (error: any) => console.error('Login failed', error),
    );
  }

  // Helper functions to get the form control errors
  getControlErrors(controlName: string): ValidationError | null {
    const control = this.loginForm.get(controlName);
    return control?.errors as ValidationError | null;
  }
}
