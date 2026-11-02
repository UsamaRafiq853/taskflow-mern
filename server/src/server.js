
import "dotenv/config";
import app from "./app.js";
import { connectDB, disconnectDB } from "./config/db.js";

const PORT = Number(process.env.PORT) || 5000;

let server;

async function startServer() {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`TaskFlow API running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exitCode = 1;
  }
}

async function shutdown() {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }

  await disconnectDB();
  console.log("Server stopped");
}

process.on("SIGINT", () => {
  shutdown().catch(console.error);
});

process.on("SIGTERM", () => {
  shutdown().catch(console.error);
});

startServer();
