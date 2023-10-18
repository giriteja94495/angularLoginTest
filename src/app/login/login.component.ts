import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { log } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private authService: AuthService) { }
  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  onLogin(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log("Bro enter proper details");
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}

