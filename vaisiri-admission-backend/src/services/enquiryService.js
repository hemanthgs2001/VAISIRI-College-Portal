
import enquiryRepository from "../repositories/enquiryRepository.js";
import { sendAdmissionEnquiryEmail } from "./emailService.js";

const ALLOWED_COURSES = ["Science", "Commerce"];
const ALLOWED_FIELDS = [
  "studentName",
  "fatherName",
  "dateOfBirth",
  "schoolName",
  "courseType",
  "mobileNumber",
  "alternatePhoneNumber",
  "email",
  "address",
];

class EnquiryService {
  // POST - Register a student enquiry and notify the college
  async createEnquiry(payload) {
    try {
      // Validate request body
      if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
        const error = new Error("Invalid request body");
        error.statusCode = 400;
        throw error;
      }

      // Accept only the fields defined in the enquiry model
      const data = {};

      for (const field of ALLOWED_FIELDS) {
        if (payload[field] !== undefined) {
          data[field] = payload[field];
        }
      }

      // Validate course type
      if (typeof data.courseType === "string") {
        data.courseType = data.courseType.trim();
      }

      if (!ALLOWED_COURSES.includes(data.courseType)) {
        const error = new Error(
          "Invalid course type. Please select Science or Commerce."
        );
        error.statusCode = 400;
        throw error;
      }

      // Save the enquiry in MongoDB
      const enquiry = await enquiryRepository.create(data);

      // Send email notification to the college
      let emailSent = false;
      let emailWarning = null;

      try {
        await sendAdmissionEnquiryEmail(enquiry);
        emailSent = true;

        console.log(
          `Admission enquiry registered and email sent: ${enquiry._id}`
        );
      } catch (emailError) {
        console.error(
          "Email notification failed:",
          emailError.message
        );

        emailWarning =
          "Enquiry registered successfully, but the college email could not be sent.";
      }

      return {
        enquiry,
        emailSent,
        emailWarning,
      };
    } catch (error) {
      console.error(
        "Service Error: Failed to register enquiry:",
        error.message
      );

      throw error;
    }
  }

  // GET - Fetch student enquiries with pagination and course filtering
  async getEnquiries(query) {
    try {
      // Validate page number
      const page = Number(query.page ?? 1);

      if (!Number.isInteger(page) || page < 1) {
        const error = new Error(
          "Invalid page number. Page must be a positive integer."
        );
        error.statusCode = 400;
        throw error;
      }

      // Restrict the page size to a maximum of 10 records
      const requestedLimit = Number(query.limit ?? 10);

      if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
        const error = new Error(
          "Invalid limit. Limit must be a positive integer."
        );
        error.statusCode = 400;
        throw error;
      }

      const limit = Math.min(requestedLimit, 10);

      // Validate optional course filter
      let courseType = null;

      if (query.courseType !== undefined && query.courseType !== "") {
        courseType = String(query.courseType).trim();

        if (!ALLOWED_COURSES.includes(courseType)) {
          const error = new Error(
            "Invalid course type. Use Science or Commerce."
          );
          error.statusCode = 400;
          throw error;
        }
      }

      // Fetch enquiries from the repository
      const { students, total } =
        await enquiryRepository.findPaginated({
          page,
          limit,
          courseType,
        });

      // Return student data and pagination details
      return {
        students,
        pagination: {
          page,
          limit,
          totalRecords: total,
          totalPages: Math.ceil(total / limit),
          hasNextPage: page * limit < total,
          hasPreviousPage: page > 1,
        },
        filters: {
          courseType,
        },
      };
    } catch (error) {
      console.error(
        "Service Error: Failed to fetch enquiries:",
        error.message
      );

      throw error;
    }
  }
}

export default new EnquiryService();
