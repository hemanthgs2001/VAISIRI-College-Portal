export function notFound(req, res, _next) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
}

export function errorHandler(error, _req, res, _next) {
  console.error(error);

  if (error.name === "ValidationError") {
    const details = Object.values(error.errors).map((item) => item.message);
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: details
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid value supplied"
    });
  }

  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? "Internal server error" : error.message
  });
}
