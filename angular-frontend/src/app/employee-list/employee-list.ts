//import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeData } from '../employee-data';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];

   constructor(private employeeData: EmployeeData,
      private cdr: ChangeDetectorRef,private router: Router
   ) { }

  ngOnInit(): void {
    this.getEmployees();
  }
   private getEmployees(): void {
  console.log('Fetching employees...');
  this.employeeData.getEmployeesList().subscribe({
    next: data => {
      console.log('Employee data:', data);
      this.employees = data;
      this.cdr.detectChanges();
    },
    error: err => {
      console.error('Error fetching employees:', err);
    }
  });


}

 employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
 updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

//   deleteEmployee(id: number): void {
//   if (confirm('Are you sure you want to delete this employee?')) {
//     this.employeeData.deleteEmployee(id).subscribe({
//       next: () => {
//         // Remove employee from local array to instantly update UI
//         this.employees = this.employees.filter(emp => emp.id !== id);
//         // Optionally, show a success message
//       },
//       error: err => {
//         console.error('Error deleting employee:', err);
//         // Optionally, show an error message
//       }
//     });
//   }
// }

// deleteEmployee(id: number): void {
//   if (confirm('Are you sure you want to delete this employee?')) {
//     this.employeeData.deleteEmployee(id).subscribe({
//       next: () => {
//         // Remove the deleted employee from the local list
//         this.employees = this.employees.filter(emp => emp.id !== id);
//         // Optionally show a success message
//       },
//       error: err => {
//         console.error('Error deleting employee:', err);
//         // Optionally show an error message
//       }
//     });
//   }
// }

// deleteEmployee(id: number): void {
//   if (confirm('Are you sure you want to delete this employee?')) {
//     this.employeeData.deleteEmployee(id).subscribe({
//       next: () => {
//         // Update the UI instantly
//         this.employees = this.employees.filter(emp => emp.id !== id);
//       },
//       error: err => {
//         console.error('Error deleting employee:', err);
//       }
//     });
//   }
// }

deleteEmployee(id: number): void {
  if (confirm('Are you sure you want to delete this employee?')) {
    this.employeeData.deleteEmployee(id).subscribe({
      next: () => {
        console.log('Before:', this.employees.map(e => e.id));
        this.employees = this.employees.filter(emp => emp.id !== id);
        console.log('After:', this.employees.map(e => e.id));
        this.cdr.detectChanges(); // force UI update if necessary
      },
      error: err => {
        console.error('Error deleting employee:', err);
      }
    });
  }
}




}
