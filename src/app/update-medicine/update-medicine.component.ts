import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {
   medicine:Medicine=new Medicine();
   id:number=0;

   constructor(private s:MedicineService,private act:ActivatedRoute,private r:Router){}

   ngOnInit(){
    this.id=this.act.snapshot.params['id'];
    this.s.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
   }
   onSubmit(){
      this.s.updateMedicineById(this.id,this.medicine).subscribe(data=>{
        console.log(data);
        this.goToMedicineList();
      })
   }

   goToMedicineList(){
    this.r.navigate(['/medicinelist']);
   }
}
