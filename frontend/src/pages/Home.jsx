import { Link } from "react-router-dom";
import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import Button from "../components/common/Button.jsx";

const programCards = [
  {
    title: "PU Programs",
    text: "Science: PCMB | PCMC\nCommerce: SEBA | SCBA | CEBA | MEBA",
    link: "/courses",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Gateway to Competitive & Professional Careers",
    text: "Preparing Future Achievers for NEET | JEE | KCET | CA | CS | CLAT | CMA",
    link: "/courses",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Beyond the Classroom Learning",
    text: "Crash Courses | Bridge Courses | Tally | Career Certification Programs",
    link: "/facilities",
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "Experienced & Qualified Faculty",
    text: "Guided by Expert Educators Across Science & Commerce Streams",
    link: "/about",
    color: "from-red-600 to-red-700",
  },
];

const features = [
  {
    icon: "✦",
    title: "Morning Prayer, Yoga, and Meditation",
    text: "Sessions designed to promote focus, discipline, and mental well-being.",
  },
  {
    icon: "🎓",
    title: "Experienced Faculty",
    text: "Qualified educators with expertise in PU Board and competitive examinations.",
  },
  {
    icon: "🏆",
    title: "Competitive Exam Coaching",
    text: "Preparation support for NEET, JEE, KCET, CA, CS, CMA and CLAT.",
  },
  {
    icon: "♙",
    title: "Personalized Mentoring",
    text: "Academic guidance and career counselling to help students choose the right path.",
  },
  {
    icon: "♧",
    title: "Student Development",
    text: "Activities that encourage teamwork, leadership, and personal growth.",
  },
  {
    icon: "▣",
    title: "Modern Learning Facilities",
    text: "Learning spaces and resources designed to support academic excellence.",
  },
  {
    icon: "⚗",
    title: "Practical Learning",
    text: "Opportunities to strengthen concepts through practical and activity-based learning.",
  },
  {
    icon: "▤",
    title: "Academic Support",
    text: "Structured learning, revision, and assessment to help students progress.",
  },
];

const testimonials = [
  {
    name: "Student Experience",
    text: "The guidance and encouragement from our teachers help us work towards our academic goals with confidence.",
  },
  {
    name: "Academic Journey",
    text: "A supportive learning environment helps students improve their knowledge, discipline, and preparation.",
  },
  {
    name: "Campus Experience",
    text: "College activities and academic mentoring make learning more engaging and meaningful.",
  },
];

const newsItems = [
  {
    title: "Academic Achievements",
    text: "Celebrating student achievements and academic milestones.",
    image: "/images/news/news-1.jpg",
  },
  {
    title: "College Activities",
    text: "Highlights from events, programmes, and campus activities.",
    image: "/images/news/news-2.jpg",
  },
  {
    title: "Student Success",
    text: "Stories showcasing the dedication and achievements of our students.",
    image: "/images/news/news-3.jpg",
  },
];

const videos = [
  { title: "College Introduction", id: "" },
  { title: "Academic Activities", id: "" },
  { title: "Campus Highlights", id: "" },
  { title: "Student Activities", id: "" },
];

const management = [
  {
    name: "Management Representative",
    role: "Founder & President",
    image: "/images/management/president.jpg",
    text: "Our vision is to provide an educational experience that develops knowledge, character, leadership, and confidence in every student.",
  },
  {
    name: "Management Representative",
    role: "Secretary",
    image: "/images/management/secretary.jpg",
    text: "We are committed to quality education and holistic development, helping students prepare for their academic and professional futures.",
  },
];

