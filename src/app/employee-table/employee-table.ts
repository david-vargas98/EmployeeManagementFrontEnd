import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee-service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-table',
  imports: [NgFor],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css'
})
export class EmployeeTable implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (/*response*/) => {
        this.employees = this.employees.filter(e => e.id !== id);
      },
      error: (err) => {
        console.log(`Error: ${err} while deleting employee.`);
      }
    })
  }

  editEmployee(id: number): void{
    this.router.navigate(['/edit', id])
  }
}
