
import { useState } from "react";
import Container from "../components/common/Container.jsx";
import { Link } from "react-router-dom";

const courseOptions = {
  Science: ["PCMB", "PCMC"],
  Commerce: ["CEBA", "SEBA", "HEBA", "MEBA", "SCBA"],
};

export default function Register() {
  const [courseType, setCourseType] = useState("");
  const [course, setCourse] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    schoolName: "",
    mobileNumber: "",
    alternatePhone: "",
    email: "",
    address: "",
    agreedToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
    setCourse("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!courseType || !course) {
      alert("Please select a course type and course combination.");
      return;
    }

    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const registration = {
      ...formData,
      courseType,
      course,
    };

    console.log("Registration details:", registration);
    alert("Form validated successfully. Connect a backend to submit your registration.");
  };

  const inputClass =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100";

  const labelClass = "block text-sm font-medium text-gray-800";

  return (
    <section className="min-h-screen bg-slate-100 py-10 sm:py-14">
      <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-6 lg:!px-10">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-5 shadow-xl sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-[#2e034f] sm:text-4xl">
              Student Registration
            </h1>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              Register for admission to VAISIRI PU College.
              Fields marked with <span className="text-red-500">*</span> are
              mandatory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student and Parent Details */}
            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                Student Name <span className="text-red-500">*</span>
                <input
                  className={inputClass}
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                  value={formData.studentName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>

              <label className={labelClass}>
                Father Name / Guardian{" "}
                <span className="text-red-500">*</span>
                <input
                  className={inputClass}
                  type="text"
                  name="fatherName"
                  placeholder="Enter father / guardian name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={labelClass}>
                Date of Birth <span className="text-red-500">*</span>
                <input
                  className={inputClass}
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={labelClass}>
                School Name <span className="text-red-500">*</span>
                <input
                  className={inputClass}
                  type="text"
                  name="schoolName"
                  placeholder="Enter school name"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Course Selection */}
            <div>
              <p className="mb-3 text-sm font-medium text-gray-800">
                Course Type <span className="text-red-500">*</span>
              </p>

              <div className="flex flex-wrap gap-6">
                {["Science", "Commerce"].map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-2 text-sm text-gray-800"
                  >
                    <input
                      type="radio"
                      name="courseType"
                      value={type}
                      checked={courseType === type}
                      onChange={handleCourseTypeChange}
                      required
                      className="h-4 w-4 accent-purple-700"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {courseType && (
              <label className={labelClass}>
                Select {courseType} Combination{" "}
                <span className="text-red-500">*</span>

                <select
                  className={inputClass}
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  required
                >
                  <option value="">Select course combination</option>

                  {courseOptions[courseType].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {/* Contact Details */}
            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                Mobile Number <span className="text-red-500">*</span>
                <input
                  className={inputClass}
                  type="tel"
                  name="mobileNumber"
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className={labelClass}>
                Alternate Phone Number
                <input
                  className={inputClass}
                  type="tel"
                  name="alternatePhone"
                  placeholder="Alternate phone number"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                />
              </label>

              <label className={`${labelClass} md:col-span-2`}>
                Email ID
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </label>

              <label className={`${labelClass} md:col-span-2`}>
                Address <span className="text-red-500">*</span>
                <textarea
                  className={inputClass}
                  name="address"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={4}
                  autoComplete="street-address"
                  required
                />
              </label>
            </div>

            {/* Terms and Conditions */}
            <label className="flex items-start gap-3 text-sm leading-6 text-gray-700">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 shrink-0 accent-purple-700"
                required
              />

              <span>
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-700 underline hover:text-purple-900"
                >
                  terms and conditions
                </Link>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#2e034f] px-6 py-3.5 font-bold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}