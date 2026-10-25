import { useMemo, useState } from "react";
import Container from "../components/common/Container.jsx";

/*
 * Replace the sample entries below with verified VAISIRI student results.
 * Add each student's photo to public/images/results/ and update the image path.
 * Do not publish unverified marks, ranks, or achievements.
 */

const stateBoardResults = [
  {
    id: "state-1",
    name: "Student Name 01",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "98.5%",
    achievement: "State Board Excellence",
    detail: "Outstanding performance in the Karnataka PU Board examinations.",
    image: "/images/results/state-student-01.jpg",
    subjects: [
      { label: "English", score: "95" },
      { label: "Core Subjects", score: "99" },
    ],
  },
  {
    id: "state-2",
    name: "Student Name 02",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "97.8%",
    achievement: "Academic Achiever",
    detail: "Recognised for consistent effort and excellent academic performance.",
    image: "/images/results/state-student-02.jpg",
    subjects: [
      { label: "English", score: "94" },
      { label: "Core Subjects", score: "99" },
    ],
  },
  {
    id: "state-3",
    name: "Student Name 03",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "97.2%",
    achievement: "Merit Performer",
    detail: "A strong result reflecting focus, dedication, and hard work.",
    image: "/images/results/state-student-03.jpg",
    subjects: [
      { label: "English", score: "93" },
      { label: "Core Subjects", score: "98" },
    ],
  },
  {
    id: "state-4",
    name: "Student Name 04",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "96.8%",
    achievement: "High Achiever",
    detail: "A commendable result through steady preparation and commitment.",
    image: "/images/results/state-student-04.jpg",
    subjects: [
      { label: "English", score: "92" },
      { label: "Core Subjects", score: "98" },
    ],
  },
  {
    id: "state-5",
    name: "Student Name 05",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "96.3%",
    achievement: "Academic Excellence",
    detail: "Celebrating determination, progress, and a commitment to learning.",
    image: "/images/results/state-student-05.jpg",
    subjects: [
      { label: "English", score: "91" },
      { label: "Core Subjects", score: "97" },
    ],
  },
  {
    id: "state-6",
    name: "Student Name 06",
    category: "2nd PUC · State Board",
    year: "2026",
    score: "95.9%",
    achievement: "Proud Achiever",
    detail: "An achievement built on discipline, guidance, and perseverance.",
    image: "/images/results/state-student-06.jpg",
    subjects: [
      { label: "English", score: "90" },
      { label: "Core Subjects", score: "97" },
    ],
  },
];

const competitiveResults = [
  {
    id: "competitive-1",
    name: "Student Name 07",
    exam: "NEET",
    year: "2026",
    score: "AIR / Score to add",
    achievement: "NEET Achiever",
    detail: "Recognising focused preparation for medical entrance examinations.",
    image: "/images/results/competitive-student-01.jpg",
  },
  {
    id: "competitive-2",
    name: "Student Name 08",
    exam: "JEE",
    year: "2026",
    score: "Rank / Score to add",
    achievement: "JEE Achiever",
    detail: "Celebrating dedication to engineering entrance exam preparation.",
    image: "/images/results/competitive-student-02.jpg",
  },
  {
    id: "competitive-3",
    name: "Student Name 09",
    exam: "KCET",
    year: "2026",
    score: "Rank / Score to add",
    achievement: "KCET Achiever",
    detail: "Recognising hard work and progress in competitive examinations.",
    image: "/images/results/competitive-student-03.jpg",
  },
  {
    id: "competitive-4",
    name: "Student Name 10",
    exam: "NEET",
    year: "2026",
    score: "AIR / Score to add",
    achievement: "NEET Achiever",
    detail: "A milestone on the journey toward a future in healthcare.",
    image: "/images/results/competitive-student-04.jpg",
  },
  {
    id: "competitive-5",
    name: "Student Name 11",
    exam: "JEE",
    year: "2026",
    score: "Rank / Score to add",
    achievement: "JEE Achiever",
    detail: "A result that celebrates consistent preparation and determination.",
    image: "/images/results/competitive-student-05.jpg",
  },
  {
    id: "competitive-6",
    name: "Student Name 12",
    exam: "KCET",
    year: "2026",
    score: "Rank / Score to add",
    achievement: "KCET Achiever",
    detail: "Proudly highlighting commitment to academic and career goals.",
    image: "/images/results/competitive-student-06.jpg",
  },
];

