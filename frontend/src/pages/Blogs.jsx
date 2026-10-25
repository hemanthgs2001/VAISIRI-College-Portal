import { useEffect, useRef, useState } from "react";
import Container from "../components/common/Container.jsx";

const officialLinks = {
  jee: "https://jeemain.nta.nic.in/",
  neet: "https://neet.nta.nic.in/",
  cuet: "https://cuet.nta.nic.in/",
  nta: "https://www.nta.ac.in/",
  comedk: "https://www.comedk.org/",
  kea: "https://cetonline.karnataka.gov.in/kea/",
  josaa: "https://josaa.nic.in/",
  iiser: "https://www.iiseradmission.in/",
  nest: "https://www.nestexam.in/",
};

const streams = {
  science: {
    label: "Science",
    subtitle: "PCMB & PCMC",
    intro:
      "Explore medical, engineering, computing, architecture, pure science, agriculture and other STEM pathways. Your exact subject combination and each institution's current eligibility rules determine which exams you can take.",
    combinations: [
      {
        id: "pcmb",
        title: "PCMB",
        full: "Physics · Chemistry · Mathematics · Biology",
        summary: "A broad choice for students interested in both life sciences and mathematics-based fields.",
        exams: [
          {
            name: "NEET-UG",
            type: "Medical & allied health",
            detail:
              "The principal national entrance route for MBBS and BDS, and also used for specified AYUSH programmes. Other health courses may have different admission routes.",
            colleges:
              "Medical colleges and dental colleges participating in NEET counselling; AYUSH institutions where applicable.",
            link: officialLinks.neet,
          },
          {
            name: "KCET",
            type: "Karnataka professional courses",
            detail:
              "May be relevant for engineering and listed farm-science, veterinary, pharmacy and other professional courses, depending on the subjects required for that course.",
            colleges:
              "Eligible Karnataka engineering, farm-science, veterinary, pharmacy and other participating institutions through the applicable counselling process.",
            link: officialLinks.kea,
          },
          {
            name: "JEE Main",
            type: "Engineering & architecture pathways",
            detail:
              "Used for NITs, IIITs and other participating institutions. B.E./B.Tech eligibility requires the prescribed subject combination, including Mathematics.",
            colleges:
              "NITs, IIITs, other participating centrally funded technical institutions and institutions using JEE Main scores.",
            link: officialLinks.jee,
          },
          {
            name: "JEE Advanced",
            type: "IIT engineering admissions",
            detail:
              "Candidates must first qualify through JEE Main and meet the current JEE Advanced eligibility conditions.",
            colleges:
              "IITs through the JEE Advanced rank and JoSAA allocation process.",
            link: "https://jeeadv.ac.in/",
          },
          {
            name: "COMEDK UGET",
            type: "Private engineering colleges",
            detail:
              "A route to participating Karnataka engineering colleges. Check the current brochure for compulsory subjects, marks and other eligibility requirements.",
            colleges: "Participating COMEDK member engineering institutions.",
            link: officialLinks.comedk,
          },
          {
            name: "IISER Aptitude Test (IAT)",
            type: "Science & research",
            detail:
              "A possible route to undergraduate science programmes at IISERs. Check the current subject, qualification and programme-specific rules.",
            colleges: "Indian Institutes of Science Education and Research (IISERs), subject to the current admission process.",
            link: officialLinks.iiser,
          },
          {
            name: "NEST",
            type: "Basic sciences & research",
            detail:
              "An entrance route for the integrated science programmes at the participating institutes. Check current eligibility and subject requirements.",
            colleges: "NISER Bhubaneswar and UM-DAE CEBS Mumbai, subject to the current NEST admission rules.",
            link: officialLinks.nest,
          },
          {
            name: "CUET-UG",
            type: "University degree programmes",
            detail:
              "Some participating universities use CUET-UG for B.Sc. and other undergraduate courses. Required CUET subjects vary by programme and university.",
            colleges: "Participating central and other universities offering eligible programmes.",
            link: officialLinks.cuet,
          },
        ],
        routes: [
          "MBBS / BDS and selected AYUSH programmes",
          "B.E. / B.Tech and computer-related degrees",
          "B.Sc. life sciences, biotechnology, physics, chemistry or mathematics",
          "Agriculture, veterinary and related programmes where eligible",
          "Architecture, pharmacy and other programmes with their own requirements",
        ],
        plan: [
          "Keep Biology and Mathematics preparation balanced until you decide which path suits you.",
          "For medical pathways, review NEET syllabus and practise Biology, Chemistry and Physics consistently.",
          "For engineering, strengthen Mathematics and Physics and compare JEE, KCET and COMEDK requirements.",
          "For research degrees, explore IAT, NEST and university-specific subject requirements early.",
        ],
      },
      {
        id: "pcmc",
        title: "PCMC",
        full: "Physics · Chemistry · Mathematics · Computer Science",
        summary: "Best suited to students exploring engineering, computing, technology, mathematics and related fields.",
        exams: [
          {
            name: "JEE Main",
            type: "Engineering admissions",
            detail:
              "Used for NITs, IIITs and other participating institutions. Check current qualifying-exam and subject requirements.",
            colleges: "NITs, IIITs and other participating technical institutions.",
            link: officialLinks.jee,
          },
          {
            name: "JEE Advanced",
            type: "IIT engineering admissions",
            detail:
              "Students must qualify through JEE Main and satisfy the current JEE Advanced criteria.",
            colleges: "IITs through JEE Advanced and JoSAA counselling.",
            link: "https://jeeadv.ac.in/",
          },
          {
            name: "KCET",
            type: "Karnataka engineering admissions",
            detail:
              "A major route for eligible Karnataka candidates seeking engineering and other notified professional programmes.",
            colleges: "Participating Karnataka engineering colleges and other eligible programmes through KEA.",
            link: officialLinks.kea,
          },
          {
            name: "COMEDK UGET",
            type: "Private engineering admissions",
            detail:
              "Used for admission to participating member engineering colleges. Review the current brochure for eligibility and dates.",
            colleges: "Participating COMEDK engineering institutions.",
            link: officialLinks.comedk,
          },
          {
            name: "NATA / architecture route",
            type: "Architecture",
            detail:
              "Students interested in B.Arch should check the current Council of Architecture rules and the accepted aptitude-test route. Mathematics and qualifying-subject requirements apply.",
            colleges: "Architecture colleges accepting the relevant qualifying test and counselling route.",
            link: "https://www.nata.in/",
          },
          {
            name: "CUET-UG",
            type: "University degrees",
            detail:
              "Some universities use CUET-UG for B.Sc., computer-related and other programmes. Required subjects vary by course.",
            colleges: "Participating universities and eligible undergraduate programmes.",
            link: officialLinks.cuet,
          },
        ],
        routes: [
          "Computer Science, Information Science and Software Engineering",
          "Electronics, Electrical, Mechanical, Civil and other engineering branches",
          "BCA, B.Sc. Computer Science, Mathematics, Statistics or Physics where eligible",
          "Architecture through the prescribed aptitude-test and eligibility route",
          "Technology, cybersecurity, AI/data-related studies and research after suitable degrees",
        ],
        plan: [
          "Build strong fundamentals in Mathematics, Physics and problem-solving.",
          "Practise programming and logical thinking alongside your PUC subjects.",
          "Compare JEE, KCET and COMEDK exam formats, eligibility, counselling and college options.",
          "If interested in architecture, check the current NATA/accepted-test requirements separately.",
        ],
      },
    ],
  },

};

