import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
      maxlength: 100
    },
    fatherName: {
      type: String,
      required: [true, "Father/guardian name is required"],
      trim: true,
      maxlength: 100
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
      validate: {
        validator(value) {
          return value instanceof Date && !Number.isNaN(value.getTime()) && value < new Date();
        },
        message: "Date of birth must be a valid past date"
      }
    },
    schoolName: {
      type: String,
      required: [true, "School name is required"],
      trim: true,
      maxlength: 150
    },
    courseType: {
      type: String,
      required: [true, "Course type is required"],
      enum: {
        values: ["Science", "Commerce"],
        message: "Course type must be Science or Commerce"
      }
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"]
    },
    alternatePhoneNumber: {
      type: String,
      default: "",
      trim: true,
      validate: {
        validator(value) {
          return value === "" || /^[6-9]\d{9}$/.test(value);
        },
        message: "Alternate phone must be a valid 10-digit Indian mobile number"
      }
    },
    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
      maxlength: 254,
      validate: {
        validator(value) {
          return value === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Enter a valid email address"
      }
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      maxlength: 1000
    }
  },
  { timestamps: true }
);

enquirySchema.index({ courseType: 1, createdAt: -1 });

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
