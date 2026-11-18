
import { z } from "zod";

export const createTaskSchema = z.strictObject({
  title: z.string().trim().min(3).max(150),

  description: z.string()
    .trim()
    .max(2000)
    .optional(),

  status: z.enum([
    "todo",
    "in_progress",
    "completed"
  ]).optional(),

  priority: z.enum([
    "low",
    "medium",
    "high"
  ]).optional(),

  dueDate: z.iso.datetime({ offset: true })
    .nullable()
    .optional()
});

export const updateTaskSchema =
  createTaskSchema.partial().refine(
    (data) => Object.keys(data).length > 0,
    { message: "At least one field is required" }
  );
