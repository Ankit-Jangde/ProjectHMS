import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  

   constructor(private s:AppointmentService){}
  
   ngOnInit(){
     this.getAppointment();
   }
   appointments:Appointment[]=[];
   getAppointment(){
    this.s.getAllAppointment().subscribe(data=>{
     this.appointments=data;
    })
   }

   delete(id:number){
     this.s.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointment();
     })
   }
}
