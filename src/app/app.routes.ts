import { Routes } from '@angular/router';
import { EmployeeTable } from './employee-table/employee-table'; // we import components that we...
import { EmployeeForm } from './employee-form/employee-form'; // wanna render/show

// a route consists of a path and the component to render
export const routes: Routes = [
    {path: '', component: EmployeeTable},
    {path: 'create', component: EmployeeForm},
    {path: 'employees', redirectTo: '', pathMatch: 'full'}
];