function ResultCard({ student, competitive = false }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-[0_12px_34px_rgba(74,18,111,0.09)] transition duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_22px_46px_rgba(74,18,111,0.16)]">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#E9D5FF]">
        <img
          src={student.image}
          alt={`${student.name} — student achievement`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#F3E8FF] via-white to-[#E9D5FF]">
          <div className="flex flex-col items-center text-center text-[#6D28A5]">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-purple-100 text-3xl font-black shadow-lg">
              {student.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </span>
            <span className="mt-3 text-xs font-bold uppercase tracking-[0.18em]">
              Student photo
            </span>
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-[#4A126F]/95 px-3 py-1.5 text-xs font-bold text-white shadow">
          {competitive ? student.exam : "STATE BOARD"}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#4A126F]">
          {student.year}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-500">
          {competitive ? `${student.exam} · Competitive Exam` : student.category}
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-[#321047]">
          {student.name}
        </h3>

        <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#F3E8FF] to-[#FBF8FF] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
            {competitive ? "Result / Rank" : "Board Percentage"}
          </p>
          <p className="mt-1 break-words text-2xl font-black text-[#4A126F]">
            {student.score}
          </p>
        </div>

        {!competitive && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {student.subjects.map((subject) => (
              <div
                key={subject.label}
                className="rounded-xl border border-purple-100 bg-white p-3"
              >
                <p className="text-xs text-slate-500">{subject.label}</p>
                <p className="mt-1 font-extrabold text-[#6D28A5]">
                  {subject.score}%
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 border-l-4 border-purple-300 pl-3">
          <p className="font-bold text-[#4A126F]">{student.achievement}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {student.detail}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Results() {
  const [activeTab, setActiveTab] = useState("state");
  const [search, setSearch] = useState("");

  const visibleStudents = useMemo(() => {
    const list = activeTab === "state" ? stateBoardResults : competitiveResults;
    const query = search.trim().toLowerCase();

    if (!query) return list;

    return list.filter((student) =>
      [
        student.name,
        student.achievement,
        student.score,
        student.category,
        student.exam,
        student.detail,
      ]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [activeTab, search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearch("");
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#FBF8FF] via-white to-[#F2E7FF] text-[#321047]">
      {/* Soft lavender bubble decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <span className="absolute -left-20 top-48 h-64 w-64 rounded-full bg-[#E9D5FF]/60 blur-sm" />
        <span className="absolute -right-24 top-[42rem] h-80 w-80 rounded-full bg-[#DCC2FA]/40 blur-sm" />
        <span className="absolute left-[8%] top-[80rem] h-20 w-20 rounded-full border border-[#C084FC]/35 bg-white/40" />
        <span className="absolute right-[10%] bottom-32 h-28 w-28 rounded-full bg-[#E9D5FF]/50" />
      </div>

      {/* Hero */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-r from-[#6D28A5] via-[#4A126F] to-[#2E034F] px-4 py-10 text-center text-white sm:py-12">
        <span
          aria-hidden="true"
          className="absolute -left-10 -top-16 h-44 w-44 rounded-full bg-white/5"
        />
        <span
          aria-hidden="true"
          className="absolute -right-12 -bottom-20 h-56 w-56 rounded-full border border-white/15"
        />
        <Container className="relative !mx-auto !w-full !max-w-7xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-purple-100">
            Celebrating Excellence
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Student Results & Achievements
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-purple-100 sm:text-lg">
            Celebrating the hard work, dedication, and achievements of VAISIRI
            PU College students across state board examinations and competitive
            entrance tests.
          </p>
        </Container>
      </section>

      <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <Container className="!mx-auto !w-full !max-w-7xl">
          {/* Partition / tabs */}
          <div className="mx-auto mb-8 grid max-w-3xl gap-3 rounded-3xl border border-purple-100 bg-white/90 p-3 shadow-[0_12px_35px_rgba(74,18,111,0.10)] sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleTabChange("state")}
              aria-pressed={activeTab === "state"}
              className={`rounded-2xl px-5 py-4 text-left transition duration-300 ${
                activeTab === "state"
                  ? "bg-gradient-to-r from-[#6D28A5] to-[#4A126F] text-white shadow-lg"
                  : "bg-[#F8F1FF] text-[#4A126F] hover:bg-[#EFE0FF]"
              }`}
            >
              <span className="block text-lg font-extrabold">State Board Results</span>
              <span className={`mt-1 block text-sm ${activeTab === "state" ? "text-purple-100" : "text-purple-600"}`}>
                PUC marks & subject performance
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange("competitive")}
              aria-pressed={activeTab === "competitive"}
              className={`rounded-2xl px-5 py-4 text-left transition duration-300 ${
                activeTab === "competitive"
                  ? "bg-gradient-to-r from-[#6D28A5] to-[#4A126F] text-white shadow-lg"
                  : "bg-[#F8F1FF] text-[#4A126F] hover:bg-[#EFE0FF]"
              }`}
            >
              <span className="block text-lg font-extrabold">Competitive Results</span>
              <span className={`mt-1 block text-sm ${activeTab === "competitive" ? "text-purple-100" : "text-purple-600"}`}>
                NEET, JEE, KCET & entrance achievements
              </span>
            </button>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#321047] sm:text-3xl">
                {activeTab === "state" ? "State Board Achievers" : "Competitive Exam Achievers"}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {activeTab === "state"
                  ? "Celebrating academic performance in PUC board examinations."
                  : "Highlighting student achievements in competitive entrance examinations."}
              </p>
            </div>

            <label className="block w-full sm:max-w-xs">
              <span className="sr-only">Search student results</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, exam, achievement..."
                className="w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-sm text-[#321047] outline-none transition placeholder:text-purple-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </label>
          </div>

          {visibleStudents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleStudents.map((student) => (
                <ResultCard
                  key={student.id}
                  student={student}
                  competitive={activeTab === "competitive"}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-purple-100 bg-white/90 px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl text-purple-700">
                ⌕
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-[#321047]">
                No matching results found
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Try a different student name, exam, or achievement keyword.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
