import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hacker = false

  constructor(private formBuilder: FormBuilder,private router:Router,private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm!.get('email')!.value;
      const password = this.loginForm!.get('password')!.value;
      this.authService.login(email, password).subscribe(
        (res) => {
          if(res){
            this.hacker = false;
            this.loginForm.reset();
            this.router.navigate(['/home']);
          }
          else{

            this.loginForm.reset();
          }
        },
        () => {
          this.hacker = true;
          this.loginForm.reset();
        }
      );
    }
  }
  navigateToRegsiter(){
    this.loginForm.reset();
    this.router.navigate(['/register']);
  }

}

