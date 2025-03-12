import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Patient} from './patient'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

   baseurl ="http://localhost:8080/api/v1";

  getPatientList():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.baseurl}/getall`)
  }

  deleteById(id:number):Observable<object>{
    return this.http.delete(`${this.baseurl}/delete/${id}`)
  }

  createPatient(Patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.baseurl}/insert`,Patient)
  }

  getPatientById(id:number):Observable<Patient>{
    return this.http.get<Patient>(`${this.baseurl}/getId/${id}`);
  }

  updatePatient(id:number,patient:Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.baseurl}/update/${id}`,patient);
  }
}
