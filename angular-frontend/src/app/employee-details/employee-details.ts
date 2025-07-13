import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeData } from '../employee-data'; // Adjust path if needed
import { Employee } from '../employee'; // Adjust path if needed
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails implements OnInit {
  id!: number;
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private employeeData: EmployeeData,
     private cdr: ChangeDetectorRef
  ) {}

  // ngOnInit(): void {
  //   this.id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.employeeData.getEmployeeById(this.id).subscribe(data => {
  //     this.employee = data;
  //   });
  // }

  ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  console.log("ID from route:", this.id);   // Debug line
  this.employeeData.getEmployeeById(this.id).subscribe(data => {
    console.log("Employee fetched:", data); // Debug line
    this.employee = data;
    this.cdr.detectChanges();  
  });
}

}
