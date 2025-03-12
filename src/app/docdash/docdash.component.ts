import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
    constructor(private s:PatientService,private r:Router,private s1:DocauthService){}

    ngOnInit(){
      this.getPatients();
    }

    patients:Patient[]=[];

    getPatients(){
      this.s.getPatientList().subscribe(data=>{
        this.patients=data;
      })
    }

    update(id:number){
      this.r.navigate(['/updatep',id])
    }

    delete(id:number){
      this.s.deleteById(id).subscribe(data=>{
        console.log(data);
        this.getPatients();
      })

    }
    view(id:number){
      this.r.navigate(['/view',id]);
    }
   
    logOut(){
      this.s1.logOut();
      this.r.navigate(['home']);
    }
    
}
