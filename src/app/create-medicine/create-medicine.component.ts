import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
     constructor(private s:MedicineService,private r:Router){}

     

     Medicine:Medicine = new Medicine();
     saveMedicine(){
      this.s.createMedicine(this.Medicine).subscribe(data=>{
        console.log(data);
        this.goToMedicineList();
      })
     }
    
     onSubmit(){
      this.saveMedicine()
     }

     goToMedicineList(){
        this.r.navigate(['/medicinelist'])
     }

}
