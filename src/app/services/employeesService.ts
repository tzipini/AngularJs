
/* import { Http } from "@angular/http"
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Observable } from "rxjs" 
import "rxjs/add/operator/map"
import "rxjs/add/operator/toPromise"
import {map} from "rxjs/operators"; */
import { Injectable, OnInit } from "@angular/core";
import { Employee } from "../models/Employee";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class EmployeeService {
    constructor(public httpclient: HttpClient) {
        this.getEmployeeList();
    }
     employeeList:Employee[];

     getEmployeeList(){
        this.employeeList=[
            {ImageUrl:"assets/img/Bar.jpg",Name:"Bar Refali",WorkTitle:"programmer"},
            {ImageUrl:"assets/img/Assaf.jpg" ,Name:"Assi Azar",WorkTitle:"manager"},
            {ImageUrl:"assets/img/Maya.jpg",Name:"Maya Boskila",WorkTitle:"director"}];
           return this.httpclient.get("http://localhost:2929/api/Employees/GetEmployeeList");//.pipe(map(data => {
           // this.employeeList = data.json() as Employee[];
           // return data.json() as Employee[];//angular4
        //}));   
    }
    
}