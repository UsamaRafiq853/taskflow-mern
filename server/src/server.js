
import app from "./app.js";

const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, () => {
  console.log(`TaskFlow API running on port ${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} received. Closing server...`);

  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
