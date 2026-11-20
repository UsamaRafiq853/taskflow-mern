
import mongoose from "mongoose";
import Task from "../models/Task.js";

// Create a task
export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      owner: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

// Get logged-in user's tasks
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ owner: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      tasks
    });
  } catch (error) {
    next(error);
  }
};

// Update a task
export const updateTask = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const allowedFields = [
      "title",
      "description",
      "status",
      "priority",
      "dueDate"
    ];

    const updates = Object.fromEntries(
      Object.entries(req.body).filter(([key]) =>
        allowedFields.includes(key)
      )
    );

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.id
      },
      { $set: updates },
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

// Delete a task
export const deleteTask = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID"
      });
    }

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
