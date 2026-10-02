# PulseCRM

A full-stack Customer Relationship Management system built with Spring Boot and React, featuring JWT authentication, role-based access, and complete CRUD workflows for managing customers, leads, tasks, and sales.

## Tech Stack

**Backend:** Java 21, Spring Boot, Spring Security, Spring Data JPA, MySQL, JWT (jjwt)
**Frontend:** React.js, React Router, Axios, Vite
**Tools:** Maven, Postman, Swagger/OpenAPI

## Features

- JWT-based authentication (register, login, token validation via custom security filter)
- Password encryption using BCrypt
- Role-based users (Admin, Sales)
- Full CRUD for Customers, Leads, Tasks, and Sales
- Business workflow logic — e.g. Lead status transitions (New → Contacted → Converted/Lost), closed-deal restrictions
- Protected API routes and protected frontend routes
- Custom-designed responsive UI (no UI framework used)

## Setup Instructions

### Backend
1. Navigate to `crm-backend/crm-backend`
2. Create a MySQL database named `crm_db`
3. Update `src/main/resources/application.properties` with your MySQL username/password
4. Run: `./mvnw spring-boot:run`
5. Backend runs on `http://localhost:8080`
6. API docs available at `http://localhost:8080/swagger-ui.html`

**Note:** A default admin account is created automatically on first run:
`admin@pulsecrm.com` / `Admin@123`

### Frontend
1. Navigate to `crm-frontend`
2. Run: `npm install`
3. Run: `npm run dev`
4. Frontend runs on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/register | Register a new user |
| POST | /api/login | Login, returns JWT token |
| GET/POST/PUT/DELETE | /api/customers | Customer CRUD |
| GET/POST/PUT/DELETE | /api/leads | Lead CRUD |
| GET/POST/PUT/DELETE | /api/tasks | Task CRUD |
| GET/POST/PUT/DELETE | /api/sales | Sale CRUD |

## Future Enhancements

- Edit functionality for all modules
- Admin-only user management UI
- Unit tests (JUnit, Mockito)
- AI-powered lead summarization
