import { Injectable } from '@angular/core';
import { employee } from '../appmodels/employee.models';
import
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:3000/employee';

  constructor(private http: httpClient) { }
  addEmployee(emp:employee){
    return this.http.post(this.url, emp);
  }
}
