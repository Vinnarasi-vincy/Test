import { Component } from '@angular/core';
import { EmployeeserviceService } from '../services/employeeservice.service';
import { emploee } from '../model/emploee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
empList :emploee[]=[];

constructor(private _empService :EmployeeserviceService){}

ngOnInit(){
this.empList=this._empService.getAllEmploee();
}

}
