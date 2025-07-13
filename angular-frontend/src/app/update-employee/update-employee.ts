import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeData } from '../employee-data'; // or your service location
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {
  employee = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeData: EmployeeData,
    private cdr: ChangeDetectorRef 
  ) {}

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   if (id) {
  //     this.employeeData.getEmployeeById(id).subscribe({
  //       next: data => (this.employee = data),
  //       error: err => console.error('Error fetching employee:', err)
  //     });
  //   }
  // }

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id) {
    this.employeeData.getEmployeeById(id).subscribe({
      next: data => {
        this.employee = data;
        this.cdr.detectChanges();  // <-- This line forces the UI to refresh immediately
      },
      error: err => console.error('Error fetching employee:', err)
    });
  }
}

  onSubmit() {
    this.employeeData.updateEmployee(this.employee).subscribe({
      next: data => {
        console.log('Employee updated:', data);
        this.router.navigate(['/employees']); // Go back to list
      },
      error: err => {
        console.error('Error updating employee:', err);
      }
    });
  }
}
