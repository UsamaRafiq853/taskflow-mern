# TaskFlow - Task Management System

TaskFlow is a web-based task management application that I am developing for my B9IS130 Web Development for Information Systems module.

The project is being built using the MERN stack. The main idea is to allow users to manage their daily tasks, set deadlines, update task status and keep track of their work through a simple dashboard.

I am also focusing on user authentication and security to make sure users can only access their own tasks.

## Technologies Used

- MongoDB Atlas - Database
- Express.js - Backend framework
- React.js - Frontend (not started yet)
- Node.js - Server
- JavaScript - Programming language
- Mongoose - MongoDB integration
- Zod - Input validation
- Git and GitHub - Version control

## Work Completed So Far

I started by setting up the GitHub repository and organizing the project into separate frontend and backend folders.

After that, I worked on the following:

- Set up the Node.js and Express server.
- Created a basic API endpoint to check whether the server is running.
- Connected MongoDB Atlas with the backend.
- Created User and Task database models using Mongoose.
- Added error handling for invalid API requests.
- Started implementing input validation using Zod.
- Added project requirements and database design documentation.

The backend is running locally on port 5000 and is connected to MongoDB Atlas.

## Project Structure

```text
taskflow-mern/
├── client/
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
├── docs/
└── README.md
```

## Running the Backend

Clone the repository:

```bash
git clone https://github.com/UsamaRafiq853/taskflow-mern.git
```

Open the server folder:

```bash
cd taskflow-mern/server
```

Install the required packages:

```bash
npm install
```

Create a `.env` file and add the MongoDB connection string. The connecting IP must also be allowed in MongoDB Atlas.

Start the server:

```bash
npm run dev
```

The backend runs at:

`http://localhost:5000`

Health check API:

`http://localhost:5000/api/health`

## Security

Security is one of the main parts of this project.

So far, I have worked on database configuration, environment variables, database models and API error handling.

In the next stages, I will implement:

- User registration and login
- Password hashing
- JWT authentication
- Admin and User roles
- Protected API routes
- Input validation
- Access control for user tasks

## Next Steps

My next tasks are to complete input validation, implement user authentication and develop APIs for creating, updating and deleting tasks.

After completing the backend, I will start working on the React frontend, connect it with the APIs and deploy the application to the cloud.

## Project Status

Currently working on backend development.

## Author
Muhammad Usama Rafiq - 20102497
Usama Rafiq

B9IS130 - Web Development for Information Systems
