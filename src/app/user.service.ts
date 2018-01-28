import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private usserLoggedIn=false;
    private username="";

  constructor() { this.usserLoggedIn=false }
  setUsserLoggedIn(){
    this.usserLoggedIn=true;
  }

  getUsserLoggedIn(){
    return this.usserLoggedIn;
  }

}
