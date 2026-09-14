import React from "react";
import { PageHero, Reveal, tiltHandlers } from "../components/ui.jsx";
import { IMG, OTHER_SERVICES } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function OtherServices() {
  useSEO({
    title: "Other Services — Support Coordination, Homecare & More",
    description: "From Support Coordination to Homecare and our Core Social Club — explore the extra NDIS services that make everyday life easier.",
    path: "/other-services",
  });

  return (
    <>
      <PageHero eyebrow="Other Services" title="More ways we support you" img={IMG.coordination} color="var(--orange)">
        <p>From support coordination to homecare and our social club — the extras that make everyday life easier.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell">
          <div className="cdc-feature-grid">
            {OTHER_SERVICES.map((s) => (
              <Reveal as="article" className="cdc-feature-card photo" key={s.title} {...tiltHandlers(5)}>
                <img src={s.img} alt="" />
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
