
import nodemailer from "nodemailer";

let transporter = null;

// Create and configure the email transporter
function getTransporter() {
  try {
    if (transporter) {
      return transporter;
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
    } = process.env;

    // Validate SMTP configuration
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      const error = new Error(
        "Email configuration is missing. Please check SMTP settings in .env."
      );
      error.statusCode = 500;
      throw error;
    }

    // Configure Nodemailer
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE).toLowerCase() === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    console.log("Email transporter configured successfully");

    return transporter;
  } catch (error) {
    console.error(
      "Email Service Error: Failed to configure transporter:",
      error.message
    );
    throw error;
  }
}

// Format date in Indian time zone
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

// Escape HTML to safely display submitted form data in the email
function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Send admission enquiry details to the college
export async function sendAdmissionEnquiryEmail(enquiry) {
  try {
    // Validate college email configuration
    const collegeEmail = process.env.COLLEGE_EMAIL;

    if (!collegeEmail) {
      const error = new Error(
        "College email address is missing. Please configure COLLEGE_EMAIL in .env."
      );
      error.statusCode = 500;
      throw error;
    }

    if (!enquiry) {
      const error = new Error(
        "Student enquiry details are required to send an email."
      );
      error.statusCode = 400;
      throw error;
    }

    // Prepare student enquiry details
    const fields = [
      ["Student Name", enquiry.studentName],
      ["Father / Guardian Name", enquiry.fatherName],
      ["Date of Birth", formatDate(enquiry.dateOfBirth)],
      ["School Name", enquiry.schoolName],
      ["Course Type", enquiry.courseType],
      ["Mobile Number", enquiry.mobileNumber],
      [
        "Alternate Phone",
        enquiry.alternatePhoneNumber || "Not provided",
      ],
      ["Email ID", enquiry.email || "Not provided"],
      ["Address", enquiry.address],
      ["Enquiry ID", String(enquiry._id)],
      [
        "Submitted At",
        new Date(enquiry.createdAt).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      ],
    ];

    // Generate HTML table rows
    const rows = fields
      .map(
        ([label, value]) => `
          <tr>
            <th style="text-align:left;padding:10px;border:1px solid #ddd;background:#f5f5f5;">
              ${escapeHtml(label)}
            </th>
            <td style="padding:10px;border:1px solid #ddd;">
              ${escapeHtml(value)}
            </td>
          </tr>
        `
      )
      .join("");

    const fromName =
      process.env.EMAIL_FROM_NAME || "VAISIRI PU College Admissions";

    const mailOptions = {
      from: `"${fromName}" <${process.env.SMTP_USER}>`,
      to: collegeEmail,
      subject: `New ${enquiry.courseType} Admission Enquiry - ${enquiry.studentName}`,
      text: fields
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#333;">
          <h2>VAISIRI PU College - New Admission Enquiry</h2>
          <p>A new student admission enquiry has been submitted.</p>
          <table style="border-collapse:collapse;width:100%;max-width:700px;">
            ${rows}
          </table>
          <p style="margin-top:20px;font-size:12px;color:#777;">
            This is an automated notification from the admission enquiry system.
          </p>
        </div>
      `,
    };

    // Send the email
    const transporter = getTransporter();
    const info = await transporter.sendMail(mailOptions);

    console.log(
      `Admission enquiry email sent successfully. Message ID: ${info.messageId}`
    );

    return {
      success: true,
      message: "Admission enquiry email sent successfully",
      messageId: info.messageId,
    };
  } catch (error) {
    console.error(
      "Email Service Error: Failed to send admission enquiry email:",
      error.message
    );

    throw error;
  }
}
