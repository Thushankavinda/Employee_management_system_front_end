import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-empoyee-details',
  templateUrl: './empoyee-details.component.html',
  styleUrls: ['./empoyee-details.component.css']
})
export class EmpoyeeDetailsComponent implements OnInit {

  id!: number;
  employee!: Employee
  constructor(private  route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    });
  }

}
