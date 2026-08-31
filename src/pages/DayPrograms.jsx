import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG, NSW_SUBURBS, ACTIVITIES } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function DayPrograms() {
  useSEO({
    title: "Day Programs Across Sydney",
    description: "Low-cost NDIS Day Programs across Greater Sydney including Bankstown, Liverpool, Cabramatta, Merrylands, Auburn, Guildford, Blacktown, Granville, Villawood and Fairfield.",
    path: "/day-programs",
  });

  return (
    <>
      <PageHero eyebrow="We have vacancies" title="Day Programs" img={IMG.dayprograms} color="var(--green)">
        <p>Make connections with your local community through centre-based and community-based activities of your choosing.</p>
      </PageHero>

      <div className="cdc-cta-band" style={{ background: "var(--sky)" }}>
        <div className="cdc-shell" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--white)" }}>All Activities Are Low-Cost!*</h2>
          <p style={{ color: "#DDF0FF", marginTop: ".5rem" }}>*Most programs are low-cost, except when external contractors are engaged, in which case fees apply.</p>
          <Link to="/contact" className="cdc-btn cdc-btn-white" style={{ marginTop: "1.3rem" }}>Contact Us</Link>
        </div>
      </div>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Find your local hub</span>
            <h2>Day Program locations across NSW</h2>
          </Reveal>
          <div className="cdc-suburb-grid">
            {NSW_SUBURBS.map((s) => (
              <Link to={`/day-programs/${s.slug}`} key={s.slug} className="cdc-suburb-card">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">A day in the life</span>
            <h2>Activity spotlights</h2>
          </Reveal>
          {ACTIVITIES.map((a, i) => (
            <Reveal as="div" className={`cdc-activity${i % 2 ? " reverse" : ""}`} key={a.title}>
              <img src={a.img} alt={a.title} />
              <div>
                <h3>{a.title}</h3>
                <p className="desc">{a.desc}</p>
                <ul className="cdc-outcomes">
                  {a.outcomes.map((o) => (
                    <li key={o}><CheckCircle2 size={17} /> {o}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-cta-card">
            <p>Your Day Program journey starts here with Core!</p>
            <Link to="/contact" className="cdc-btn cdc-btn-pink">Contact Us <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
