import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Instagram, Facebook, Youtube, ChevronRight, Star } from "lucide-react";
import { SPECIALISED_SERVICES } from "../data.js";

const SERVICE_LINKS = SPECIALISED_SERVICES.map((s) => ({ label: s.title, to: `/our-services/${s.slug}` }));

function GoogleLogo({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18A13.98 13.98 0 0 1 10.92 24c0-1.45.25-2.86.77-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

// Rotating messages in the thin announcement bar above the header.
const ANNOUNCEMENTS = [
  { text: "Servicing all areas of Greater Sydney" },
  { text: "Refer a Participant", to: "/refer-a-participant" },
  { text: "Call us on 1800 95 6474", href: "tel:1800956474" },
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
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Services", to: "/day-programs", dropdown: true },
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
          <Link to="/" className="cdc-brand" aria-label="Core Support Care — home">
            <img src="/brand/logo-icon.png" alt="" className="cdc-brand-icon" />
            <strong>Core<span> Support Care</span></strong>
          </Link>

          <div className="cdc-google-rating cdc-google-rating-center" aria-label="Rated 5.0 stars on Google">
            <GoogleLogo size={16} />
            <span className="cdc-google-rating-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <strong>5.0</strong> Google Rating
          </div>

          <div className="cdc-utility-actions">
            <a href="tel:1800956474" className="cdc-btn cdc-btn-sky cdc-btn-sm cdc-phone-pill">
              <Phone size={15} /> 1800 95 6474
            </a>
            <Link to="/refer-a-participant" className="cdc-btn cdc-btn-sky cdc-btn-sm cdc-referral-pill">Referral</Link>
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
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => `cdc-nav-link${isActive ? " active" : ""}`}>
                  {l.label}
                </NavLink>
                {l.dropdown && dayOpen && (
                  <div className="cdc-dropdown">
                    {SERVICE_LINKS.map((s) => (
                      <Link to={s.to} key={s.label} onClick={() => setDayOpen(false)}>
                        {s.label}
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
            <span className="cdc-brand" style={{ pointerEvents: "none" }}>
              <img src="/brand/logo-icon.png" alt="" className="cdc-brand-icon" />
              <strong style={{ color: "var(--white)" }}>Core Support Care</strong>
            </span>
            <button className="cdc-menu-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={18} /></button>
          </div>
          {NAV_LINKS.map((l) => (
            <React.Fragment key={l.label}>
              <Link to={l.to} onClick={() => setMenuOpen(false)}>{l.label} <ChevronRight size={16} /></Link>
              {l.dropdown && SERVICE_LINKS.map((s) => (
                <Link key={s.label} to={s.to} className="cdc-mobile-sublink" onClick={() => setMenuOpen(false)}>{s.label}</Link>
              ))}
            </React.Fragment>
          ))}
          <Link to="/day-programs" onClick={() => setMenuOpen(false)}>Locations <ChevronRight size={16} /></Link>
          <Link to="/contact" className="cdc-mobile-cta" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}
