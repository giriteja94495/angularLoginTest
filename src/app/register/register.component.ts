import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }
  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }
  onRegister(username: string, password: string) {
    this.authService.register(this.username, password).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log("wooo, we fucked up , will be right back");
      }
    );
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
