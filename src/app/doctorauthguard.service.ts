import { Injectable } from '@angular/core';
import { DocauthService } from './docauth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthguardService implements CanActivate{

  constructor(private s:DocauthService,private r:Router) { }

  canActivate() {
    if(this.s.isUserLoggedIn()){
      return true;
    }
    else{
      this.r.navigate(['doclogin']);
      return false;
    }
    
  }
}
