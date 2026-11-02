import { Link } from "react-router-dom";

const highlights = [
  { value: "Science", label: "Focused PU education" },
  { value: "PCMB", label: "Physics, Chemistry, Mathematics & Biology" },
  { value: "PCMC", label: "Physics, Chemistry, Mathematics & Computer Science" },
  { value: "Holistic", label: "Learning beyond textbooks" },
];

const values = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "Build strong subject foundations through structured lessons, regular practice, revision, and guided learning.",
  },
  {
    number: "02",
    title: "Personal Guidance",
    description:
      "Encourage every learner to ask questions, understand their strengths, and make informed academic choices.",
  },
  {
    number: "03",
    title: "Discipline & Values",
    description:
      "Promote responsibility, consistency, respect, and a positive attitude towards learning and community.",
  },
  {
    number: "04",
    title: "All-round Development",
    description:
      "Create opportunities for students to develop confidence, communication, teamwork, and leadership skills.",
  },
];

const learningAreas = [
  {
    title: "Strong Science Foundations",
    description:
      "A focused learning environment for students pursuing the PCMB and PCMC combinations.",
    icon: "✦",
  },
  {
    title: "Competitive Exam Readiness",
    description:
      "Academic support that helps students work towards examinations such as NEET, JEE, and KCET.",
    icon: "◎",
  },
  {
    title: "Practical Understanding",
    description:
      "Connect classroom concepts with demonstrations, activities, discussions, and practical learning.",
    icon: "⌘",
  },
  {
    title: "Career Awareness",
    description:
      "Help students explore future study options and understand the pathways available after PU education.",
    icon: "↗",
  },
];

const teamMembers = [
  {
    name: "SRI K. B. JAYANNA",
    role: "Founder & President",
    group: "Vidyavahini Group",
    image: "/images/management/president.jpg",
  },
  {
    name: "SRI N. B. PRADEEP KUMAR",
    role: "Secretary",
    group: "Vidyavahini Group",
    image: "/images/management/secretary.jpg",
  },
];

