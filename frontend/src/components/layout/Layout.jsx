
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import Marquee from "./Marquee.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      {/* Main navigation and admissions ticker stay together */}
      <div className="sticky top-0 z-50 bg-white">
        <Header />

        {/* Constant gap between navigation and ticker */}
        <div className="pt-2">
          <Marquee />
        </div>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
