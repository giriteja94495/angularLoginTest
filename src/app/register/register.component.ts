import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router,private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerForm.reset();
  }

  onRegister() {
    if (this.registerForm.valid) {
      const email = this.registerForm!.get('email')!.value;
      const password = this.registerForm!.get('password')!.value;

      this.authService.register(email, password).subscribe(
        (response) => {
          this.registerForm.reset()
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log("wooo, we fucked up , will be right back");
        }
      );
    }
  }
 navigateToLogin() {
    this.registerForm.reset()
    this.router.navigate(['/login']);
  }

}
