import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AddloginComponent } from './addlogin/addlogin.component';
import { AdminauthService } from './adminauth.service';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthService } from './docauth.service';
import { DoctorauthguardService } from './doctorauthguard.service';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
   path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]
  },
  {
    path:'appointment',component:AppointmentComponent,canActivate:[AdminauthguardService]
  },
  {
    path:'addappointment',component:CreateAppointmentComponent,canActivate:[AdminauthguardService]
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'doctor',component:DocdashComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'createpatient',component:CreatePatientComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'medicinelist',component:MedicinelistComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'createMedicine',component:CreateMedicineComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'updatep/:id',component:UpdatePatientComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'view/:id',component:ViewPatientComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'updateM/:id',component:UpdateMedicineComponent,canActivate:[DoctorauthguardService]
  },
  {
    path:'doclogin',component:DocloginComponent
  },
  {
    path:'adlogin',component:AddloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
