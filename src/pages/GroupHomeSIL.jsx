import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Home, Car, Clock3 } from "lucide-react";
import { PageHero, Reveal, tiltHandlers } from "../components/ui.jsx";
import { IMG } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

const SIL_SERVICES = [
  { icon: Home, title: "Accommodation", desc: "We have a range of homes available across Sydney, matched to your needs and preferences." },
  { icon: Car, title: "Accessible Transport", desc: "Access everything you need within your community with our fleet of accessible vehicles." },
  { icon: Clock3, title: "24/7 Supports", desc: "Support from our reliable and trained Core Care team, day and night." },
];

export default function GroupHomeSIL() {
  useSEO({
    title: "Group Homes — Supported Independent Living (SIL)",
    description: "Fabulous Supported Independent Living (SIL) group homes across Sydney with 24/7 tailored supports, accessible transport and a home that's genuinely yours.",
    path: "/group-home-sil",
  });

  return (
    <>
      <PageHero eyebrow="Supported Independent Living" title="Fabulous Group Homes (SIL)" img={IMG.silRoom} color="var(--pink)">
        <p>Experience the Core Lifestyle with 24/7 tailored supports, in a home that's genuinely yours.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Core Home Features</span>
            <h2>It's your room, your way</h2>
          </Reveal>
          <div className="cdc-activity">
            <img src={IMG.silRoom} alt="A bright, comfortable bedroom in a Core Disability Care group home" />
            <div>
              <h3>It's Your Room</h3>
              <p className="desc">Every participant's room is set up around what matters to them — comfort, privacy and a space that feels like home.</p>
            </div>
          </div>
          <div className="cdc-activity reverse">
            <img src={IMG.silLiving} alt="A spacious, welcoming living room in a Core Disability Care group home" />
            <div>
              <h3>Spacious Living Rooms</h3>
              <p className="desc">Shared spaces designed for connection — comfortable, accessible and easy to relax in with housemates and visitors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Getting around</span>
            <h2>Accessible transport, on your terms</h2>
            <p>Whether you prefer using our vehicles or want to build your own travel skills, we're dedicated to supporting you every step of the way. You can also sign over your NDIS transport allowance to use our vans.</p>
          </Reveal>
        </div>
      </section>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Core Services Available in SIL</span>
            <h2>Everything included in your plan</h2>
          </Reveal>
          <div className="cdc-feature-grid">
            {SIL_SERVICES.map((s) => (
              <Reveal as="div" className="cdc-feature-card" key={s.title} {...tiltHandlers(5)}>
                <s.icon size={26} color="var(--pink)" style={{ marginBottom: ".8rem" }} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cdc-section" style={{ paddingTop: 0 }}>
        <div className="cdc-shell">
          <Reveal className="cdc-cta-card">
            <p>Ready to move in? Your SIL journey starts here.</p>
            <Link to="/contact" className="cdc-btn cdc-btn-pink">Contact Us <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
