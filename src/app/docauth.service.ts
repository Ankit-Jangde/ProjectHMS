import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="Ankit"&&password=="ankit123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }

  }

  isUserLoggedIn(){
    console.log("user login")
    let user=sessionStorage.getItem('username');
    console.log(user);
    return !(user==null);

  }

  logOut(){
    console.log("user logout");
    sessionStorage.removeItem('username');
  }
}
