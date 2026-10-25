import { useEffect } from "react";
import Container from "../components/common/Container.jsx";

const emergencyContacts = [
  {
    label: "College Office",
    number: "+91 9164701393",
    href: "tel:+919164701393",
  },
  {
    label: "Student Support",
    number: "+91 7022901242",
    href: "tel:+917022901242",
  },
];

const facilityGroups = [
  {
    icon: "⌂",
    title: "RESIDENTIAL & HOSTEL FACILITIES",
    items: [
      "Separate accommodation for boys and girls",
      "24/7 hot water and electricity",
      "RO purified drinking water",
      "Laundry facility",
      "Reading rooms with newspapers & magazines",
      "Dedicated study rooms & doubt-solving classrooms",
      "Comfortable, student-friendly accommodation",
    ],
  },
  {
    icon: "▤",
    title: "FOOD & DINING FACILITIES",
    items: [
      "Nutritious and protein-rich meals",
      "Breakfast, lunch, snacks, and dinner",
      "Regular food quality testing",
      "Water quality checks",
      "Daily menu shared with parents",
      "Clean canteen and mess facilities",
    ],
  },
  {
    icon: "⬟",
    title: "SAFETY & SECURITY",
    items: [
      "252 CCTV cameras across campus",
      "360° surveillance with voice recording",
      "24/7 security personnel",
      "Dedicated wardens in each block",
      "Special Girls Care Team",
      "Continuous campus monitoring",
    ],
  },
  {
    icon: "♥",
    title: "STUDENT SUPPORT & WELL-BEING",
    items: [
      "Holistic student development approach",
      "Regular academic monitoring",
      "Mentorship and guidance",
      "Supportive learning environment",
      "Focus on discipline and emotional well-being",
    ],
  },
];

export default function Facilities() {
  useEffect(() => {
    const items = document.querySelectorAll(".facility-list-item");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;
            item.classList.add("is-visible");
            observer.unobserve(item);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -25px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#FBF7FF] via-white to-[#F5E9FF] text-[#321047]">
      <style>{`
        @keyframes facilityItemReveal {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .facility-list-item {
          opacity: 0;
          transform: translateY(14px);
        }
        .facility-list-item.is-visible {
          animation: facilityItemReveal 520ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
          animation-delay: var(--facility-delay, 0ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .facility-list-item,
          .facility-list-item.is-visible {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
      {/* Soft lavender bubbles and ambient background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <span className="absolute -left-20 top-40 h-56 w-56 rounded-full bg-[#E9D5FF]/55 blur-[2px]" />
        <span className="absolute -right-24 top-[28rem] h-72 w-72 rounded-full bg-[#DCC2FA]/40 blur-[3px]" />
        <span className="absolute left-[14%] top-[52rem] h-20 w-20 rounded-full border border-[#C084FC]/35 bg-white/35 shadow-[0_10px_35px_rgba(139,92,246,0.10)]" />
        <span className="absolute right-[12%] top-[66rem] h-12 w-12 rounded-full bg-[#E9D5FF]/60 blur-[1px]" />
        <span className="absolute -left-12 bottom-28 h-44 w-44 rounded-full bg-[#E9D5FF]/45 blur-[2px]" />
        <span className="absolute right-[28%] bottom-12 h-24 w-24 rounded-full border border-[#C084FC]/30 bg-[#F3E8FF]/55" />
        <span className="absolute left-[48%] top-[18rem] h-5 w-5 rounded-full bg-[#C084FC]/30" />
        <span className="absolute right-[7%] top-24 h-7 w-7 rounded-full bg-white/70 shadow-[0_8px_24px_rgba(139,92,246,0.12)]" />
      </div>
      {/* Page hero */}
      <section className="relative z-10 isolate overflow-hidden bg-gradient-to-r from-[#6D168B] via-[#541078] to-[#31004F] px-4 py-8 text-center text-white sm:py-9 lg:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#B65AD8]/15 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#D9A7F4]/15 blur-2xl"
        />
        <Container className="relative !mx-auto !w-full !max-w-7xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-purple-100">
            Campus Life
          </span>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-5xl">
            Facilities
          </h1>
          <p className="mx-auto mt-3 max-w-5xl text-sm leading-6 text-purple-100 sm:text-base sm:leading-7">
            At VAISIRI PU College, we provide a safe, comfortable, and
            student-friendly environment that supports academic excellence and
            personal well-being. Our campus is designed to help students feel
            secure, focused, and cared for throughout their educational journey.
          </p>
        </Container>
      </section>

      {/* Main facilities panel */}
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          <div className="overflow-hidden rounded-[1.8rem] border border-[#E9D5F5] border-t-[6px] border-t-[#6D28A5] bg-[#FFFEFF] px-5 py-8 shadow-[0_18px_50px_rgba(74,18,111,0.10)] sm:px-8 sm:py-10 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-3xl font-black tracking-tight text-[#4A168A] sm:text-4xl">
                Facilities at{" "}
                <span className="text-[#B832D8]">VAISIRI</span>
              </p>
              <p className="mt-3 text-base italic leading-7 text-slate-600 sm:text-lg">
                We provide a secure, supportive, and well-equipped campus that
                helps students stay focused, comfortable, and confident
                throughout their journey.
              </p>
            </div>

            <div className="mt-9 grid gap-6 lg:grid-cols-2 lg:gap-7">
              {facilityGroups.map((group) => (
                <article
                  key={group.title}
                  className="group rounded-[1.35rem] border border-[#E9DDFB] bg-gradient-to-br from-[#F0E9FF] to-[#FAF5FF] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C7A5F0] hover:shadow-[0_16px_36px_rgba(74,18,111,0.12)] sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8739E8] to-[#D12DE1] text-2xl font-bold text-white shadow-md transition duration-300 group-hover:from-[#4A126F] group-hover:to-[#6D28A5]">
                      {group.icon}
                    </span>
                    <h2 className="text-lg font-extrabold leading-6 text-[#4A168A] sm:text-xl">
                      {group.title}
                    </h2>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{ "--facility-delay": `${group.items.indexOf(item) * 90}ms` }}
                        className="facility-list-item flex min-h-[58px] items-center gap-3 rounded-xl border border-white/90 bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700 transition duration-200 hover:bg-white hover:text-[#6322A1] sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-lg font-black text-[#C42DDF]"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Emergency contact section */}
            <section
              aria-labelledby="emergency-contact-heading"
              className="mt-9 overflow-hidden rounded-2xl bg-gradient-to-r from-[#4A126F] via-[#64218D] to-[#7B2AA5] p-5 text-white shadow-lg sm:p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-purple-100">
                    <span aria-hidden="true">✚</span> Contact Support
                  </span>
                  <h2
                    id="emergency-contact-heading"
                    className="mt-3 text-2xl font-black sm:text-3xl"
                  >
                    Emergency & College Contacts
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-purple-100 sm:text-base">
                    For college enquiries or student support, contact the
                    college using the numbers below.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-purple-200">
                    These are the contact numbers shown on the supplied
                    reference screenshots. Please confirm which number is
                    monitored for urgent emergencies before publishing it as an
                    emergency hotline.
                  </p>
                </div>

                <div className="grid w-full gap-3 md:max-w-[520px] md:grid-cols-2">
                  {emergencyContacts.map((contact) => (
                    <a
                      key={contact.number}
                      href={contact.href}
                      className="rounded-xl border border-white/20 bg-white/10 p-4 transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="block text-sm font-semibold text-purple-100">
                        {contact.label}
                      </span>
                      <span className="mt-1 block text-lg font-extrabold tracking-wide text-white">
                        {contact.number}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white">
                        Call now <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
