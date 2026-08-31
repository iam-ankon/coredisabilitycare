import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { CtaBand } from "../components/ui.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="cdc-scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />;
}

export default function Layout() {
  return (
    <div className="cdc">
      <ScrollToTop />
      <ScrollProgress />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <CtaBand />
      <Footer />
    </div>
  );
}
