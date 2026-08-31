import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook, Youtube, ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";
import { CoreMark } from "./ui.jsx";
import { NSW_SUBURBS } from "../data.js";

export default function Footer() {
  return (
    <footer className="cdc-footer">
      <div className="cdc-shell-wide">
        <div className="cdc-footer-top">
          <div className="cdc-footer-brand">
            <CoreMark size={64} dark />
            <div style={{ marginTop: "1rem", fontFamily: "'Baloo 2', sans-serif", fontSize: "1.7rem", fontWeight: 700 }}>
              <span style={{ color: "var(--sky)" }}>core</span> <span style={{ color: "var(--white)" }}>care</span>
            </div>
            <p>NDIS Registered Provider and Registered High Intensity Support Provider. We're passionate about creating opportunities for people with disability to live the life they love.</p>
            <div className="cdc-footer-badges">
              <span className="cdc-badge-pill green"><ShieldCheck size={13} /> High Intensity</span>
              <span className="cdc-badge-pill navy" style={{ background: "rgba(255,255,255,.08)", color: "var(--white)", border: "1px solid rgba(255,255,255,.2)" }}><BadgeCheck size={13} /> NDIS Registered</span>
            </div>
          </div>
          <div>
            <h4>Types of Care</h4>
            <ul>
              <li><Link to="/other-services">Support Coordination</Link></li>
              <li><Link to="/group-home-sil">Group Homes (SIL)</Link></li>
              <li><Link to="/respite">Respite (STA)</Link></li>
              <li><Link to="/other-services">Core Social Club</Link></li>
              <li><Link to="/other-services">Homecare</Link></li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/day-programs">Day Programs</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="cdc-footer-contact">
            <h4>Contact Us</h4>
            <div className="cdc-footer-contact-row"><Phone size={16} color="var(--pink)" /> 1300 022 787</div>
            <div className="cdc-footer-contact-row"><Mail size={16} color="var(--pink)" /> info@coredisabilitycare.com.au</div>
            <Link to="/contact" className="cdc-btn cdc-btn-white" style={{ alignSelf: "flex-start" }}>Get In Touch</Link>
          </div>
        </div>

        <hr className="cdc-footer-divider" />

        <div className="cdc-footer-locations">
          <div>
            <h4>NSW — Day Programs</h4>
            <div className="cdc-loc-cols">
              {NSW_SUBURBS.map((s) => (
                <Link to={`/day-programs/${s.slug}`} key={s.slug}>{s.name} <ArrowRight size={13} /></Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Other Services</h4>
            <div className="cdc-loc-cols">
              <Link to="/other-services">Community Access <ArrowRight size={13} /></Link>
              <Link to="/other-services">Support Coordination <ArrowRight size={13} /></Link>
              <Link to="/other-services">Homecare <ArrowRight size={13} /></Link>
              <Link to="/careers">Work Experience <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>

        <div className="cdc-footer-bottom">
          <span>© {new Date().getFullYear()} Core Disability Care Pty Ltd. ABN 45 123 456 789.</span>
          <div className="cdc-social">
            <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={13} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
