
import { z } from "zod";

export const registerSchema = z.strictObject({
  name: z.string().trim().min(2).max(100),

  email: z.email()
    .max(254)
    .transform((email) => email.toLowerCase()),

  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password is too long")
});

export const loginSchema = z.strictObject({
  email: z.email()
    .max(254)
    .transform((email) => email.toLowerCase()),

  password: z.string().min(1, "Password is required")
});
