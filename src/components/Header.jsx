import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Instagram, Facebook, Youtube, ChevronRight, Star } from "lucide-react";

const DAY_PROGRAM_REGIONS = ["Greater Sydney", "New South Wales"];

// Rotating messages in the thin announcement bar above the header.
const ANNOUNCEMENTS = [
  { text: "Servicing all areas of Greater Sydney" },
  { text: "Refer a Participant", to: "/contact" },
  { text: "Call us on 1300 022 787", href: "tel:1300022787" },
];

const HOLD_MS = 3200;    // how long a message sits fully visible
const LETTER_MS = 28;    // stagger between letters
const LETTER_ANIM_MS = 420;

// Each message dissolves letter by letter (left to right), then the next one
// writes itself in the same way.
function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const len = ANNOUNCEMENTS[index].text.length;
    const sweep = reduced ? 0 : len * LETTER_MS + LETTER_ANIM_MS;
    const id = phase === "in"
      ? setTimeout(() => setPhase("out"), sweep + HOLD_MS)
      : setTimeout(() => { setIndex((i) => (i + 1) % ANNOUNCEMENTS.length); setPhase("in"); }, sweep);
    return () => clearTimeout(id);
  }, [index, phase]);

  const a = ANNOUNCEMENTS[index];
  const letters = (
    <span className={`cdc-announce-text ${phase}`} key={`${index}-${phase}`} aria-hidden="true">
      {[...a.text].map((ch, i) => (
        <span key={i} style={{ animationDelay: `${i * LETTER_MS}ms` }}>{ch === " " ? "\u00A0" : ch}</span>
      ))}
    </span>
  );

  return (
    <div className="cdc-announce" role="region" aria-label="Announcements">
      {a.to ? (
        <Link to={a.to} aria-label={a.text}>{letters}</Link>
      ) : a.href ? (
        <a href={a.href} aria-label={a.text}>{letters}</a>
      ) : (
        <span aria-label={a.text} role="text">{letters}</span>
      )}
    </div>
  );
}

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
      <AnnouncementBar />

      {/* Utility bar */}
      <div className={`cdc-utility${scrolled ? " scrolled" : ""}`}>
        <div className="cdc-shell-wide cdc-utility-inner">
          <Link to="/" className="cdc-brand" aria-label="Core Disability Care — home">
            <img src="/brand/logo-icon.png" alt="" className="cdc-brand-icon" />
            <strong>Core<span> Disability Care</span></strong>
          </Link>

          <div className="cdc-utility-actions">
            <a href="tel:1300022787" className="cdc-btn cdc-btn-sky cdc-btn-sm cdc-phone-pill">
              <Phone size={15} /> 1300 022 787
            </a>
            <Link to="/contact" className="cdc-btn cdc-btn-sky cdc-btn-sm cdc-referral-pill">Referral</Link>
            <Link to="/contact" className="cdc-btn cdc-btn-gradient cdc-btn-sm">Enquire Now</Link>
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
                    {DAY_PROGRAM_REGIONS.map((r) => (
                      <Link to="/day-programs" key={r} onClick={() => setDayOpen(false)}>
                        {r}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="cdc-navbar-right">
            <div className="cdc-google-rating" aria-label="Rated 5.0 stars on Google">
              <span className="cdc-google-rating-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <strong>5.0</strong> Google Rating
            </div>
            <div className="cdc-navbar-sep" />
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
            <span className="cdc-brand" style={{ pointerEvents: "none" }}>
              <img src="/brand/logo-icon.png" alt="" className="cdc-brand-icon" />
              <strong style={{ color: "var(--white)" }}>Core Disability Care</strong>
            </span>
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