const closingCards = [
  {
    icon: "🎓",
    title: "Blogs & Career Guidance",
    text: "Explore educational insights and career guidance for your academic journey.",
    button: "Explore Blogs",
    link: "/blogs",
  },
  {
    icon: "⌂",
    title: "Facilities",
    text: "Discover the learning facilities and student support available at our college.",
    button: "Explore Facilities",
    link: "/facilities",
  },
  {
    icon: "▣",
    title: "Admissions",
    text: "Take the next step towards your academic journey at VAISIRI PU College.",
    button: "Apply Now",
    link: "/admission",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 py-16 text-white lg:py-24">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full bg-gold-400 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-900">
              VAISIRI PU College
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Receiving Quality Education in VAISIRI Is Your Right
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-100">
              Experience quality education with expert mentoring, academic
              guidance, modern learning facilities, and preparation for
              future opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admission">
                <Button variant="gold">Apply for 2026-27</Button>
              </Link>

              <Link to="/courses">
                <Button variant="outline">Explore Courses</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Programme and Service Cards */}
      <section className="bg-gray-50 py-8">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {programCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className={`flex min-h-40 flex-col rounded-lg bg-gradient-to-br ${card.color} p-5 text-white shadow-lg transition hover:-translate-y-1`}
              >
                <h2 className="text-lg font-extrabold leading-7">
                  {card.title}
                </h2>

                <p className="mt-2 whitespace-pre-line text-sm leading-5 text-white/95">
                  {card.text}
                </p>

                <span className="mt-auto pt-5 text-sm font-bold">
                  Discover More →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. College Introduction and Achievers */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="grid gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                VAISIRI PU College, Tumkur
              </h2>

              <p className="mt-2 font-semibold text-gray-500">
                About VAISIRI
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                VAISIRI PU College is committed to providing quality
                pre-university education, helping students build strong
                academic foundations and prepare for their future.
              </p>

              <h3 className="mt-6 font-extrabold text-gray-900">
                Our Academic Foundation
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Students can explore Science and Commerce streams, develop
                analytical skills, and strengthen their subject knowledge.
              </p>

              <h3 className="mt-5 font-extrabold text-gray-900">
                Competitive Preparation
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                Academic support and structured preparation help students
                work towards board examinations and competitive entrance tests.
              </p>

              <Link
                to="/about"
                className="mt-5 inline-block font-bold text-brand-700 hover:text-purple-600"
              >
                Learn More About Us →
              </Link>
            </div>

            <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-800 to-purple-600 p-8 text-center text-white">
              <span className="rounded-full bg-white px-6 py-3 font-extrabold text-brand-900">
                🏆 ACHIEVERS
              </span>

              <h3 className="mt-6 text-3xl font-extrabold">
                Celebrating Student Success
              </h3>

              <p className="mt-3 max-w-md leading-7 text-purple-100">
                Recognising academic dedication, achievements, and the
                hard work of our students.
              </p>

              <Link
                to="/results"
                className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-brand-900 transition hover:bg-gold-400"
              >
                View Results →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Special Features */}
      <section className="bg-white py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Special Features"
          />

          <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-500">
            Everything we provide is designed to support academic excellence,
            personal growth, and a better learning experience.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="overflow-hidden rounded-2xl border border-purple-100 bg-gray-50 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />

                <div className="p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl text-purple-700">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 font-bold leading-6 text-brand-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700 py-16 text-white">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <SectionTitle
            eyebrow="What Students Say"
            title="Testimonials"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-white/20 bg-white/10 p-7 shadow-lg backdrop-blur"
              >
                <div className="text-3xl text-yellow-300">“</div>

                <p className="leading-7 text-purple-50">
                  {item.text}
                </p>

                <h3 className="mt-5 font-extrabold">
                  {item.name}
                </h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. News and Media */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700">
                Latest Updates
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-brand-800">
                News & Media
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Discover college news, student achievements, academic
                excellence, and memorable milestones.
              </p>
            </div>

            <Link
              to="/news"
              className="shrink-0 rounded-xl bg-purple-700 px-6 py-3 text-center font-bold text-white hover:bg-brand-900"
            >
              View All →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-brand-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>

                  <Link
                    to="/news"
                    className="mt-4 inline-block font-bold text-purple-700 hover:text-orange-500"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. YouTube Videos */}
      <section className="bg-gray-100 py-12">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="mb-8 text-center text-3xl font-extrabold text-brand-900">
              YouTube Videos
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="flex min-h-48 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-5 text-center text-white"
                >
                  <span className="flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 text-2xl">
                    ▶
                  </span>

                  <h3 className="mt-4 font-bold">
                    {video.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    Add the college video link to display it here.
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Add your official YouTube video IDs to enable video playback.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Message From the Management */}
      <section className="bg-brand-900 py-16 text-white">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <SectionTitle
            eyebrow="Leadership"
            title="Message From the Management"
          />

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {management.map((person) => (
              <article
                key={person.role}
                className="overflow-hidden rounded-2xl bg-white p-7 text-center text-gray-700 shadow-xl sm:p-9"
              >
                <img
                  src={person.image}
                  alt={person.role}
                  className="mx-auto h-40 w-40 rounded-full border-2 border-purple-200 object-cover"
                  loading="lazy"
                />

                <h3 className="mt-5 text-xl font-extrabold text-brand-900">
                  {person.name}
                </h3>

                <p className="mt-2 font-semibold text-purple-600">
                  {person.role}
                </p>

                <p className="mt-5 leading-7">
                  {person.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Final Action Cards */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-700 py-12">
        <Container className="!mx-auto !w-full !max-w-none !px-4 sm:!px-5 lg:!px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {closingCards.map((card, index) => (
              <article
                key={card.title}
                className="flex flex-col items-center rounded-2xl border-t-4 border-orange-400 bg-white p-7 text-center shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl text-purple-700">
                  {card.icon}
                </div>

                <h2 className="mt-5 text-xl font-extrabold text-brand-900">
                  {card.title}
                </h2>

                <p className="mt-3 leading-6 text-gray-600">
                  {card.text}
                </p>

                <Link
                  to={card.link}
                  className={`mt-6 rounded-full px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 ${
                    index === 2
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-brand-900 hover:bg-purple-700"
                  }`}
                >
                  {card.button} →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}