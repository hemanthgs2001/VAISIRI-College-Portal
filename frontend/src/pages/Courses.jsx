import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";

const courses = [
  { name: "Science (PCMB)", text: "Physics, Chemistry, Mathematics, Biology" },
  { name: "Science (PCMC)", text: "Physics, Chemistry, Mathematics, Computer Science" },
  { name: "Commerce", text: "Accountancy, Business Studies, Economics" },
];

export default function Courses() {
  return (
    <Container className="py-16">
      <SectionTitle eyebrow="Courses" title="1 PUC & 2 PUC Streams" />
      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((c) => (
          <div key={c.name} className="rounded-2xl border border-brand-100 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-brand-700">{c.name}</h3>
            <p className="mt-2 text-gray-600">{c.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
