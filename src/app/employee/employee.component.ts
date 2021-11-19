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
  kamgardata: any;
  deleteEmployee: any;
  poupband: boolean = false;
  constructor(private fb: FormBuilder, private api: EmployeeService) {
    this.EmpForm = this.fb.group({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      dept: new FormControl('', Validators.required),

    })
  }


  ngOnInit(): void {
    this.loadalldata();
  }
  loadalldata() {
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
        this.loadalldata();
      } else {
        alert("not insert")
      }
    })
  }
  OnDeleteManus(id:any)
  {
    console.log(id,"id ");
    
    this.api.deleteEmployee(id).subscribe((res) => {
      if (res) { 
        alert("succesess");
        this.loadalldata();
      } else {
        alert("not")
      }
    })

  }
  UpdateEmployee(id:any){
    this.api.UpdateEmployee(id,this.EmpForm.value).subscribe((naynesh)=>{
      if(naynesh){
        alert("ha mana kade data una")
      }else{
        alert("oo bho mana kade data nahi una")
      }
    })
  }

}
  
    
    

