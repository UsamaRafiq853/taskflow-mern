
import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { registerSchema, loginSchema } from "../validators/authValidator.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

// Register a new user
router.post("/register", validateRequest(registerSchema), registerUser);

// Login an existing user
router.post("/login", validateRequest(loginSchema), loginUser);

export default router;