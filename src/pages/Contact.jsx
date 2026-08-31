import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useSEO({
    title: "Contact Us",
    description: "Get in touch with Core Disability Care. Call 1300 022 787 or send an enquiry — our friendly team responds within one business day.",
    path: "/contact",
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Your support starts here" img={IMG.hero1} color="var(--pink)">
        <p>Call, email or send an enquiry and our friendly team will be in touch within one business day.</p>
      </PageHero>

      <section className="cdc-section">
        <div className="cdc-shell cdc-contact-grid">
          <Reveal>
            <div
              style={{
                background: "var(--grad-fun)",
                borderRadius: "1.3rem",
                padding: "2.4rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.6rem",
                color: "var(--white)",
                boxShadow: "0 30px 60px -30px rgba(139,92,246,.5)",
              }}
            >
              <div>
                <span className="cdc-script" style={{ WebkitTextFillColor: "rgba(255,255,255,.9)", color: "rgba(255,255,255,.9)" }}>We're here to help</span>
                <h3 style={{ color: "var(--white)", fontSize: "1.5rem", marginTop: ".5rem" }}>Reach out any way that suits you</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <a href="tel:1300022787" className="cdc-contact-info-row" style={{ color: "var(--white)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Phone size={17} /></span>
                  1300 022 787
                </a>
                <a href="mailto:info@coredisabilitycare.com.au" className="cdc-contact-info-row" style={{ color: "var(--white)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Mail size={17} /></span>
                  info@coredisabilitycare.com.au
                </a>
                <div className="cdc-contact-info-row" style={{ color: "var(--white)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><MapPin size={17} /></span>
                  Suite 4, 88 Restwell Street, Bankstown NSW 2200
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            {submitted ? (
              <div className="cdc-form-card" style={{ alignItems: "flex-start" }}>
                <CheckCircle2 size={26} color="var(--pink)" />
                <strong style={{ fontFamily: "'Baloo 2', sans-serif", color: "var(--navy)", fontSize: "1.1rem" }}>Thanks — your enquiry is in!</strong>
                <p style={{ color: "var(--ink-soft)" }}>We'll be in touch within one business day. For anything urgent, call us directly on 1300 022 787.</p>
                <button className="cdc-btn cdc-btn-ghost cdc-btn-sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="cdc-form-card" onSubmit={onSubmit}>
                <input name="name" placeholder="Full name" value={form.name} onChange={onChange} required />
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
                <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
                <textarea name="message" placeholder="How can we help?" rows={4} value={form.message} onChange={onChange} required />
                <button type="submit" className="cdc-btn cdc-btn-pink" style={{ alignSelf: "flex-start" }}>Send Enquiry <Send size={16} /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
