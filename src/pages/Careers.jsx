import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG, OPEN_ROLES } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Careers() {
  useSEO({
    title: "Careers — Join Our Team",
    description: "We're hiring support workers, allied health professionals and coordinators across Greater Sydney. See current openings and work experience placements at Core Disability Care.",
    path: "/careers",
  });

  return (
    <>
      <PageHero eyebrow="Careers" title="Join a team that shows up" img={IMG.careers} color="var(--navy)">
        <p>We're always looking for support workers, allied health professionals and coordinators who bring patience, curiosity and consistency to their work.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell" style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Current Openings</span>
            <h2>Roles we're hiring for</h2>
          </Reveal>
          <Reveal className="cdc-roles-list">
            {OPEN_ROLES.map((r) => (
              <div className="cdc-role-row" key={r.title}>
                {r.title} <span className="pill">{r.type}</span>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "var(--ink-soft)" }}>
              Don't see the right role? We also welcome Work Experience placements
              for students and career-changers exploring disability support.
            </p>
            <Link to="/contact" className="cdc-btn cdc-btn-pink" style={{ marginTop: "1.3rem" }}>
              Send Us Your Resume <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
