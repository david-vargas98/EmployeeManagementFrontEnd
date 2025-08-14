import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, NgIf],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  errorMessage: string = "";

  constructor(private employeeService: EmployeeService, private router: Router){}

  onSubmit(): void{
    this.employeeService.createEmployee(this.employee)
    .subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = `Error: ${err.status} - ${err.message}`;
      }
    });
  }
}
