
export const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode =
    Number.isInteger(err.status) &&
    err.status >= 400 &&
    err.status < 600
      ? err.status
      : 500;

  const isProduction = process.env.NODE_ENV === "production";

  console.error(
    "API Error:",
    isProduction ? "Request failed" : err.message
  );

  res.status(statusCode).json({
    success: false,
    message:
      statusCode === 500
        ? "Internal server error"
        : err.message || "Request failed",
    ...(!isProduction && {
      stack: err.stack
    })
  });
};