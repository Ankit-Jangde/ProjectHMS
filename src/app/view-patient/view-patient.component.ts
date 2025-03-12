import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
     id:number=0;
     patient:Patient= new Patient();
     constructor(private s:PatientService,private act:ActivatedRoute){}
     
     ngOnInit(){
      this.id=this.act.snapshot.params['id'];
      this.s.getPatientById(this.id).subscribe(data=>{
       this.patient=data;
      })
     }

}
