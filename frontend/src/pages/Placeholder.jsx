import Container from "../components/common/Container.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";

export default function Placeholder({ title }) {
  return (
    <Container className="py-24">
      <SectionTitle title={title} subtitle="This page is coming soon." />
    </Container>
  );
}
