import React from "react";
import { PageHero, Reveal, tiltHandlers } from "../components/ui.jsx";
import { IMG, WHY_CORE, MILESTONES } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function AboutUs() {
  useSEO({
    title: "About Us",
    description: "Core Disability Care has been a registered NDIS and High Intensity Support provider in Greater Sydney since 2018. Learn about our story, values and why families choose us.",
    path: "/about-us",
  });

  return (
    <>
      <PageHero eyebrow="Our Story" title="About Core Disability Care" img={IMG.about} color="var(--sky)">
        <p>NDIS Registered Provider and Registered High Intensity Support Provider, proudly serving Greater Sydney since 2018.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <Reveal>
            <img src={IMG.aboutStory} alt="Core Disability Care participants and staff together" style={{ borderRadius: "1.3rem", width: "100%", height: 380, objectFit: "cover" }} />
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>
              We are a registered NDIS provider dedicated to offering a range of
              services tailored to meet the diverse needs of our participants.
            </p>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>
              Honesty and integrity are at the core of Core Disability Care's
              operations and values. We are committed to transparency and building
              trust with every participant and their families.
            </p>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>
              Our approach ensures that all interactions are genuine and respectful,
              fostering a community of trust and reliability. Our commitment to
              delighting our participants is unwavering.
            </p>
            <p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>
              We strive to exceed expectations by providing service with a smile
              and going the extra mile to ensure satisfaction, and we listen to
              feedback to continuously improve our services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Our Journey</span>
            <h2>From a single mission to award-winning care</h2>
            <p>Eight years of growth across Greater Sydney, one milestone at a time.</p>
          </Reveal>
          <div className="cdc-timeline">
            {MILESTONES.map((m, i) => (
              <div className="cdc-timeline-item" key={m.year}>
                <Reveal as="div" className="cdc-timeline-card" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="cdc-timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </Reveal>
                <div className="cdc-timeline-dot" />
                <div className="cdc-timeline-spacer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Why Core</span>
            <h2>Why families choose us</h2>
          </Reveal>
          <div className="cdc-feature-grid">
            {WHY_CORE.map((f) => (
              <Reveal as="div" className="cdc-feature-card" key={f.title} {...tiltHandlers(5)}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
