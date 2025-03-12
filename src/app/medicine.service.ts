import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  private baseurl="http://localhost:8080/api/v3"

  getMedicines():Observable<Medicine[]>{
   return this.http.get<Medicine[]>(`${this.baseurl}/getAll`)
  }

  createMedicine(Medicine:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(`${this.baseurl}/insert`,Medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.http.get<Medicine>(`${this.baseurl}/getid/${id}`);
  }

  updateMedicineById(id:number,medicine:Medicine):Observable<Object>{
    return this.http.put<Medicine>(`${this.baseurl}/update/${id}`,medicine);
  }

  deleteById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseurl}/delete/${id}`);
  }
}
