**TaskFlow - Task Management System**

TaskFlow is a web-based task management application developed as part of my B9IS130 Web Development module using the MERN Stack.
The application will allow users to manage tasks, set priorities, track deadlines, and monitor progress with secure user authentication.

Technologies:

Frontend: React.js (Planned)
Backend: Node.js, Express.js
Database: MongoDB Atlas, Mongoose
Language: JavaScript
Validation: Zod
Version Control: Git & GitHub
Cloud Hosting: Vercel and Render

**Features:**

1- User Authentication:

- User registration
- Login using email and password
- Password hashing before storing user information
-  authentication using HTTP-only cookies
- User logout

2- Task Management

- Create new tasks
- View existing tasks
- Edit task information
- Delete tasks
- Set task priorities (Low, Medium and High)
- Update task status (To Do, In Progress and Completed)
- Set task deadlines

Each user can manage their own tasks after logging in.

**Project Structure:**

The project is divided into two main folders:

- client - Contains the React frontend, including the Login, Register and Dashboard pages.
- server - Contains the Express backend, API routes, controllers, middleware and MongoDB models.

The frontend communicates with the backend through REST API endpoints. MongoDB Atlas is used to store user accounts and task information.

Backend APIs:

I created APIs using Express.js to connect the frontend with the backend.
These APIs handle user registration, login and logout. They also allow users to add, view, edit and delete their tasks.
I also created a health check API to check whether the backend is running.
Users need to log in before they can manage their tasks.

The backend runs at:
http://localhost:5000

Open the local address shown by Vite, normally:
http://localhost:5173

**Cloud Deployment:**

The application is deployed using the following services:
- Vercel - React frontend
- Render - Node.js and Express backend
- MongoDB Atlas - Cloud database

Live Application:
https://taskflow-mern-inky-two.vercel.app/login

Backend:
https://taskflow-backend-omid.onrender.com

GitHub Repository:
https://github.com/UsamaRafiq853/taskflow-mern

**Challenges Faced:**

One of the main challenges was connecting MongoDB Atlas to the backend. I faced DNS, network access and SSL connection errors during development.
I also faced some validation errors while creating tasks, especially when sending dates from React to the backend.
These issues were investigated and changes were made to get the application working.
I also learned how to use GitHub, deploy the backend on Render and deploy the frontend on Vercel.

Learning Resources and AI Assistance:

During development, I used W3Schools to understand some JavaScript, web development concepts.
I also used ChatGPT for help with coding, understanding errors, debugging and improving parts of the application.
The code was tested and adjusted during development to make the application work with my project.
I have mentioned these resources to acknowledge the help I received.

Author:
20102497 - Muhammad Usama Rafiq 
B9IS130 - Web Development for Information Systems
