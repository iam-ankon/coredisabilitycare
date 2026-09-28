import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, PartyPopper } from "lucide-react";
import { PageHero, Reveal, ArrowCarousel } from "../components/ui.jsx";
import { IMG, ACTIVITIES, GALLERY } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function DayPrograms() {
  useSEO({
    title: "Day Programs Across Sydney",
    description: "Low-cost NDIS Day Programs across Greater Sydney including Bankstown, Liverpool, Cabramatta, Merrylands, Auburn, Guildford, Blacktown, Granville, Villawood and Fairfield.",
    path: "/day-programs",
  });

  return (
    <>
      <PageHero
        eyebrow="We have vacancies"
        title="Day Programs"
        img={IMG.dayprograms}
        color="var(--green)"
        sticker={{ color: "pink", icon: PartyPopper, label: "Great Locations!" }}
      >
        <p>Make connections with your local community through centre-based and community-based activities of your choosing.</p>
      </PageHero>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">A day in the life</span>
            <h2>Activity spotlights</h2>
          </Reveal>
          {ACTIVITIES.map((a, i) => (
            <Reveal as="div" className={`cdc-activity${i % 2 ? " reverse" : ""}`} key={a.title}>
              <ArrowCarousel images={[a.img, GALLERY[i % GALLERY.length], GALLERY[(i + 1) % GALLERY.length]]} alt={a.title} />
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
