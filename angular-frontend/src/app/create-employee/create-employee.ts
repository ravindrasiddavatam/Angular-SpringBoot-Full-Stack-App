import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeData } from '../employee-data';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css'
})
export class CreateEmployee implements OnInit {
  employee: Employee =  new Employee(0, '', '', ''); // You can initialize with empty or default values

  constructor(private employeeService: EmployeeData,
    private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic here
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
