
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

import {
  notFound,
  errorHandler
} from "./middleware/errorMiddleware.js";

const app = express();

// Parse JSON requests and cookies
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

// Home endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to TaskFlow API",
    application: "TaskFlow",
    version: "1.0.0"
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "TaskFlow backend is running"
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Protected task routes
app.use("/api/tasks", taskRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
