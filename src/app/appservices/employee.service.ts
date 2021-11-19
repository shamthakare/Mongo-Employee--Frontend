import { Injectable } from '@angular/core';
import { employee } from '../appmodels/employee.models';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = `http://localhost:3000/employee`;

  constructor(private http: HttpClient) { }

  addEmployee(emp: employee) {
    return this.http.post(this.url, emp);
  }
  sarvkamgar() {
    return this.http.get(this.url);
  }
  deleteEmployee(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  UpdateEmployee(id: any, emp: employee) {
    return this.http.put(`${this.url}/${id}`, emp)
  }
}