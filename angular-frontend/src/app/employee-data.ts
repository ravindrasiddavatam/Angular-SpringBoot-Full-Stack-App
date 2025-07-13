import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeData {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
}

updateEmployee(employee: Employee): Observable<Employee> {
    // Assuming employee.id exists
    return this.httpClient.put<Employee>(`${this.baseURL}/${employee.id}`, employee);
  }

//   deleteEmployee(id: number) {
//   return this.httpClient.delete(`${this.baseURL}/${id}`);
// }

// deleteEmployee(id: number): void {
//   this.employees = this.employees.filter(emp => emp.id !== id);
// }

deleteEmployee(id: number): Observable<any> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}



}
