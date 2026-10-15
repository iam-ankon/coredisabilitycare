import React, { useState } from "react";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal } from "../components/ui.jsx";
import { IMG } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

const SERVICE_OPTIONS = [
  "Assistance with Self Care",
  "Social and Community Participation",
  "SIL, SDA, ILO, STA, Respite",
  "Other",
];

const RELATIONSHIP_OPTIONS = ["Carer", "Plan Manager", "Support Worker", "Support Coordinator", "Other"];

const INITIAL_FORM = {
  forSelf: "",
  consent: "",
  referrerName: "",
  referrerEmail: "",
  referrerPhone: "",
  services: [],
  otherService: "",
  participantFirstName: "",
  participantSurname: "",
  participantContact: "",
  participantEmail: "",
  ndisPlan: "",
  ndisNumber: "",
  relationship: "",
  otherRelation: "",
  message: "",
};

export default function Refer() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useSEO({
    title: "Refer a Participant",
    description: "Refer an NDIS participant to Core Support Care. Carers, plan managers, support workers and coordinators can submit a referral in minutes.",
    path: "/refer-a-participant",
  });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const toggleService = (opt) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(opt) ? f.services.filter((s) => s !== opt) : [...f.services, opt],
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.referrerName || !form.referrerEmail || !form.participantFirstName || !form.participantSurname) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Make a Referral" title="Refer a Participant" img={IMG.hero2} color="var(--sky)">
        <p>Carers, plan managers, support workers and coordinators can refer someone to Core Support Care in a few minutes.</p>
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
                <span className="cdc-script" style={{ WebkitTextFillColor: "rgba(255,255,255,.9)", color: "rgba(255,255,255,.9)" }}>Before you start</span>
                <h3 style={{ color: "var(--white)", fontSize: "1.5rem", marginTop: ".5rem" }}>
                  Please obtain consent from the participant before submitting this referral form.
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <a href="tel:1800956474" className="cdc-contact-info-row" style={{ color: "var(--white)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Phone size={17} /></span>
                  1800 95 6474
                </a>
                <a href="mailto:info@coresupportcare.com.au" className="cdc-contact-info-row" style={{ color: "var(--white)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Mail size={17} /></span>
                  info@coresupportcare.com.au
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            {submitted ? (
              <div className="cdc-form-card" style={{ alignItems: "flex-start" }}>
                <CheckCircle2 size={26} color="var(--pink)" />
                <strong style={{ fontFamily: "'Baloo 2', sans-serif", color: "var(--navy)", fontSize: "1.1rem" }}>Thanks — the referral is in!</strong>
                <p style={{ color: "var(--ink-soft)" }}>Our team will review it and be in touch within one business day.</p>
                <button className="cdc-btn cdc-btn-ghost cdc-btn-sm" onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}>
                  Submit another referral
                </button>
              </div>
            ) : (
              <form className="cdc-form-card" onSubmit={onSubmit}>
                <div className="cdc-radio-group">
                  <span className="cdc-field-label">Submitting for yourself?*</span>
                  <label><input type="radio" name="forSelf" value="self" checked={form.forSelf === "self"} onChange={onChange} required /> Yes, this referral is for me</label>
                  <label><input type="radio" name="forSelf" value="other" checked={form.forSelf === "other"} onChange={onChange} /> No, this referral is for someone else</label>
                </div>

                <div className="cdc-radio-group">
                  <span className="cdc-field-label">Consent to share information?*</span>
                  <label><input type="radio" name="consent" value="yes" checked={form.consent === "yes"} onChange={onChange} required /> Yes</label>
                  <label><input type="radio" name="consent" value="no" checked={form.consent === "no"} onChange={onChange} /> No</label>
                </div>

                <input name="referrerName" placeholder="Referrer's name" value={form.referrerName} onChange={onChange} required />
                <input name="referrerEmail" type="email" placeholder="Referrer's email" value={form.referrerEmail} onChange={onChange} required />
                <input name="referrerPhone" type="tel" placeholder="Referrer's phone" value={form.referrerPhone} onChange={onChange} required />

                <div className="cdc-checkbox-group">
                  <span className="cdc-field-label">Services of interest* (select all that apply)</span>
                  {SERVICE_OPTIONS.map((opt) => (
                    <label key={opt}><input type="checkbox" checked={form.services.includes(opt)} onChange={() => toggleService(opt)} /> {opt}</label>
                  ))}
                </div>
                {form.services.includes("Other") && (
                  <input name="otherService" placeholder="Tell us the other service" value={form.otherService} onChange={onChange} required />
                )}

                <input name="participantFirstName" placeholder="Participant first name" value={form.participantFirstName} onChange={onChange} required />
                <input name="participantSurname" placeholder="Participant surname" value={form.participantSurname} onChange={onChange} required />
                <input name="participantContact" type="tel" placeholder="Participant contact (optional)" value={form.participantContact} onChange={onChange} />
                <input name="participantEmail" type="email" placeholder="Participant email (optional)" value={form.participantEmail} onChange={onChange} />

                <div className="cdc-radio-group">
                  <span className="cdc-field-label">NDIS plan?*</span>
                  <label><input type="radio" name="ndisPlan" value="NDIA Managed" checked={form.ndisPlan === "NDIA Managed"} onChange={onChange} required /> NDIA Managed</label>
                  <label><input type="radio" name="ndisPlan" value="Self Managed" checked={form.ndisPlan === "Self Managed"} onChange={onChange} /> Self Managed</label>
                  <label><input type="radio" name="ndisPlan" value="Plan Managed" checked={form.ndisPlan === "Plan Managed"} onChange={onChange} /> Plan Managed</label>
                </div>

                <input name="ndisNumber" placeholder="NDIS number" value={form.ndisNumber} onChange={onChange} required />

                <select name="relationship" value={form.relationship} onChange={onChange} required>
                  <option value="" disabled>Your relationship to the participant*</option>
                  {RELATIONSHIP_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {form.relationship === "Other" && (
                  <input name="otherRelation" placeholder="Tell us the relationship" value={form.otherRelation} onChange={onChange} required />
                )}

                <textarea name="message" placeholder="Your message" rows={4} value={form.message} onChange={onChange} required />

                <button type="submit" className="cdc-btn cdc-btn-pink" style={{ alignSelf: "flex-start" }}>Send Message <Send size={16} /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
