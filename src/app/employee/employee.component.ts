import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../appservices/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  EmpForm: FormGroup;
  kamgardata: any; // 3/10 marks 
  constructor(private fb: FormBuilder, private api: EmployeeService) {
    this.EmpForm = this.fb.group({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      dept: new FormControl('', Validators.required),

    })
  }
  

  ngOnInit(): void {
    this.api.sarvkamgar().subscribe((aalelaData) => {
      if (aalelaData) {
        this.kamgardata = aalelaData;
      }
    })
  }
  onSubmit() {
    this.api.addEmployee(this.EmpForm.value).subscribe((res) => {
      if (res) {
        this.EmpForm.reset();
      } else {
        alert("not insert")
      }
    })
  }

}
