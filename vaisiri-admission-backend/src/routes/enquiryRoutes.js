
import { Router } from "express";
import enquiryController from "../controllers/enquiryController.js";

const router = Router();


// POST - Register student enquiry
router.post("/register", async (req, res, next) => {
  try {
    console.log("Register API called");
    console.log("Request body:", req.body);

    await enquiryController.create(req, res, next);
  } catch (error) {
    console.error("Registration route error:", error.message);
    next(error);
  }
});

// GET - Fetch students with pagination
router.get("/students", async (req, res, next) => {
  try {
    await enquiryController.getAll(req, res, next);
  } catch (error) {
    console.error("Fetch students route error:", error.message);
    next(error);
  }
});



export default router;
