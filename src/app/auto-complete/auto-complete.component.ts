import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/Employee'
import { EmployeeService } from '../services/employeesService';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }
  inputText:string;
  employeeList:Employee[];
  emplyeeResult:Employee[];

  ngOnInit() {
   //this.employeeService.getEmployeeList().subscribe(data=>this.employeeList=data);
    this.employeeList=this.employeeService.employeeList;
    console.log(this.employeeList);


  }
  
  filter(){
    this.emplyeeResult=this.employeeList;
    if(this.inputText.length>=2){
      this.emplyeeResult=Object.assign([], this.employeeList).filter(
        item => item.Name.toLowerCase().indexOf(this.inputText.toLowerCase()) !==-1 ||
         item.WorkTitle.toLowerCase().indexOf(this.inputText.toLowerCase()) !== -1 )
    }
  }

}
