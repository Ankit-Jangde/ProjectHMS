import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private baseurl="http://localhost:8080/api/v2";

  getAllAppointment():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseurl}/getAll`)
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(`${this.baseurl}/insert`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.http.delete(`${this.baseurl}/delete/${id}`,)
  }
}
