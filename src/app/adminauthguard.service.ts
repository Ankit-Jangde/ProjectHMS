import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor(private s:AdminauthService,private r:Router) { }

  canActivate(){
    if(this.s.isUserLoggedIn()){
         return true;
    }
    else{
      this.r.navigate(['adlogin']);
      return false;
    }
  }
}
