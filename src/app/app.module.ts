import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProdctComponent } from './prodct/prodct.component';
import { PagenotfondComponent } from './pagenotfond/pagenotfond.component';
import { EmployeeserviceService } from './services/employeeservice.service';
import { FormsModule } from '@angular/forms';
import { ParentcompontComponent } from './parentcompont/parentcompont.component';
import { ChildcompontComponent } from './childcompont/childcompont.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    MainComponent,
    HomeComponent,
    ProdctComponent,
    PagenotfondComponent,
    ParentcompontComponent,
    ChildcompontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [MainComponent]
})
export class AppModule { }
