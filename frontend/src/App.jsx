import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import Admission from "./pages/Admission.jsx";  
import Facilities from "./pages/Facilities.jsx";
import Results from "./pages/Results.jsx";
import Blogs from "./pages/Blogs.jsx";
import NewsArticle from "./pages/NewsArticle.jsx";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<NewsArticle />} />
        <Route path="/results" element={<Results />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="*" element={<Placeholder title="Page not found" />} />
        <Route path="/admission" element={<Admission />} />
      </Route>
    </Routes>
  );
}
