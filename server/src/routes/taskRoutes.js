
import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

import { protect } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
  createTaskSchema,
  updateTaskSchema
} from "../validators/taskValidator.js";

const router = express.Router();

// All task routes require login
router.use(protect);

// Create and view tasks
router.post("/", validateRequest(createTaskSchema), createTask);
router.get("/", getTasks);

// Update and delete a task
router.put("/:id", validateRequest(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
