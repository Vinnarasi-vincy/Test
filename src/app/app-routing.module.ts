import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PagenotfondComponent } from './pagenotfond/pagenotfond.component';
import { ParentcompontComponent } from './parentcompont/parentcompont.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'sample',component:ParentcompontComponent},
  {path:'**',component:PagenotfondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
