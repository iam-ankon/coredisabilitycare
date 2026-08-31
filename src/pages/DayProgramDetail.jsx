import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG, NSW_SUBURBS, ACTIVITIES } from "../data.js";
import { useSEO, SITE_URL } from "../hooks/useSEO.js";
import NotFound from "./NotFound.jsx";

// Rotates through a few opening lines and a couple of activity highlights so
// each suburb page reads as distinct content rather than a find/replace of
// the same paragraph — that duplication is what search engines penalise.
const INTROS = [
  (n) => `Families in and around ${n} choose Core for a Day Program that actually adapts to their loved one — not the other way around.`,
  (n) => `Our ${n} hub runs a mix of centre-based and out-and-about activities, built around what participants in the local area actually want to do.`,
  (n) => `If you're looking for a Day Program near ${n}, our local team runs small-group and 1:1 sessions designed around real interests, not a fixed timetable.`,
];

export default function DayProgramDetail() {
  const { slug } = useParams();
  const suburb = NSW_SUBURBS.find((s) => s.slug === slug);

  if (!suburb) return <NotFound />;

  const idx = NSW_SUBURBS.findIndex((s) => s.slug === slug);
  const intro = INTROS[idx % INTROS.length](suburb.name);
  const featured = ACTIVITIES[idx % ACTIVITIES.length];

  useSEO({
    title: `${suburb.name} Day Program`,
    description: `NDIS Day Program in ${suburb.name} NSW ${suburb.postcode}, part of the ${suburb.region} area. Centre-based and community activities with qualified support workers — enquire today.`,
    path: `/day-programs/${suburb.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: `Core Disability Care — ${suburb.name} Day Program`,
      url: `${SITE_URL}/day-programs/${suburb.slug}`,
      areaServed: { "@type": "Place", name: `${suburb.name} NSW ${suburb.postcode}` },
      telephone: "+61-1300-022-787",
    },
  });

  return (
    <>
      <PageHero eyebrow="Day Program" title={`${suburb.name} Day Program`} img={IMG.dayprograms} color="var(--green)">
        <p>Serving {suburb.name} and the wider {suburb.region} area — a hub of fun and activities, staffed by qualified support workers who love what they do.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <Reveal>
            <span className="cdc-script">Welcome to {suburb.name}</span>
            <h2 style={{ marginTop: ".4rem" }}>Fun, friendship and new skills</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "1rem", fontSize: "1.02rem" }}>{intro}</p>
            <p style={{ color: "var(--ink-soft)", marginTop: ".9rem", fontSize: "1.02rem" }}>
              A current favourite with our {suburb.name} participants is <strong style={{ color: "var(--navy)" }}>{featured.title}</strong> —
              {" "}{featured.desc.charAt(0).toLowerCase() + featured.desc.slice(1)}
            </p>
            <div className="cdc-contact-info-row" style={{ marginTop: "1.3rem" }}>
              <MapPin size={17} color="var(--pink)" /> {suburb.name} NSW {suburb.postcode} ({suburb.region} area) — call for the exact hub address
            </div>
            <ul className="cdc-outcomes" style={{ marginTop: "1.3rem" }}>
              <li><CheckCircle2 size={17} /> Centre-based and community-based activities</li>
              <li><CheckCircle2 size={17} /> Qualified, experienced support workers</li>
              <li><CheckCircle2 size={17} /> Sensory room and creative spaces</li>
              <li><CheckCircle2 size={17} /> Transport available for eligible participants</li>
            </ul>
            <div style={{ marginTop: "1.6rem" }}>
              <Link to="/contact" className="cdc-btn cdc-btn-navy">Enquire About This Hub <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
          <Reveal>
            <img src={IMG.dayprograms} alt={`${suburb.name} Day Program activities`} style={{ borderRadius: "1.3rem", width: "100%", height: 400, objectFit: "cover" }} />
          </Reveal>
        </div>
      </section>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Other locations</span>
            <h2>More Day Program hubs nearby</h2>
          </Reveal>
          <div className="cdc-suburb-grid">
            {NSW_SUBURBS.filter((s) => s.slug !== slug).slice(0, 10).map((s) => (
              <Link to={`/day-programs/${s.slug}`} key={s.slug} className="cdc-suburb-card">{s.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
