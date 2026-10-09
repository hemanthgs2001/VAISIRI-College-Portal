import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";

export default function About() {
  return (
    <Container className="py-16">
      <SectionTitle eyebrow="About Us" title="VAISIRI PU College" />
      <p className="mx-auto max-w-3xl text-center text-gray-600">
        Replace this text with the college's story, vision, mission and management details.
      </p>
    </Container>
  );
}
