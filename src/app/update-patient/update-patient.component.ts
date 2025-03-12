import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {
  id:number=0;
  constructor(private s:PatientService,private r:ActivatedRoute,private r1:Router){}
   patient:Patient=new Patient();


   ngOnInit(){
    this.id=this.r.snapshot.params['id'];
    this.s.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
    })
   }
   onSubmit(){
    this.s.updatePatient(this.id,this.patient).subscribe(data=>{
      console.log(data);
      this.goToDocdash();
    })
     
   }

   goToDocdash(){
     this.r1.navigate(['/doctor'])
   }
}
