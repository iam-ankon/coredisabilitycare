import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { SPECIALISED_SERVICES, IMG } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SPECIALISED_SERVICES.find((s) => s.slug === slug);

  useSEO({
    title: service ? service.title : "Our Services",
    description: service ? service.intro : "Explore our NDIS support services.",
    path: `/our-services/${slug}`,
  });

  if (!service) return <Navigate to="/day-programs" replace />;

  return (
    <>
      <PageHero eyebrow="Our Services" title={service.title} img={IMG.hero1} color="var(--sky)">
        <p>{service.intro}</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell cdc-service-grid">
          <Reveal className="cdc-service-sidebar">
            <span className="cdc-script" style={{ fontSize: "1.2rem" }}>Browse Services</span>
            {SPECIALISED_SERVICES.map((s) => (
              <Link
                to={`/our-services/${s.slug}`}
                key={s.slug}
                className={`cdc-service-sidebar-item${s.slug === slug ? " active" : ""}`}
              >
                <Heart size={14} />
                <span>{s.title}</span>
                <ArrowRight size={15} className="cdc-dropdown-arrow" />
              </Link>
            ))}
          </Reveal>

          <Reveal style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>{service.intro}</p>
            <h2 style={{ fontFamily: "'Baloo 2', sans-serif", color: "var(--navy)", fontSize: "1.3rem" }}>What's included</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: ".8rem", listStyle: "none", padding: 0 }}>
              {service.items.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", color: "var(--ink-soft)" }}>
                  <CheckCircle2 size={18} color="var(--sky)" style={{ flex: "none", marginTop: "2px" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/refer-a-participant" className="cdc-btn cdc-btn-pink" style={{ alignSelf: "flex-start", marginTop: ".5rem" }}>
              Refer a Participant <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
