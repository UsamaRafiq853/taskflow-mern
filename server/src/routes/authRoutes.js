
import express from "express";

import { registerUser } from "../controllers/authController.js";

import { validateRequest } from "../middleware/validateRequest.js";

import { registerSchema } from "../validators/authValidator.js";

const router = express.Router();

router.post(
  "/register",
  validateRequest(registerSchema),
  registerUser
);

export default router;
