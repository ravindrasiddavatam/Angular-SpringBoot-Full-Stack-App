# Angular + Spring Boot Full Stack Employee Management Application

This project is a complete full-stack web application for managing employee records, built with the latest versions of **Angular** (using Standalone Components and modern routing) for the frontend and **Spring Boot** for the backend REST API. The application demonstrates real-world enterprise patterns including CRUD operations, modular architecture, routing, and integration between Angular and Spring Boot using RESTful services.

---

## Features

- **Employee List View:**  
  - Display all employees in a responsive Bootstrap-styled table.
  - View, update, or delete employee records directly from the list.

- **Create Employee:**  
  - Add a new employee using a simple, validated form.
  - Instant feedback on success or error.

- **Update Employee:**  
  - Edit existing employee details using a pre-populated form.

- **View Employee Details:**  
  - See complete details for any employee in a dedicated view.

- **Delete Employee:**  
  - Remove employees with confirmation to prevent accidental deletions.
  - UI updates instantly on deletion (no need to refresh).

- **Modern Angular Practices:**  
  - Uses Standalone Components (Angular 15+).
  - Modern routing and modular imports.
  - Data-binding with FormsModule.
  - HTTP Client integration with best practices.

- **Spring Boot REST API:**  
  - Exposes secure endpoints for all CRUD operations.
  - Handles CORS for frontend-backend communication.
  - Uses JPA/Hibernate for data persistence.

---

## Tech Stack

- **Frontend:**  
  - Angular (latest) with Standalone Components
  - TypeScript
  - Bootstrap 4/5 for styling

- **Backend:**  
  - Spring Boot (latest)
  - Spring Data JPA & Hibernate
  - MySQL (or H2 for development/testing)

---

## Getting Started

### Prerequisites

- Node.js & npm
- Angular CLI
- Java 17+ (or your Spring Boot compatible version)
- Maven
- MySQL database (or use H2 for testing)
- Git

### Backend Setup (Spring Boot)

1. Clone the repo:
    ```sh
    git clone https://github.com/ravindrasiddavatam/Angular-SpringBoot-Full-Stack-App.git
    ```
2. Navigate to the backend folder and configure `application.properties` with your database info.
3. Build and run:
    ```sh
    mvn spring-boot:run
    ```
4. Backend will run on `http://localhost:8080/`

### Frontend Setup (Angular)

1. Navigate to the frontend directory:
    ```sh
    cd angular-frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Run the Angular app:
    ```sh
    ng serve
    ```
4. Frontend will run on `http://localhost:4200/` (or a port you choose).

### API Endpoints

- `GET /api/v1/employees` - List all employees
- `POST /api/v1/employees` - Create new employee
- `GET /api/v1/employees/{id}` - Get employee by ID
- `PUT /api/v1/employees/{id}` - Update employee
- `DELETE /api/v1/employees/{id}` - Delete employee

---

## Screenshots

> _Add screenshots here to show list, create, update, and view features._

---

## Troubleshooting

- If you see CORS issues, ensure the Spring Boot backend uses `@CrossOrigin` on controllers.
- For "blank screen" in Angular, check browser dev tools for errors and make sure APIs are reachable.
- Ensure both backend and frontend are running on correct ports.

---

## License

This project is licensed under the MIT License.

---

## Author

- [Ravindra Siddavatam](https://github.com/ravindrasiddavatam)

---

*Feel free to fork, improve, or suggest enhancements!*
