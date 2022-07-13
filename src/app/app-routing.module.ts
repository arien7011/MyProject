import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEMployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'edit-employee', pathMatch: 'full' },
  { path: "employee-list", component:EmployeeListComponent },
  { path: "edit-employee", component:EditEMployeeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
