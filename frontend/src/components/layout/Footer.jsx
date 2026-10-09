import { Link } from "react-router-dom";
import Container from "../common/Container.jsx";
import { site } from "../../config/siteConfig.js";

const footerLinks = [
  { label: "About College", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Admission", to: "/admission" },
  { label: "Courses", to: "/courses" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2e034f] text-brand-100">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">

          {/* College Contact Information */}
          <div>
            <h3 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-lg font-bold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm leading-6">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <div>
                  <p className="font-bold text-white">
                    VAISIRI PU College
                  </p>
                  <p>
                    Shri Sharadadevi Nagar, 2nd Stage,
                    5th Cross, Near Saibaba Temple,
                    Tumkur – 572103, Karnataka, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L8 11.3a16 16 0 0 0 4.7 4.7l1.9-1.9a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.7 2Z" />
                </svg>

                <a
                  href="tel:7483414927"
                  className="hover:text-yellow-400"
                >
                  +91 7483414927
                </a>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-yellow-400"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:justify-self-center">
            <h3 className="mb-5 inline-block border-b-2 border-yellow-400 pb-2 text-lg font-bold text-white">
              Connect With Us
            </h3>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/share/1DdYGuDoDH/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white transition-colors hover:text-yellow-400"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.18 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.18 24 18.1 24 12.07Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/vaisiripucollege?stkn=enZia255MmNjNW40"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-colors hover:text-yellow-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-purple-200">
              Follow us for the latest updates and news.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs leading-6 text-purple-200">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-white">
            VAISIRI PU College
          </span>
          . All rights reserved.
          <span className="mx-1">|</span>
          Creative Bonding.
        </div>
      </Container>
    </footer>
  );
}