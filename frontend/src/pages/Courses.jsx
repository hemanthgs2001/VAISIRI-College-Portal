import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../components/common/Container.jsx";

const scienceCombinations = [
  {
    code: "PCMB",
    subjects: "Physics, Chemistry, Mathematics, Biology",
    description:
      "A flexible combination for students interested in medicine, engineering, life sciences and research.",
  },
  {
    code: "PCMC",
    subjects: "Physics, Chemistry, Mathematics, Computer Science",
    description:
      "A strong foundation for engineering, computing, technology and mathematical sciences.",
  },
  {
    code: "PCBH",
    subjects: "Physics, Chemistry, Biology, Home Science",
    description:
      "A science pathway for students interested in biology, health-related and applied science fields.",
  },
];

const scienceCurriculum = [
  {
    acronym: "MVT",
    title: "Medical Oriented",
    subtitle: "V-TECHNO curriculum",
    detail: "Focused academic support for medical entrance preparation.",
  },
  {
    acronym: "IVT",
    title: "IIT Oriented",
    subtitle: "V-TECHNO curriculum",
    detail: "Focused academic support for engineering entrance preparation.",
  },
  {
    acronym: "CVT",
    title: "Concept Oriented",
    subtitle: "V-TECHNO curriculum",
    detail: "Concept clarity, regular practice and strong subject fundamentals.",
  },
];

const scienceCareerPaths = [
  "Medicine and allied health sciences",
  "Engineering, computer science and technology",
  "Pure science, research and biotechnology",
  "Agriculture, veterinary and related programmes",
  "Architecture and other eligible professional courses",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-6 max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-fuchsia-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-extrabold text-[#4A126F] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function CombinationCard({ item, index }) {
  return (
    <article
      className="group flex h-full flex-col items-center justify-center rounded-2xl border border-purple-100 bg-white p-5 text-center shadow-[0_5px_14px_rgba(74,18,111,0.08)] transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_14px_26px_rgba(74,18,111,0.12)] sm:p-6"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex min-h-[60px] min-w-[108px] items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] px-4 py-4 text-center text-xl font-black text-white shadow-sm">
        {item.code}
      </div>
      <div className="mt-4 w-full">
        <p className="text-base font-extrabold leading-7 text-[#4A126F] sm:text-lg">
          {item.subjects}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function CurriculumCard({ item }) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl bg-white px-4 py-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#C026D3] text-lg font-black text-white">
        {item.acronym}
      </div>
      <h3 className="mt-4 text-base font-extrabold text-[#4A126F]">
        {item.title}
      </h3>
      <p className="mt-1 text-sm leading-5 text-slate-600">{item.subtitle}</p>
      <p className="mt-3 text-xs leading-5 text-slate-500">{item.detail}</p>
    </article>
  );
}

function CareerPathways({ paths }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {paths.map((path, index) => (
        <div
          key={path}
          className="flex items-start gap-3 rounded-xl border border-purple-100 bg-white p-4"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-sm font-extrabold text-[#6D28A5]">
            {index + 1}
          </span>
          <p className="text-sm font-medium leading-5 text-slate-700">{path}</p>
        </div>
      ))}
    </div>
  );
}

export default function Courses() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeStream, setActiveStream] = useState("science");

  const scrollToSection = (section) => {
    setActiveStream(section);
    navigate(`/courses#${section}`);
    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  useEffect(() => {
    const section = location.hash.replace("#", "");
    if (section === "science") {
      setActiveStream(section);
      const timer = window.setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <main className="min-h-screen bg-[#F8F9FC] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#6D1A91] via-[#4A126F] to-[#300747] px-4 py-10 text-white sm:py-14">
        <div className="pointer-events-none absolute -left-14 -top-20 h-56 w-56 rounded-full border border-white/15 bg-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full border border-white/15 bg-white/5" />
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-100">
              VAISIRI PU College
            </span>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Courses
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-purple-100 sm:text-base">
              Build a strong academic foundation with practical knowledge and
              career-focused learning through our Science stream.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("science")}
                aria-pressed={activeStream === "science"}
                className={`rounded-xl border px-5 py-2.5 text-sm font-extrabold shadow-md transition duration-300 hover:-translate-y-0.5 ${
                  activeStream === "science"
                    ? "border-white bg-white text-[#4A126F]"
                    : "border-white/40 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Explore Science
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-4 py-7 sm:px-6 sm:py-9">
        <Container>
          <div className="rounded-2xl border-t-4 border-[#6D1A91] bg-white px-4 py-7 shadow-sm sm:px-8 sm:py-9">
            <SectionHeading
              title="PU Programmes"
              description="Explore our Science subject combinations, integrated learning support and possible career pathways."
            />

            <section id="science" className="scroll-mt-32 py-5">
              <SectionHeading
                eyebrow="Science stream"
                title="PU Science"
                description="Science combinations designed to provide a foundation in science, technology, medicine, engineering and other professional fields."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {scienceCombinations.map((item, index) => (
                  <CombinationCard key={item.code} item={item} index={index} />
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-[#F5F2FF] p-4 sm:p-6">
                <h3 className="mb-5 text-center text-xl font-extrabold text-[#4A126F]">
                  Integrated Curriculum Offered
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {scienceCurriculum.map((item) => (
                    <CurriculumCard key={item.acronym} item={item} />
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-purple-100 bg-white p-4 sm:p-6">
                <SectionHeading
                  title="Science Career Pathways"
                  description="Examples of fields students may explore after PUC, subject to entrance-exam and institution eligibility."
                />
                <CareerPathways paths={scienceCareerPaths} />
              </div>
            </section>

          </div>
        </Container>
      </section>

      <section className="px-4 pb-10 sm:px-6">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-[#4A126F] to-[#7C3AED] px-5 py-6 text-center text-white sm:px-8">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Choose the Science pathway that matches your goals
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-purple-100">
              Discuss your interests, subject strengths and future plans with the VAISIRI
              team before choosing a Science combination.
            </p>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="mt-4 rounded-xl bg-white px-5 py-2.5 text-sm font-extrabold text-[#4A126F] transition hover:-translate-y-0.5 hover:bg-purple-50"
            >
              Contact VAISIRI
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
