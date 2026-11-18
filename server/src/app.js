
import express from "express";
import authRoutes from "./routes/authRoutes.js";

import {
  notFound,
  errorHandler
} from "./middleware/errorMiddleware.js";

const app = express();

// Parse JSON requests
app.use(express.json({ limit: "100kb" }));

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

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;