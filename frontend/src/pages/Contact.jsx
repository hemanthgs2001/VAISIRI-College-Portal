
import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-[#582184] to-[#35045B] py-16 text-white">
        <Container className="text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-yellow-300">
            Get in Touch
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Contact VAISIRI PU College.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-purple-100 sm:text-lg">
            We are here to help you with admissions, courses, and other
            enquiries.
          </p>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="We'd Love to Hear From You"
            title="Get in Touch With Us"
            subtitle="Contact our college for admission details and assistance."
          />

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {/* Address */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-[#582184]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#582184]">
                College Address
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                <strong className="text-gray-800">
                  VAISIRI PU College
                </strong>
                <br />
                Shri Sharadadevi Nagar,
                <br />
                2nd Stage, 5th Cross,
                <br />
                Near Saibaba Temple,
                <br />
                Tumkur – 572103,
                <br />
                Karnataka, India.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shri+Sharadadevi+Nagar+2nd+Stage+5th+Cross+Near+Saibaba+Temple+Tumkur+572103"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[#7027B8] hover:text-[#35045B]"
              >
                Get Directions
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-[#582184]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#582184]">
                Phone Number
              </h3>

              <p className="mt-3 text-gray-600">
                Have questions? Call us for assistance with admissions.
              </p>

              <a
                href="tel:+917483414927"
                className="mt-5 inline-block text-lg font-bold text-[#7027B8] hover:text-[#35045B]"
              >
                +91 7483414927
              </a>

              <p className="mt-3 text-sm text-gray-500">
                We look forward to assisting you.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-[#582184]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#582184]">
                Email Address
              </h3>

              <p className="mt-3 text-gray-600">
                Write to us for admission enquiries and further information.
              </p>

              <a
                href="mailto:VAISIRIpu@gmail.com"
                className="mt-5 inline-block break-all font-semibold text-[#7027B8] hover:text-[#35045B]"
              >
                VAISIRIpu@gmail.com
              </a>

              <p className="mt-3 text-sm text-gray-500">
                We are happy to hear from you.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="mx-auto mt-12 max-w-6xl rounded-2xl bg-gradient-to-r from-[#582184] to-[#8B24C9] px-6 py-10 text-center text-white shadow-lg sm:px-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Begin Your Journey With VAISIRI
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-purple-100">
              Connect with our team to learn more about our courses and
              admission process.
            </p>

            <a
              href="tel:+917483414927"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-[#582184] transition hover:bg-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}