
import express from "express";

const app = express();

// Parse incoming JSON requests
app.use(express.json({ limit: "100kb" }));

// Basic application endpoint
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

// Handle unmatched API requests
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found"
  });
});

export default app;
