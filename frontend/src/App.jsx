import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import Admission from "./pages/Admission.jsx";  


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Placeholder title="Facilities" />} />
        <Route path="/blogs" element={<Placeholder title="Blogs" />} />
        <Route path="/news" element={<Placeholder title="News Articles" />} />
        <Route path="/results" element={<Placeholder title="Results" />} />
        <Route path="/v-mastermind" element={<Placeholder title="V-Mastermind" />} />
        <Route path="*" element={<Placeholder title="Page not found" />} />
        <Route path="/admission" element={<Admission />} />
      </Route>
    </Routes>
  );
}
