import { Component, OnInit } from '@angular/core';

import { IEmployee } from '../Model/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employees: IEmployee[]

  constructor() {
    this.Employees = [
      { code: 101, name: "Arien", gender: "male", annualSalary: 300000, dateOfBirth: "1/1/2001" },
      { code: 102, name: "sid", gender: "male", annualSalary: 400000, dateOfBirth: "1/1/2001" },
      { code: 103, name: "shreya", gender: "female", annualSalary: 500000, dateOfBirth: "1/1/2001" },
      { code: 104, name: "vishal", gender: "male", annualSalary: 600000, dateOfBirth: "1/1/2001" },
      { code: 105, name: "shivam", gender: "male", annualSalary: 200000, dateOfBirth: "1/1/2001" }
    ]
  }

  ngOnInit(): void {
  console.log(this.Employees.values);
 
  }

}
