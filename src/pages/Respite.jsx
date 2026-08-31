import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG, RESPITE_BENEFITS } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Respite() {
  useSEO({
    title: "Respite Care — Short Term Accommodation (STA)",
    description: "Respite (STA) that feels like a holiday. A safe, fun home for your loved one so everyone can rest, recharge and prevent carer burnout.",
    path: "/respite",
  });

  return (
    <>
      <PageHero eyebrow="Respite (STA)" title="A break that feels like a holiday" img={IMG.respiteBeach} color="var(--sky)">
        <p>We provide a safe and fun home for your loved one, so everyone can relax and re-energise with peace of mind.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <Reveal>
            <span className="cdc-script">Why respite matters</span>
            <h2 style={{ marginTop: ".4rem", marginBottom: "1.4rem" }}>Rest for carers, adventure for participants</h2>
            {RESPITE_BENEFITS.map((b) => (
              <div className="cdc-benefit" key={b.title}>
                <strong>{b.title}: </strong>
                <p style={{ display: "inline" }}>{b.desc}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <img src={IMG.respiteBeach} alt="A Core Disability Care participant enjoying respite by the water" style={{ borderRadius: "1.3rem", width: "100%", height: 460, objectFit: "cover" }} />
          </Reveal>
        </div>
      </section>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-cta-card">
            <p>Your respite starts here with Core Disability Care!</p>
            <Link to="/contact" className="cdc-btn cdc-btn-pink">Contact Us <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
