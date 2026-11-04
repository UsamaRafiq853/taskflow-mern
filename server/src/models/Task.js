
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [150, "Title cannot exceed 150 characters"]
    },

    description: {
      type: String,
      trim: true,
      maxlength: [2000, "Description cannot exceed 2000 characters"],
      default: ""
    },

    status: {
      type: String,
      enum: ["todo", "in_progress", "completed"],
      default: "todo"
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },

    dueDate: {
      type: Date,
      default: null
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Task owner is required"],
      immutable: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Indexes for efficient user-specific queries
taskSchema.index({ owner: 1, status: 1 });
taskSchema.index({ owner: 1, dueDate: 1 });

const Task = mongoose.model("Task", taskSchema);

export default Task;