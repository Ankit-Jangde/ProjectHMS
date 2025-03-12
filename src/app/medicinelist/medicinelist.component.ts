import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {
     constructor(private s:MedicineService,private r:Router){}
     
     ngOnInit(){
      this.getmedicine();
     }
     medicine:Medicine[]=[];
     getmedicine(){
      this.s.getMedicines().subscribe(data=>{
        this.medicine=data;
      })
     }

     update(id:number){
       this.r.navigate(['updateM',id]);
     }

     delete(id:number){
        this.s.deleteById(id).subscribe(data=>{
          console.log(data);
          this.getmedicine();
        })
     }
}
