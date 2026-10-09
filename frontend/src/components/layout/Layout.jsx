import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Marquee from "./Marquee.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <Marquee />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
