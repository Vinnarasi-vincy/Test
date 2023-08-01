import { Injectable } from '@angular/core';
import { emploee } from '../model/emploee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }

  employeeList :emploee[] = [
    {id:1,name:'preethi',designation:'tester',Qalification:'B.E',salary:30000,Expear:2},
    {id:2,name:'sonia',designation:'designer',Qalification:'B.E',salary:38000,Expear:3},
    {id:3,name:'rahul',designation:'Developer',Qalification:'B.Tech',salary:40000,Expear:1},
    {id:4,name:'Alia',designation:'tester',Qalification:'B.Tech',salary:28000,Expear:2},
    {id:8,name:'Guna',designation:'designer',Qalification:'B.E',salary:29000,Expear:3},
 ];

getAllEmploee(){
  return this.employeeList;
}

}
