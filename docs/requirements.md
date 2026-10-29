
# TaskFlow - Software Requirements Specification

## 1. Project Information

Project Name: TaskFlow

Project Title: Secure Cloud-Based Task Management
Information System Using MERN Stack

Module: B9IS130 - Web Development for Information Systems

Application Type: Full-Stack Web Application

## 2. Problem Statement

Individuals and small teams often struggle to organize
their tasks, monitor progress, and manage deadlines.

TaskFlow aims to provide a centralized, secure,
and user-friendly web application for managing
daily tasks efficiently.

## 3. Project Objectives

- Develop a full-stack application using MERN.
- Implement MongoDB database integration.
- Provide secure user registration and login.
- Implement role-based access control.
- Allow users to manage their own tasks.
- Provide a dashboard for task statistics.
- Build a responsive and accessible interface.
- Integrate an external REST API.
- Deploy the application on a public cloud platform.
- Apply secure coding and software engineering practices.

## 4. Intended Users and Stakeholders

### Administrator
- Manage user accounts.
- View overall task statistics.
- Monitor application activity.

### Registered User
- Create and manage personal tasks.
- Track task completion.
- View personal dashboard.
- Update account information.

### Stakeholders
- Individual users and small teams.
- System administrator.
- Project developer.
- Academic assessor.

## 5. Functional Requirements

FR-01: Users shall be able to register.

FR-02: Users shall be able to log in securely.

FR-03: Users shall be able to log out.

FR-04: Users shall be able to reset passwords.

FR-05: Users shall be able to update their profiles.

FR-06: Users shall be able to create tasks.

FR-07: Users shall be able to view their tasks.

FR-08: Users shall be able to update their tasks.

FR-09: Users shall be able to delete their tasks.

FR-10: Users shall be able to assign task priorities.

FR-11: Users shall be able to set task due dates.

FR-12: Users shall be able to change task status
       between To Do, In Progress, and Completed.

FR-13: Users shall be able to search and filter tasks.

FR-14: Users shall be able to view task statistics
       on their dashboard.

FR-15: Administrators shall be able to view and
       manage registered user accounts.

FR-16: Administrators shall be able to view
       application-wide task statistics.

FR-17: The system shall integrate an external
       public REST API.

## 6. Non-Functional Requirements

NFR-01: The interface shall support desktop
and mobile screen sizes.

NFR-02: The system shall use HTTPS in production.

NFR-03: The backend shall validate incoming data.

NFR-04: The application shall provide understandable
error messages without exposing internal details.

NFR-05: The codebase shall follow a modular structure.

NFR-06: The application shall use MongoDB for storage.

NFR-07: The application shall support accessible
navigation, forms, and readable layouts.

NFR-08: Database credentials and other secrets
shall not be committed to GitHub.

NFR-09: The application shall have automated tests
for important backend and security workflows.

NFR-10: The deployed application shall be publicly
accessible for academic demonstration.

## 7. Security Requirements

SEC-01: Passwords shall be hashed using Argon2id.

SEC-02: Authentication shall use secure session
management with JWT and HttpOnly cookies.

SEC-03: Authorization shall be enforced on the
backend using Role-Based Access Control.

SEC-04: Users shall only access and modify tasks
that belong to their accounts.

SEC-05: Authentication endpoints shall implement
rate limiting.

SEC-06: Input validation shall protect against
invalid or malicious requests.

SEC-07: The application shall implement safeguards
against XSS and NoSQL injection.

SEC-08: Cookie-based authentication shall include
CSRF protection.

SEC-09: Production cookies shall use appropriate
Secure and SameSite attributes.

SEC-10: Password reset tokens shall expire and
shall not be stored in plaintext.

SEC-11: Sensitive configuration shall be stored
in environment variables.

SEC-12: The system shall return appropriate HTTP
401 and 403 responses for access violations.

## 8. Technology Stack

Frontend:
- React.js
- Vite
- Tailwind CSS
- JavaScript

Backend:
- Node.js
- Express.js
- JavaScript

Database:
- MongoDB Atlas
- Mongoose

Security:
- JWT
- Argon2id
- Helmet
- CORS
- Rate Limiting
- Input Validation
- CSRF Protection

Version Control:
- Git
- GitHub

Deployment:
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

## 9. Main Database Collections

### Users
- name
- email
- passwordHash
- role
- createdAt
- updatedAt

### Tasks
- title
- description
- status
- priority
- dueDate
- owner
- createdAt
- updatedAt

### Sessions / Refresh Tokens
- user
- tokenHash
- expiresAt
- revokedAt

The final collection design will be confirmed
during database architecture and implementation.

## 10. Development Methodology

The project will follow an incremental development
approach.

Each major feature will be:
1. Planned.
2. Implemented.
3. Tested.
4. Committed to Git.
5. Pushed to GitHub.
6. Documented.

A minimum target of 40 meaningful commits
has been established for the project.

## 11. Scope and Limitations

The application will focus on personal task
management and basic administrator functionality.

The initial scope excludes:
- Online payments.
- Real-time messaging.
- Artificial intelligence features.
- Complex enterprise project management.
- Native mobile applications.

## 12. Success Criteria

The project will be considered successful when:

- Users can securely register and log in.
- Users can perform task CRUD operations.
- Users cannot access another user's tasks.
- Administrators can access authorized functions.
- Dashboard statistics operate correctly.
- An external API is integrated.
- Important functionality passes testing.
- The application is deployed and accessible.
- The GitHub repository contains documented code.
- The technical report and presentation are ready.