const collegeTypes = [
  {
    title: "IITs",
    subtitle: "Engineering & technology",
    text: "Usually entered through JEE Main qualification followed by JEE Advanced and the applicable seat-allocation process.",
    href: "https://jeeadv.ac.in/",
  },
  {
    title: "NITs & IIITs",
    subtitle: "Engineering & computing",
    text: "Many B.Tech admissions use JEE Main and the relevant counselling process, subject to eligibility.",
    href: officialLinks.jee,
  },
  {
    title: "Medical & dental colleges",
    subtitle: "Medicine & healthcare",
    text: "MBBS and BDS admissions use NEET-UG and the applicable counselling route.",
    href: officialLinks.neet,
  },
  {
    title: "Karnataka colleges",
    subtitle: "State and private options",
    text: "KCET and COMEDK are two routes to research for eligible engineering programmes; each has separate rules and counselling.",
    href: officialLinks.kea,
  },
  {
    title: "Universities",
    subtitle: "Science & research degrees",
    text: "CUET-UG and university-specific routes may apply for eligible science and research programmes. Confirm each programme’s required subjects and selection process.",
    href: officialLinks.cuet,
  },

];

function useRevealAnimations() {
  const pageRef = useRef(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const elements = root.querySelectorAll("[data-reveal]");
    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return pageRef;
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-700 underline decoration-purple-300 underline-offset-4 transition hover:text-purple-950"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Blogs() {
  const [activeStream, setActiveStream] = useState("science");
  const [selectedCombination, setSelectedCombination] = useState("pcmb");
  const [expandedExam, setExpandedExam] = useState("NEET-UG");
  const pageRef = useRevealAnimations();

  const stream = streams[activeStream];
  const combination =
    stream.combinations.find((item) => item.id === selectedCombination) ??
    stream.combinations[0];

  const changeStream = (nextStream) => {
    setActiveStream(nextStream);
    const firstCombination = streams[nextStream].combinations[0];
    setSelectedCombination(firstCombination.id);
    setExpandedExam(firstCombination.exams[0]?.name ?? "");
  };

  const changeCombination = (id) => {
    const nextCombination = stream.combinations.find((item) => item.id === id);
    setSelectedCombination(id);
    setExpandedExam(nextCombination?.exams[0]?.name ?? "");
  };

  return (
    <main
      ref={pageRef}
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#FBF8FF] via-white to-[#F2E7FF] text-[#321047]"
    >
      <style>{`
        @keyframes careerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes careerIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .career-float { animation: careerFloat 7s ease-in-out infinite; }
        .career-enter { animation: careerIn 300ms ease-out both; }
        /* Keep every section visible even if an observer callback is delayed or unavailable.
           The previous hidden initial state left large blank areas between page sections. */
        [data-reveal] {
          opacity: 1;
          transform: none;
          transition: opacity 250ms ease, transform 250ms ease;
        }
        [data-reveal].is-visible { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .career-float, .career-enter { animation: none !important; }
          [data-reveal] { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <span className="career-float absolute -left-20 top-56 h-52 w-52 rounded-full bg-[#E9D5FF]/65" />
        <span className="career-float absolute -right-20 top-[38rem] h-64 w-64 rounded-full bg-[#DCC2FA]/40 [animation-delay:2s]" />
        <span className="absolute left-[12%] top-[80rem] h-16 w-16 rounded-full border border-purple-200/80 bg-white/60" />
        <span className="career-float absolute bottom-32 right-[7%] h-24 w-24 rounded-full bg-[#E9D5FF]/50 [animation-delay:1s]" />
      </div>

      <section className="relative z-10 overflow-hidden bg-gradient-to-r from-[#6D28A5] via-[#4A126F] to-[#2E034F] px-4 py-9 text-center text-white sm:py-11">
        <span aria-hidden="true" className="absolute -left-10 -top-14 h-40 w-40 rounded-full bg-white/5" />
        <span aria-hidden="true" className="absolute -right-10 -bottom-16 h-48 w-48 rounded-full border border-white/15" />
        <Container className="relative !mx-auto !w-full !max-w-7xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-purple-100">
            Learn · Explore · Plan
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Blogs &amp; Career Guidance
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-purple-100 sm:text-base sm:leading-7">
            Read detailed insights to guide your academic and career journey.
            Explore Science subject combinations, entrance exams, degree options and
            the kinds of colleges you could target after PUC.
          </p>
        </Container>
      </section>

      <section className="relative z-10 px-4 pb-5 pt-7 sm:px-6 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          <div data-reveal className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
                Start with Science
              </p>
              <h2 className="mt-1.5 text-2xl font-black text-[#321047] sm:text-3xl">
                Explore courses and career pathways
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Choose your Science subject combination. The information below updates to match your selection.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {Object.entries(streams).map(([key, item]) => {
              const active = activeStream === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => changeStream(key)}
                  aria-pressed={active}
                  className={`rounded-2xl border p-4 text-left transition duration-300 sm:p-5 ${
                    active
                      ? "border-[#4A126F] bg-gradient-to-r from-[#6D28A5] to-[#4A126F] text-white shadow-lg shadow-purple-200"
                      : "border-purple-100 bg-white/90 text-[#4A126F] hover:border-purple-300 hover:bg-[#F8F1FF]"
                  }`}
                >
                  <span className={`text-xs font-extrabold uppercase tracking-[0.18em] ${active ? "text-purple-200" : "text-purple-600"}`}>
                    {item.subtitle}
                  </span>
                  <span className="mt-1 block text-xl font-black">{item.label}</span>
                  <span className={`mt-1 block text-sm leading-5 ${active ? "text-purple-100" : "text-slate-600"}`}>
                    Medicine, engineering, computing, research and STEM.
                  </span>
                </button>
              );
            })}
          </div>

          <div key={activeStream} className="career-enter mt-4 rounded-2xl border border-purple-100 bg-white/90 px-4 py-3 shadow-sm sm:px-5">
            <p className="text-sm leading-6 text-slate-700">{stream.intro}</p>
          </div>
        </Container>
      </section>

      <section className="relative z-10 px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          {/* Full-width horizontal subject selector replaces the tall left sidebar. */}
          <section data-reveal className="rounded-2xl border border-purple-100 bg-white/95 p-4 shadow-[0_10px_30px_rgba(74,18,111,0.06)] sm:p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-purple-600">
                  Choose your combination
                </p>
                <h2 className="mt-1 text-xl font-black text-[#321047] sm:text-2xl">
                  {stream.label} subject combinations
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-5 text-slate-600">
                Select a card to instantly update the courses, entrance exams and career pathways below.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {stream.combinations.map((item) => {
                const active = item.id === combination.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => changeCombination(item.id)}
                    aria-pressed={active}
                    className={`group relative flex min-h-[112px] flex-col rounded-xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
                      active
                        ? "border-[#6D28A5] bg-gradient-to-br from-[#6D28A5] to-[#4A126F] text-white shadow-lg shadow-purple-200/70"
                        : "border-purple-100 bg-[#FCFAFF] text-[#4A126F] hover:border-purple-300 hover:bg-[#F8F1FF]"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-base font-black">{item.title}</span>
                      {active ? (
                        <span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-extrabold text-white">
                          Selected ✓
                        </span>
                      ) : (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-black text-purple-700 transition group-hover:bg-purple-200">
                          +
                        </span>
                      )}
                    </span>
                    <span className={`mt-2 text-xs leading-5 ${active ? "text-purple-100" : "text-slate-600"}`}>
                      {item.full}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex flex-col gap-2 rounded-xl bg-gradient-to-r from-[#F7F0FF] to-white px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-5 text-slate-700">
                <span className="font-extrabold text-[#4A126F]">How VAISIRI can help:</span>{" "}
                strengthen subject fundamentals, plan revision, practise exam-style questions and review official eligibility early.
              </p>
              <span className="w-fit shrink-0 rounded-full border border-purple-100 bg-white px-3 py-1 text-xs font-bold text-purple-700">
                Learn · Prepare · Progress
              </span>
            </div>
          </section>

          <div key={`${activeStream}-${combination.id}`} className="career-enter mt-4 grid min-w-0 grid-cols-1 gap-4">
            <section data-reveal className="rounded-2xl border border-purple-100 bg-white p-4 shadow-[0_10px_30px_rgba(74,18,111,0.06)] sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-purple-600">
                    Selected pathway
                  </span>
                  <h2 className="mt-1 text-2xl font-black text-[#321047] sm:text-3xl">
                    {combination.title}: courses, exams &amp; opportunities
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{combination.full}</p>
                </div>
                <span className="w-fit rounded-full bg-[#F3E8FF] px-3 py-1.5 text-xs font-bold text-[#6D28A5]">
                  {combination.exams.length} exam routes to explore
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {combination.routes.map((route, index) => (
                  <div key={route} className="flex gap-2.5 rounded-xl bg-[#FBF8FF] p-3 ring-1 ring-purple-100">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6D28A5] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-5 text-slate-700">{route}</p>
                  </div>
                ))}
              </div>
            </section>

            <section data-reveal className="rounded-2xl border border-purple-100 bg-white p-4 shadow-[0_10px_30px_rgba(74,18,111,0.06)] sm:p-5">
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#321047] sm:text-2xl">Entrance exams to know</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Open any exam to see what it can lead to and where to verify its rules.
                  </p>
                </div>
                <span className="text-xs font-bold text-purple-600">Select an exam to expand</span>
              </div>

              <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
                {combination.exams.map((exam, index) => {
                  const expanded = expandedExam === exam.name;
                  return (
                    <article
                      key={exam.name}
                      className={`overflow-hidden rounded-xl border transition duration-300 ${
                        expanded ? "border-purple-300 bg-[#FBF8FF] xl:col-span-2" : "border-purple-100 bg-white hover:border-purple-200"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedExam(expanded ? "" : exam.name)}
                        aria-expanded={expanded}
                        className="flex w-full items-center gap-3 px-3.5 py-3 text-left transition hover:bg-[#FCFAFF] sm:px-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F3E8FF] text-sm font-black text-[#6D28A5]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-extrabold text-[#4A126F]">{exam.name}</span>
                          <span className="mt-0.5 block text-xs text-slate-500">{exam.type}</span>
                        </span>
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-black transition ${expanded ? "rotate-45 bg-[#4A126F] text-white" : "bg-purple-100 text-[#6D28A5]"}`}>
                          +
                        </span>
                      </button>
                      {expanded && (
                        <div className="career-enter border-t border-purple-100 px-4 pb-4 pt-3">
                          <p className="text-sm leading-6 text-slate-700">{exam.detail}</p>
                          <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-purple-100">
                            <p className="text-xs font-extrabold uppercase tracking-wide text-purple-600">
                              Colleges / pathway
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">{exam.colleges}</p>
                          </div>
                          <div className="mt-3">
                            <ExternalLink href={exam.link}>Official exam information</ExternalLink>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>

            <section data-reveal className="rounded-2xl bg-gradient-to-r from-[#4A126F] to-[#6D28A5] p-4 text-white sm:p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="text-lg font-black sm:text-xl">A practical plan for {combination.title}</h3>
                <span className="text-xs font-semibold text-purple-100">Small, consistent steps make progress</span>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {combination.plan.map((step, index) => (
                  <div key={step} className="flex gap-2.5 rounded-xl border border-white/15 bg-white/10 p-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-[#4A126F]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-5 text-purple-50">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <section className="relative z-10 px-4 pb-4 pt-3 sm:px-6 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          <div data-reveal className="mb-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
              College pathways
            </p>
            <h2 className="mt-1.5 text-2xl font-black text-[#321047] sm:text-3xl">
              Which colleges could you target?
            </h2>
            <p className="mt-1.5 max-w-3xl text-sm leading-5 text-slate-600">
              These are examples of institution types and admission routes—not a
              guarantee of eligibility or admission. Always check the official
              prospectus and counselling rules for your chosen course.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {collegeTypes.map((college, index) => (
              <article
                key={college.title}
                data-reveal
                style={{ transitionDelay: `${index * 55}ms` }}
                className="rounded-2xl border border-purple-100 bg-white p-4 shadow-[0_8px_22px_rgba(74,18,111,0.05)] transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_14px_28px_rgba(74,18,111,0.1)]"
              >
                <span className="inline-flex rounded-full bg-[#F3E8FF] px-2.5 py-1 text-xs font-extrabold text-[#6D28A5]">
                  {college.subtitle}
                </span>
                <h3 className="mt-3 text-lg font-black text-[#4A126F]">{college.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{college.text}</p>
                <div className="mt-3">
                  <ExternalLink href={college.href}>Official website</ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative z-10 px-4 pb-6 pt-1 sm:px-6 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          <div data-reveal className="rounded-2xl border border-purple-100 bg-[#F3E8FF]/70 p-4 sm:p-5">
            <h2 className="text-lg font-black text-[#4A126F]">Before you apply</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Entrance exams, subject combinations, cut-offs, eligibility,
              application dates and counselling processes can change. An exam
              may only apply to specific courses or colleges. Confirm current
              rules directly with the official authority and your target
              institution. For engineering pathways, review the current IIT,
              NIT and other participating-institution admission requirements.
              For medical pathways, check NEET-UG eligibility and the applicable
              counselling process.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              <ExternalLink href={officialLinks.nta}>NTA exams</ExternalLink>
              <ExternalLink href={officialLinks.kea}>Karnataka Examinations Authority</ExternalLink>
              <ExternalLink href={officialLinks.comedk}>COMEDK</ExternalLink>
              <ExternalLink href={officialLinks.josaa}>JoSAA counselling</ExternalLink>
              <ExternalLink href={officialLinks.cuet}>CUET-UG</ExternalLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
