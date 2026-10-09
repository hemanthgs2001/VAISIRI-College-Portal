
import Enquiry from "../models/Enquiry.js";

class EnquiryRepository {
  // POST - Register a new student enquiry
  async create(enquiryData) {
    try {
      const enquiry = await Enquiry.create(enquiryData);

      return enquiry;
    } catch (error) {
      console.error("Repository Error: Failed to register enquiry:", error.message);
      throw error;
    }
  }

  // GET - Fetch all student enquiries with pagination and course filter
  async findPaginated({ page, limit, courseType }) {
    try {
      const filter = {};

      // Filter enquiries by course type if provided
      if (courseType) {
        filter.courseType = courseType;
      }

      const skip = (page - 1) * limit;

      // Fetch students and total record count simultaneously
      const [students, total] = await Promise.all([
        Enquiry.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),

        Enquiry.countDocuments(filter),
      ]);

      return {
        students,
        total,
      };
    } catch (error) {
      console.error("Repository Error: Failed to fetch enquiries:", error.message);
      throw error;
    }
  }

  // GET - Fetch a student enquiry by MongoDB ID
  async findById(id) {
    try {
      const enquiry = await Enquiry.findById(id).lean();

      if (!enquiry) {
        throw new Error("Student enquiry not found");
      }

      return enquiry;
    } catch (error) {
      console.error("Repository Error: Failed to fetch enquiry by ID:", error.message);
      throw error;
    }
  }
}

export default new EnquiryRepository();
