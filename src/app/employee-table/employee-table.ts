import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'employee-table',
  imports: [NgFor],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css'
})
export class EmployeeTable implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }
}
