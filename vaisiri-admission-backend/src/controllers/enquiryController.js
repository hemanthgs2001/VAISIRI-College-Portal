import enquiryService from "../services/enquiryService.js";

class EnquiryController {
  async create(req, res, next) {
    try {
      const result = await enquiryService.createEnquiry(req.body);

      return res.status(201).json({
        success: true,
        message: result.emailSent
          ? "Admission enquiry saved and college email sent successfully"
          : "Admission enquiry saved successfully",
        emailSent: result.emailSent,
        ...(result.emailWarning ? { warning: result.emailWarning } : {}),
        data: result.enquiry
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const result = await enquiryService.getEnquiries(req.query);

      return res.status(200).json({
        success: true,
        ...result
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new EnquiryController();
