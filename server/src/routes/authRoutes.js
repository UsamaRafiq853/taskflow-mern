
import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser
} from "../controllers/authController.js";

import {
  registerSchema,
  loginSchema
} from "../validators/authValidator.js";

import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

// Register a new user
router.post(
  "/register",
  validateRequest(registerSchema),
  registerUser
);

// Login user
router.post(
  "/login",
  validateRequest(loginSchema),
  loginUser
);

// Logout user and clear JWT cookie
router.post("/logout", logoutUser);

export default router;
