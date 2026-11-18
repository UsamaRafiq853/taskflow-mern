
import argon2 from "argon2";
import User from "../models/User.js";

// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if email is already registered
  const existingUser = await User.exists({ email });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "Email is already registered"
    });
  }

  // Hash password before saving
  const passwordHash = await argon2.hash(password, {
    type: argon2.argon2id
  });

  try {
    const user = await User.create({
      name,
      email,
      passwordHash,
      role: "user"
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    // Handle duplicate email in concurrent requests
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered"
      });
    }

    throw error;
  }
};
