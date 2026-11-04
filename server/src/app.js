
import express from "express";
import {
  notFound,
  errorHandler
} from "./middleware/errorMiddleware.js";

const app = express();

// Parse incoming JSON requests
app.use(express.json({ limit: "100kb" }));

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to TaskFlow API",
    application: "TaskFlow",
    version: "1.0.0"
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "TaskFlow backend is running"
  });
});

// Handle unknown endpoints
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

export default app;