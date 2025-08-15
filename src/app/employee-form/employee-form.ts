import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee-service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, NgIf],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit{

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  isEditing: boolean = false;

  errorMessage: string = "";

  constructor(
    private employeeService: EmployeeService, 
    private router: Router, // it's for navigation
    private route: ActivatedRoute // current root (where user is located)
  ){}

  // Here we check if we have a parameter (id) for updating or not
  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');

      if(id){
        // editing employee
        this.isEditing = true;

        this.employeeService.getEmployeeByID(Number(id)).subscribe({
          next:(result) => this.employee = result,
          error: (err) => this.errorMessage = `Error: ${err.status} - ${err.message}`
        });
      }
    });
  }

  onSubmit(): void{

    if(this.isEditing){
      this.employeeService.editEmployee(this.employee)
      .subscribe({
        next: () => {
          this.router.navigate(["/"])
        },
        error: (err) => {
          this.errorMessage = `Error while updating : ${err.status} - ${err.message}`
        }
      })
    } else {  
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
}
