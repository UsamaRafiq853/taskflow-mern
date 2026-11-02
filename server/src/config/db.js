
import mongoose from "mongoose";
import dns from "node:dns";

// Connect to MongoDB Atlas
export const connectDB = async () => {
  try {
    // Configure DNS servers if provided in .env
    if (process.env.MONGODB_DNS_SERVERS) {
      dns.setServers(
        process.env.MONGODB_DNS_SERVERS.split(",")
          .map((server) => server.trim())
      );
    }

    // Check MongoDB connection string
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in .env file");
    }

    // Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );

    // Display detailed server connection errors
    if (error.reason?.servers) {
      for (const [host, server] of error.reason.servers) {
        console.error("Server:", host);
        console.error(
          "Reason:",
          server.error?.message || "No detailed error"
        );
      }
    }

    throw error;
  }
};

// Disconnect MongoDB gracefully
export const disconnectDB = async () => {
  await mongoose.disconnect();
};
