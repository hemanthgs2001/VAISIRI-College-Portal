// import { useState } from "react";
// import FormField from "./common/FormField.jsx";
// import Button from "./common/Button.jsx";
// import { submitEnquiry } from "../api/enquiry.api.js";
// import { courseOptions } from "../config/siteConfig.js";

// const initial = { studentName: "", course: "", phoneNumber: "", address: "" };

// function validate(v) {
//   const e = {};
//   if (!v.studentName.trim()) e.studentName = "Student name is required";
//   if (!v.course) e.course = "Please select a course";
//   if (!/^[6-9]\d{9}$/.test(v.phoneNumber)) e.phoneNumber = "Enter a valid 10-digit mobile number";
//   if (!v.address.trim()) e.address = "Address is required";
//   return e;
// }

// export default function EnquiryForm({ className = "" }) {
//   const [values, setValues] = useState(initial);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }

//   const onChange = (e) => setValues((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const found = validate(values);
//     setErrors(found);
//     if (Object.keys(found).length) return;

//     setLoading(true);
//     setStatus(null);
//     try {
//       const res = await submitEnquiry(values);
//       setStatus({ type: "success", text: res.message });
//       setValues(initial);
//     } catch (err) {
//       // Show server-side field errors too
//       const serverErrors = {};
//       err.details?.forEach((d) => (serverErrors[d.field] = d.message));
//       setErrors(serverErrors);
//       setStatus({ type: "error", text: err.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} noValidate className={`space-y-4 rounded-2xl bg-white p-6 shadow-xl ${className}`}>
//       <h3 className="text-xl font-bold text-brand-800">Admission Enquiry</h3>

//       <FormField id="studentName" name="studentName" label="Student Name" value={values.studentName} onChange={onChange} error={errors.studentName} placeholder="Full name" />
//       <FormField id="course" name="course" as="select" label="Course" options={courseOptions} value={values.course} onChange={onChange} error={errors.course} />
//       <FormField id="phoneNumber" name="phoneNumber" label="Phone Number" inputMode="numeric" maxLength={10} value={values.phoneNumber} onChange={onChange} error={errors.phoneNumber} placeholder="10-digit mobile number" />
//       <FormField id="address" name="address" as="textarea" label="Address" value={values.address} onChange={onChange} error={errors.address} placeholder="Village / Town, District" />

//       {status && (
//         <p className={`rounded-lg px-3 py-2 text-sm ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
//           {status.text}
//         </p>
//       )}

//       <Button type="submit" loading={loading} className="w-full">Submit Enquiry</Button>
//     </form>
//   );
// }
