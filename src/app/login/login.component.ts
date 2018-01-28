import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin;
  password;
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(){
    if(this.userLogin=="admin" && this.password=="admin"){
      this.userService.setUsserLoggedIn()
      this.router.navigate(["/dashboard"])
    }
  }
}
