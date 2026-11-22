
import "dotenv/config";
import app from "./app.js";
import { connectDB, disconnectDB } from "./config/db.js";

const PORT = Number(process.env.PORT) || 5000;

let server;
let shuttingDown = false;

async function startServer() {
  // Start the API even when MongoDB is unavailable.
  server = app.listen(PORT, () => {
    console.log(`TaskFlow API running on port ${PORT}`);
  });

  // Attempt MongoDB connection without stopping the API.
  try {
    await connectDB();
  } catch (error) {
    console.error("MongoDB unavailable:", error.message);
    console.error(
      "Database-dependent APIs will not work until MongoDB reconnects."
    );
  }
}

async function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    }

    await disconnectDB();
    console.log("Server stopped");
  } catch (error) {
    console.error("Shutdown failed:", error.message);
    process.exitCode = 1;
  }
}

process.on("SIGINT", () => {
  shutdown().catch(console.error);
});

process.on("SIGTERM", () => {
  shutdown().catch(console.error);
});

startServer().catch((error) => {
  console.error("Backend startup failed:", error.message);
  process.exitCode = 1;
});
