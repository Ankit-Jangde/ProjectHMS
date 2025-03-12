import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {
  username:string='';
  password:string='';

  invalidLogin=false;

  constructor(private r:Router,private s:DocauthService){}

  checkLogin(){
       if(this.s.authenticate(this.username,this.password)){
        this.r.navigate(['doctor']);
        this.invalidLogin=false;
       }
       else{
        this.invalidLogin=true;
        alert("Wrong Credentials");
        this.r.navigate(['home']);
        
       }
  }
}