const milestones = [
  {
    year: "Our Vision",
    title: "Inspiring tomorrow’s achievers",
    description:
      "To nurture confident, curious, and responsible learners who are prepared to contribute positively to society.",
  },
  {
    year: "Our Mission",
    title: "Learning with purpose",
    description:
      "To provide supportive education through dedicated teaching, strong academic foundations, personal guidance, and opportunities for growth.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#FCF9FF] text-[#321047]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F8EEFF] via-[#FCF9FF] to-[#EEDCFA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#DCC0EF]/60 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-24 -z-10 h-80 w-80 rounded-full bg-[#E8D4F6]/70 blur-2xl"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5C9F2] bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6D28A5] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#8B36B5]" />
              About VAISIRI
            </span>

            <h1 className="mt-6 max-w-2xl font-serif text-4xl font-black leading-[1.08] text-[#321047] sm:text-5xl lg:text-6xl">
              Learning today.
              <span className="mt-2 block text-[#7C35A8]">
                Leading tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#66576D] sm:text-lg">
              VAISIRI PU College is committed to helping students build a
              strong academic foundation, discover their potential, and move
              towards their future goals with confidence.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#76647F] sm:text-base">
              With a focus on Science education, meaningful guidance, and
              holistic development, we aim to make every student’s learning
              journey purposeful and rewarding.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#4A126F] to-[#7C35A8] px-7 py-3 text-sm font-extrabold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Science Courses <span className="ml-2">→</span>
              </Link>
              <Link
                to="/admission"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#CFADE3] bg-white px-7 py-3 text-sm font-extrabold text-[#5B1B83] transition hover:bg-[#F4E8FC]"
              >
                Enquire About Admissions
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#8B36B5] to-[#D9B7EF] opacity-80 blur-[1px] sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[1.6rem] border-4 border-white bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85"
                alt="Students walking together on a college campus"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24102F]/90 via-[#24102F]/45 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E9D5F5]">
                  Your journey starts here
                </p>
                <p className="mt-2 font-serif text-2xl font-black text-white sm:text-3xl">
                  Discover. Learn. Grow.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-[#E9D5F5] bg-white px-4 py-3 shadow-xl sm:-left-7 sm:px-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#8B36B5]">
                VAISIRI PU College
              </p>
              <p className="mt-1 text-sm font-bold text-[#321047]">
                Shape your tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {highlights.map((item) => (
            <article
              key={item.value}
              className="rounded-2xl border border-[#E9D5F5] bg-white p-4 shadow-sm sm:p-5"
            >
              <p className="font-serif text-xl font-black text-[#6D28A5] sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#76647F] sm:text-sm">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* About story */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Teacher guiding students in a classroom"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#4A126F] px-5 py-4 text-white shadow-xl sm:-right-5">
              <p className="font-serif text-2xl font-black">Learn</p>
              <p className="text-xs font-semibold text-purple-100">
                with confidence
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#8B36B5]">
              Who We Are
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-[#321047] sm:text-4xl">
              An environment that supports every learner
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#66576D] sm:text-base sm:leading-8">
              <p>
                The years of Pre-University education are an important stage
                in a student’s academic journey. At VAISIRI PU College, our
                focus is to make these years meaningful through clear
                explanations, consistent practice, encouragement, and
                responsible mentoring.
              </p>
              <p>
                We believe students learn best when they feel supported and
                motivated. Our approach brings together classroom learning,
                practical understanding, personal development, and awareness
                of future opportunities.
              </p>
              <p>
                Whether a student is preparing for board examinations or
                exploring competitive pathways, we encourage curiosity,
                discipline, and steady progress at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FCF9FF] py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#8B36B5]">
              What Guides Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              The values behind our learning culture
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#76647F] sm:text-base">
              A supportive college experience is built on strong values,
              meaningful relationships, and a shared commitment to growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-[#E9D5F5] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0DDFC] text-sm font-black text-[#6D28A5]">
                  {item.number}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-[#4A126F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#76647F]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning areas */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#8B36B5]">
              The VAISIRI Approach
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              Learning that looks beyond the classroom
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {learningAreas.map((item) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-[#E9D5F5] bg-[#FCF9FF] p-5 sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEDCFA] text-2xl font-bold text-[#6D28A5]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-extrabold text-[#4A126F]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#76647F]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-gradient-to-br from-[#4A126F] via-[#64218B] to-[#8B36B5] py-14 text-white sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-purple-200">
              Our Purpose
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black sm:text-4xl">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {milestones.map((item, index) => (
              <article
                key={item.year}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8"
              >
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-purple-100">
                  {item.year}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-black sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-purple-100 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="bg-[#FCF9FF] py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#8B36B5]">
              Leadership
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black text-[#4A126F] sm:text-4xl">
              Message From the Management
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#76647F] sm:text-base">
              Leadership rooted in purpose, responsibility, and a commitment
              to student development.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-[#E9D5F5] bg-white shadow-sm"
              >
                <div className="grid sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-64 w-full object-cover object-center sm:h-full sm:min-h-[330px]"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85";
                      }}
                    />
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8B36B5]">
                      {member.role}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-black leading-tight text-[#321047] sm:text-2xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-[#6D28A5]">
                      {member.group}
                    </p>
                    <div className="mt-5 space-y-3 text-sm leading-7 text-[#76647F]">
                      <p>
                        We believe education should nurture knowledge,
                        confidence, character, and a sense of responsibility.
                        Our aim is to provide students with an encouraging
                        environment where they can learn with purpose and
                        prepare for the opportunities ahead.
                      </p>
                      <p>
                        We thank parents and students for their trust and
                        encourage every learner to make the most of their
                        academic journey.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs leading-5 text-[#8B36B5]">
            Management message copy is sample website content. Replace it with
            the officially approved message before publishing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#321047] via-[#5B1B83] to-[#8B36B5] px-6 py-10 text-center text-white shadow-xl sm:px-12 sm:py-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-purple-200">
            Begin Your Journey
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-black sm:text-4xl">
            Take the next step towards your future
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
            Explore our Science combinations and connect with VAISIRI PU
            College to learn more about admissions.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admission"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-extrabold text-[#4A126F] transition hover:-translate-y-0.5 hover:bg-[#F5E9FC]"
            >
              Enquire Now →
            </Link>
            <Link
              to="/courses"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-7 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
