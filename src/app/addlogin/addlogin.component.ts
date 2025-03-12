import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlogin',
  templateUrl: './addlogin.component.html',
  styleUrls: ['./addlogin.component.css']
})
export class AddloginComponent {
     username2:string='';
     password:string='';
     invalidLogin=false;

     constructor(private s:AdminauthService,private r:Router){}

     checkLogin(){
           if(this.s.authenticate(this.username2,this.password)){
            this.r.navigate(['/admin']);
            this.invalidLogin=false;
           }
           else{
            this.invalidLogin=true;
            alert("Wrong Credentials")
            this.r.navigate(['/home']);
           }
     }

     
}
