import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Instagram, Facebook, Youtube, ShieldCheck, BadgeCheck, Award, ChevronRight } from "lucide-react";
import { CoreMark } from "./ui.jsx";
import { NSW_SUBURBS } from "../data.js";

const NAV_LINKS = [
  { label: "About Us", to: "/about-us" },
  { label: "Day Programs", to: "/day-programs", dropdown: true },
  { label: "Group Home SIL", to: "/group-home-sil" },
  { label: "Respite", to: "/respite" },
  { label: "Other Services", to: "/other-services" },
  { label: "Careers", to: "/careers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dayOpen, setDayOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className={`cdc-utility${scrolled ? " scrolled" : ""}`}>
        <div className="cdc-shell-wide cdc-utility-inner">
          <Link to="/" className="cdc-brand" aria-label="Core Disability Care — home">
            <CoreMark size={40} />
            <strong>core<span> care</span></strong>
          </Link>

          <div className="cdc-badges">
            <span className="cdc-badge-pill green"><ShieldCheck size={13} /> High Intensity Registered</span>
            <span className="cdc-badge-pill navy"><BadgeCheck size={13} /> NDIS Registered Provider</span>
            <span className="cdc-badge-pill dark"><Award size={13} /> Best Workplace 2026</span>
          </div>

          <div className="cdc-utility-actions">
            <a href="tel:1300022787" className="cdc-call">
              <span className="ic"><Phone size={15} /></span>
              <div><span>Call Us on</span><strong>1300 022 787</strong></div>
            </a>
            <Link to="/contact" className="cdc-btn cdc-btn-pink cdc-btn-sm">Contact Us</Link>
            <button className="cdc-menu-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="cdc-navbar">
        <div className="cdc-shell-wide cdc-navbar-inner">
          <nav className="cdc-nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <div
                className={`cdc-nav-item${l.dropdown && dayOpen ? " open" : ""}`}
                key={l.label}
                onMouseEnter={() => l.dropdown && setDayOpen(true)}
                onMouseLeave={() => l.dropdown && setDayOpen(false)}
              >
                <NavLink to={l.to} className={({ isActive }) => `cdc-nav-link${isActive ? " active" : ""}`}>
                  {l.label}
                </NavLink>
                {l.dropdown && dayOpen && (
                  <div className="cdc-dropdown">
                    {NSW_SUBURBS.map((s) => (
                      <Link to={`/day-programs/${s.slug}`} key={s.slug} onClick={() => setDayOpen(false)}>
                        {s.name} Day Program
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="cdc-navbar-right">
            <div className="cdc-social">
              <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={13} /></a>
            </div>
            <div className="cdc-navbar-sep" />
            <div className="cdc-navbar-links">
              <Link to="/day-programs">Locations</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>
        </div>
        <div className={`cdc-mobile-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />
        <div className={`cdc-mobile-nav${menuOpen ? " open" : ""}`}>
          <div className="cdc-mobile-nav-head">
            <span className="cdc-brand" style={{ pointerEvents: "none" }}><CoreMark size={30} dark /><strong style={{ color: "var(--white)" }}>core care</strong></span>
            <button className="cdc-menu-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={18} /></button>
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setMenuOpen(false)}>{l.label} <ChevronRight size={16} /></Link>
          ))}
          <Link to="/day-programs" onClick={() => setMenuOpen(false)}>Locations <ChevronRight size={16} /></Link>
          <Link to="/contact" className="cdc-mobile-cta" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}
