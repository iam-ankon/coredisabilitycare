import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Quote, ArrowRight as ArrowRightIcon } from "lucide-react";
import { Reveal, Spark, FaqItem, tiltHandlers, magneticHandlers, burstConfetti, FloatingBits, StickerBadge, CircleFeature, PolaroidWall } from "../components/ui.jsx";
import { ShieldCheck, Home as HomeIcon, Sparkles } from "lucide-react";
import { HERO_SLIDES, BLOCKS, GALLERY, TESTIMONIALS, IMG, REAL_PHOTOS, PROCESS_STEPS, FAQS, RESOURCES } from "../data.js";
import { useSEO, SITE_URL } from "../hooks/useSEO.js";

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [tIndex, setTIndex] = useState(0);

  useSEO({
    title: "NDIS Disability Support in Greater Sydney",
    description: "Core Disability Care is a High Intensity Support provider in Greater Sydney, offering SIL group homes, Day Programs, Respite (STA), Support Coordination and Homecare.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Core Disability Care",
      url: SITE_URL,
      telephone: "+61-1300-022-787",
      email: "info@coredisabilitycare.com.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite 4, 88 Restwell Street",
        addressLocality: "Bankstown",
        addressRegion: "NSW",
        postalCode: "2200",
        addressCountry: "AU",
      },
      areaServed: "Greater Sydney, NSW",
      description: "NDIS provider offering Supported Independent Living, Day Programs, Respite and Support Coordination across Greater Sydney.",
    },
  });

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const nextT = () => setTIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prevT = () => setTIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const [testiPaused, setTestiPaused] = useState(false);
  useEffect(() => {
    if (testiPaused) return;
    const id = setInterval(() => setTIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, [testiPaused]);

  return (
    <>
      {/* Hero */}
      <section className="cdc-hero">
        <FloatingBits count={9} />
        <div className="cdc-hero-inner">
          <div className="cdc-hero-copy">
            <Spark className="spark1" color="#E91E8C" size={26} />
            <Spark className="spark2" color="#2E9FE0" size={18} />
            <span className="cdc-script">{HERO_SLIDES[slide].eyebrow}</span>
            <h1>Live your<span className="l2">best life!</span></h1>
            <p className="cdc-hero-sub">
              At Core Disability Care, we provide fabulous SIL homes, Day Programs
              with low-cost activities, Respite/STA homes and other NDIS services!
            </p>
            <div>
              <Link
                to="/contact"
                className="cdc-btn cdc-btn-navy"
                onClick={burstConfetti}
                {...magneticHandlers(12)}
              >
                Contact Us <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="cdc-hero-media">
            <img key={slide} src={HERO_SLIDES[slide].img} alt="Core Disability Care participants and support workers enjoying an activity together" />
            <StickerBadge color="yellow" icon={Sparkles} label="Service with a smile" style={{ left: "auto", right: "1.4rem", bottom: "auto", top: "1.4rem" }} />
            <div className="cdc-hero-dots">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} className={`cdc-hero-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} aria-label={`Show slide ${i + 1}`} />
              ))}
            </div>
            <div className="cdc-trust-card">
              <div className="cdc-trust-avatars">
                <img src={IMG.g1} alt="" />
                <img src={IMG.g2} alt="" />
                <img src={IMG.g3} alt="" />
                <span className="cdc-trust-more">4.9★</span>
              </div>
              <div>
                <strong>Trusted by 900+ families</strong>
                <span>across Greater Sydney</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circle feature badges */}
      <div className="cdc-shell">
        <Reveal className="cdc-circle-row">
          <CircleFeature color="pink" icon={ShieldCheck} label="Registered High Intensity Provider" />
          <CircleFeature color="sky" icon={HomeIcon} label="Fabulous SIL and STA Homes" />
          <CircleFeature color="purple" icon={Sparkles} label="Exciting Variety of Day Programs" />
        </Reveal>
      </div>

      {/* Real Moments corkboard — genuine, unposed photos from our programs */}
      <section className="cdc-section" style={{ paddingBottom: "3.5rem" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Real families, real Core</span>
            <h2>Not stock photos — actual moments</h2>
            <p>Pulled straight from our Day Programs, SIL homes and family lounge rooms.</p>
          </Reveal>
          <PolaroidWall
            photos={[
              { src: REAL_PHOTOS.familyGlasses, rotate: -5, pin: "pink", caption: "Bean bag catch-up ☺", alt: "A support worker and a participant sharing a laugh on a bean bag" },
              { src: REAL_PHOTOS.boyBlocks, rotate: 4, pin: "sky", caption: "Building & sorting time", alt: "A participant playing with colourful blocks at a Day Program" },
              { src: REAL_PHOTOS.grandmaTablet, rotate: -3, pin: "yellow", caption: "Sofa & screen time", alt: "A participant and family member laughing together on the couch" },
            ]}
          />
        </div>
      </section>

      {/* Colour blocks */}
      <section>
        <div className="cdc-blocks">
          {BLOCKS.map((b) => (
            <Link to={b.to} className="cdc-block" key={b.key} style={{ background: b.color }} {...tiltHandlers(5)}>
              <div className="cdc-block-top">
                <h3>{b.title}</h3>
                <span className="cdc-block-arrow"><ArrowRight size={17} /></span>
              </div>
              <div className="cdc-block-img"><img src={b.img} alt={`A Core Disability Care participant taking part in ${b.title}`} /></div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">How it works</span>
            <h2>Getting started is easy</h2>
            <p>From your first call to your first day of support, here's what to expect.</p>
          </Reveal>
          <div className="cdc-process-grid">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal as="div" className="cdc-process-card" key={p.step} style={{ transitionDelay: `${i * 80}ms` }} {...tiltHandlers(5)}>
                <div className="cdc-process-num">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal style={{ marginBottom: "2.5rem" }}>
            <span className="cdc-script">Follow our journey</span>
            <h2 style={{ marginTop: ".4rem" }}>See what we're up to</h2>
          </Reveal>
          <Reveal className="cdc-gallery-grid">
            {GALLERY.map((src, i) => (
              <a href="#" key={i}><img src={src} alt="Core Disability Care community activity" /></a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="cdc-section cdc-testi-section"
        onMouseEnter={() => setTestiPaused(true)}
        onMouseLeave={() => setTestiPaused(false)}
      >
        <div className="cdc-shell">
          <Reveal className="cdc-testi-wrap">
            <Quote size={28} className="quote" />
            <p className="cdc-testi-text" key={tIndex}>&ldquo;{TESTIMONIALS[tIndex].quote}&rdquo;</p>
            <div className="cdc-testi-avatar">{TESTIMONIALS[tIndex].name.charAt(0)}</div>
            <p className="cdc-testi-name">{TESTIMONIALS[tIndex].name}</p>
            <p className="cdc-testi-role">{TESTIMONIALS[tIndex].role}</p>
            <div className="cdc-testi-controls">
              <button className="cdc-testi-arrow" onClick={prevT} aria-label="Previous testimonial"><ChevronLeft size={17} /></button>
              <div className="cdc-testi-dots">
                {TESTIMONIALS.map((t, i) => (
                  <button key={t.name} className={`cdc-testi-dot${i === tIndex ? " active" : ""}`} onClick={() => setTIndex(i)} aria-label={`Show testimonial ${i + 1}`} />
                ))}
              </div>
              <button className="cdc-testi-arrow" onClick={nextT} aria-label="Next testimonial"><ChevronRight size={17} /></button>
            </div>
            <div className="cdc-testi-progress">
              <div key={`${tIndex}-${testiPaused}`} className={`cdc-testi-progress-bar${testiPaused ? "" : " playing"}`} style={{ "--testi-duration": "6s" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Common questions</span>
            <h2>Frequently asked questions</h2>
            <p>Can't find what you're after? Call our friendly team on 1300 022 787.</p>
          </Reveal>
          <div className="cdc-faq-list">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Resources</span>
            <h2>Helpful reading for participants and families</h2>
          </Reveal>
          <div className="cdc-resource-grid">
            {RESOURCES.map((r, i) => (
              <Reveal as="article" className="cdc-resource-card" key={r.title} style={{ transitionDelay: `${i * 70}ms` }} {...tiltHandlers(5)}>
                <img src={r.img} alt="" />
                <div className="cdc-resource-body">
                  <span className="cdc-resource-tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className="cdc-resource-link">Read more <ArrowRightIcon size={14} /></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="cdc-section">
        <div className="cdc-shell" style={{ maxWidth: 820, textAlign: "center", margin: "0 auto" }}>
          <Reveal>
            <span className="cdc-script">About Core</span>
            <h2 style={{ marginTop: ".4rem" }}>Not your typical NDIS provider</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "1.2rem", fontSize: "1.05rem" }}>
              Core Disability Care is an NDIS provider dedicated to offering
              a range of services tailored to the diverse needs of our participants.
              Honesty and integrity are at the core of everything we do.
            </p>
            <div style={{ marginTop: "1.8rem" }}>
              <Link to="/about-us" className="cdc-btn cdc-btn-navy">Learn More <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="cdc-section" style={{ background: "var(--graybg)" }}>
        <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "3rem", alignItems: "center" }}>
          <Reveal>
            <span className="cdc-script">Careers</span>
            <h2 style={{ marginTop: ".4rem" }}>Join a team that shows up</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: "1rem", fontSize: "1.02rem" }}>
              We're always looking for support workers, allied health professionals
              and coordinators who bring patience, curiosity and consistency to
              their work. Work experience placements welcome.
            </p>
            <div style={{ marginTop: "1.6rem" }}>
              <Link to="/careers" className="cdc-btn cdc-btn-pink">View Opportunities <ArrowUpRight size={17} /></Link>
            </div>
          </Reveal>
          <Reveal>
            <img src={IMG.coordination} alt="A diverse team of Core Disability Care colleagues" style={{ borderRadius: "1.3rem", height: 320, width: "100%", objectFit: "cover", boxShadow: "0 26px 50px -28px rgba(22,33,62,.4)" }} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
