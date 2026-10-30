
# TaskFlow - System Architecture

## 1. Introduction

TaskFlow is a secure cloud-based task management
system developed using the MERN Stack.

The application follows a three-tier architecture
consisting of a frontend, backend, and database.

## 2. Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- REST APIs
- Mongoose

### Database
- MongoDB Atlas

### Security
- JWT-based authentication
- HttpOnly authentication cookies
- Argon2id password hashing
- Role-Based Access Control (RBAC)
- Input validation
- CSRF protection
- API rate limiting
- Secure HTTP headers

### Deployment
- Vercel: React frontend
- Render: Express backend
- MongoDB Atlas: Cloud database

## 3. Architecture Overview

User (Web Browser)
        |
        | HTTPS
        v
React Frontend (Vercel)
        |
        | HTTPS REST API / JSON
        v
Express Backend (Render)
        |
        | Authentication
        | Authorization
        | Input Validation
        | Business Logic
        v
Mongoose Data Access Layer
        |
        | Encrypted Connection
        v
MongoDB Atlas

## 4. Frontend Architecture

The frontend provides the user interface.

Main components:
- Registration page
- Login page
- User dashboard
- Task management page
- Profile page
- Admin dashboard
- Navigation and layout components

The frontend communicates with the backend
using HTTPS requests.

## 5. Backend Architecture

The backend handles:
- Authentication and session management
- User management
- Task management
- Authorization
- Request validation
- Database operations
- Error handling

The backend follows a modular structure:

Routes -> Middleware -> Controllers
       -> Services -> Models -> MongoDB

## 6. Authentication Architecture

1. The user submits login credentials.
2. The backend validates the request.
3. MongoDB is queried for the user.
4. The submitted password is verified
   against the stored Argon2id hash.
5. The backend creates an authenticated session.
6. A short-lived JWT is issued in an
   appropriately configured HttpOnly cookie.
7. Protected endpoints validate authentication.
8. Authorization checks verify user roles
   and resource ownership.

Session revocation and expiration are managed
on the backend.

## 7. Authorization

Two roles will be supported:

### Administrator
- Manage registered users
- View application-wide statistics
- Access administrator endpoints

### Registered User
- Create personal tasks
- View personal tasks
- Update personal tasks
- Delete personal tasks
- View personal dashboard

The backend must enforce all permissions.

## 8. API Architecture

The following API routes are planned.

### Authentication
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
POST /api/auth/forgot-password
POST /api/auth/reset-password

### Tasks
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/:id
PATCH  /api/tasks/:id
DELETE /api/tasks/:id

### Users
GET   /api/users/me
PATCH /api/users/me

### Administration
GET   /api/admin/users
PATCH /api/admin/users/:id
GET   /api/admin/statistics

### Dashboard
GET /api/dashboard/stats

The final API specification may be refined
during implementation.

## 9. Security Architecture

Security controls will include:

- HTTPS in production
- Password hashing using Argon2id
- Secure, HttpOnly, SameSite cookies
- CSRF protection
- Backend role and ownership checks
- Server-side validation
- NoSQL injection prevention
- XSS mitigation
- API rate limiting
- Secure headers using Helmet
- Restricted CORS configuration
- Environment variables for secrets
- Safe error responses

## 10. Cloud Architecture

Frontend:
Vercel

Backend:
Render

Database:
MongoDB Atlas

GitHub will store the source code and
support deployment workflows.

Secrets and credentials must never be
committed to the public repository.

## 11. External API Integration

The application will integrate an external
public REST API to demonstrate asynchronous
data retrieval and JSON processing.

The specific API and integration workflow
will be selected during development.

## 12. Design Principles

- Separation of concerns
- Modular architecture
- Reusable components
- Secure-by-default backend
- Maintainable code
- Responsive user interface
- Testable services
- Incremental development