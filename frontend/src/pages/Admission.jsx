import { useState } from "react";
import Container from "../components/common/Container.jsx";
import { Link } from "react-router-dom";

const courseOptions = {
  Science: ["PCMB", "PCMC"],
};

export default function Register() {
  const courseType = "Science";
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!course) {
      alert("Please select a Science subject combination.");
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
    "mt-2 w-full rounded-xl border border-purple-200 bg-white/90 px-4 py-3 text-sm text-[#321047] shadow-sm outline-none transition duration-200 placeholder:text-purple-300 focus:border-purple-600 focus:ring-4 focus:ring-purple-100";

  const labelClass = "block text-sm font-semibold text-[#3D1758]";

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#FBF8FF] via-white to-[#F2E7FF] py-8 sm:py-12">
      {/* Decorative light-purple bubbles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <span className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#E9D5FF]/70 blur-[2px]" />
        <span className="absolute -right-24 top-72 h-80 w-80 rounded-full bg-[#DCC2FA]/45 blur-sm" />
        <span className="absolute left-[12%] top-[42rem] h-24 w-24 rounded-full border border-[#C084FC]/35 bg-white/50 shadow-[0_12px_35px_rgba(139,92,246,0.12)]" />
        <span className="absolute right-[10%] bottom-36 h-16 w-16 rounded-full bg-[#E9D5FF]/70" />
        <span className="absolute left-[48%] bottom-12 h-28 w-28 rounded-full border border-[#C084FC]/30 bg-[#F3E8FF]/60" />
        <span className="absolute right-[18%] top-20 h-6 w-6 rounded-full bg-white shadow-[0_8px_24px_rgba(139,92,246,0.18)]" />
      </div>

      <Container className="relative z-10 !mx-auto !w-full !max-w-none !px-4 sm:!px-6 lg:!px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-purple-100 bg-white/95 shadow-[0_24px_70px_rgba(74,18,111,0.14)] backdrop-blur-sm">
          {/* Purple accent header */}
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-[#6D28A5] via-[#4A126F] to-[#2E034F] px-5 py-7 text-center text-white sm:px-8 sm:py-9">
            <span
              aria-hidden="true"
              className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-white/15 bg-white/5"
            />
            <span
              aria-hidden="true"
              className="absolute -left-8 -bottom-16 h-40 w-40 rounded-full bg-[#C084FC]/10"
            />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-100">
                Admissions 2026–2027
              </span>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Student Registration
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
                Register for admission to VAISIRI PU College. Fields marked
                with <span className="font-bold text-white">*</span> are mandatory.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student and Parent Details */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-sm font-extrabold text-purple-800">
                    01
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#321047]">
                      Student & Guardian Details
                    </h2>
                    <p className="text-xs text-purple-500">
                      Please enter the student's personal information.
                    </p>
                  </div>
                </div>

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
              </section>

              {/* Science Course Selection */}
              <section className="rounded-2xl border border-purple-100 bg-gradient-to-br from-[#FBF8FF] to-[#F4EAFF] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-200 text-sm font-extrabold text-purple-900">
                    02
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#321047]">
                      Choose Your Science Course
                    </h2>
                    <p className="text-xs text-purple-600">
                      Select your preferred Science subject combination.
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-[#4A126F] px-4 py-3 text-sm font-bold text-white shadow-md">
                  <span aria-hidden="true">✦</span>
                  Science Stream
                </div>

                <label className={`${labelClass} mt-5 block`}>
                  Select Science Combination{" "}
                  <span className="text-red-500">*</span>
                  <select
                    className={inputClass}
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                    required
                  >
                    <option value="">Select course combination</option>
                    {courseOptions.Science.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </section>

              {/* Contact Details */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-sm font-extrabold text-purple-800">
                    03
                  </span>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#321047]">
                      Contact Information
                    </h2>
                    <p className="text-xs text-purple-500">
                      Add the best way for the college to reach you.
                    </p>
                  </div>
                </div>

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
              </section>

              {/* Terms and Conditions */}
              <div className="rounded-xl border border-purple-100 bg-[#FCF9FF] p-4">
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
                      className="font-bold text-purple-700 underline decoration-purple-300 underline-offset-4 transition hover:text-purple-950"
                    >
                      terms and conditions
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#6D28A5] via-[#4A126F] to-[#2E034F] px-6 py-4 font-extrabold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/25 focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  Submit Registration <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0"
                />
              </button>

              <p className="text-center text-xs text-purple-400">
                VAISIRI PU College · Admissions 2026–2027
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
