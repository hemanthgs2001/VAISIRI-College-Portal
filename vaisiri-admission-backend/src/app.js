
import express from "express";
import cors from "cors";

import enquiryRoutes from "./routes/enquiryRoutes.js";
import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

const app = express();

// Middleware: Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN
      ? process.env.CLIENT_ORIGIN.split(",").map((origin) => origin.trim())
      : true,
  })
);

// Middleware: Parse incoming JSON requests
app.use(express.json({ limit: "20kb" }));

// Health check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "VAISIRI Admission API is running successfully",
  });
});

// Admission enquiry APIs
app.use("/api/enquiries", enquiryRoutes);

// Handle undefined routes
app.use(notFound);

// Centralized error handling
app.use(errorHandler);

export default app;
