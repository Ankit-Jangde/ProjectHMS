import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
         constructor(private s:PatientService,private s1:AdminauthService,private r:Router){}
         
         ngOnInit(){
          this.getPatients();
         }
         patients:Patient[]=[];
         getPatients(){
          this.s.getPatientList().subscribe(data=>{
              this.patients=data;
          })
         }

         delete(id:number){
           this.s.deleteById(id).subscribe(data=>{
            console.log(data);
            this.getPatients()
           })
         }

         logout(){
           this.s1.logOut();
           this.r.navigate(['home']);
         }
}
