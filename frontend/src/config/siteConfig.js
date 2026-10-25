// Single source of truth for contact info, nav links and course list
export const site = {
  name: "VAISIRI",
  phones: ["+91 9164701393", "+91 7022901242"],
  email: "VAISIRIpu@gmail.com",
  announcement:
    "Registration Open for Admissions 2026-27 | 1 PUC & 2 PUC - Science (PCMB & PCMC) | Commerce",
};

export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Management", to: "/about" },
    ],
  },
  {
    label: "Courses",
    to: "/courses",
  },
  { label: "Facilities", to: "/facilities" },
  { label: "Blogs", to: "/blogs" },
  { label: "News Articles", to: "/news" },
  {
    label: "Results",
    to: "/results",
  },
  
  { label: "Contact", to: "/contact" },
];

// Must match COURSES in backend/src/models/enquiry.model.js
export const courseOptions = [
  "1 PUC - Science (PCMB)",
  "1 PUC - Science (PCMC)",
  "1 PUC - Commerce",
  "2 PUC - Science (PCMB)",
  "2 PUC - Science (PCMC)",
  "2 PUC - Commerce",
];
