import { Component } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'employee-table',
  imports: [EmployeeTable],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css'
})
export class EmployeeTable {

}
