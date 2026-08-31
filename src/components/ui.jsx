import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`cdc-reveal${visible ? " is-visible" : ""}${className ? " " + className : ""}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Spark({ className = "", color = "#E91E8C", size = 30 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 1c.6 4.2 1.8 6.9 4 9 2.1 2.1 4.8 3.4 9 4-4.2.6-6.9 1.8-9 4-2.2 2.1-3.4 4.8-4 9-.6-4.2-1.8-6.9-4-9-2.1-2.1-4.8-3.4-9-4 4.2-.6 6.9-1.8 9-4 2.2-2.1 3.4-4.8 4-9z"
        fill={color}
      />
    </svg>
  );
}

export function CoreMark({ size = 42, dark = false }) {
  const dots = [
    { a: 0, r: 15, c: "#2E9FE0" },
    { a: 40, r: 16, c: "#E91E8C" },
    { a: 80, r: 14, c: "#F7941D" },
    { a: 120, r: 16, c: "#7AC142" },
    { a: 160, r: 15, c: "#2E9FE0" },
    { a: 200, r: 16, c: "#E91E8C" },
    { a: 240, r: 14, c: "#F7941D" },
    { a: 280, r: 16, c: "#7AC142" },
    { a: 320, r: 15, c: "#2E9FE0" },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {dots.map((d, i) => {
        const rad = (d.a * Math.PI) / 180;
        const x = 24 + d.r * Math.cos(rad);
        const y = 24 + d.r * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 3.4 : 2.6} fill={d.c} />;
      })}
      <circle cx="24" cy="24" r="7" fill={dark ? "#FFFFFF" : "#16213E"} />
    </svg>
  );
}

export function PageHero({ eyebrow, title, children, img, color = "var(--sky)" }) {
  return (
    <section className="cdc-pagehero" style={{ background: color }}>
      <div className="cdc-shell cdc-pagehero-inner">
        <div className="cdc-pagehero-copy">
          {eyebrow && <span className="cdc-script" style={{ color: "rgba(255,255,255,.85)" }}>{eyebrow}</span>}
          <h1>{title}</h1>
          {children}
        </div>
        {img && (
          <div className="cdc-pagehero-media">
            <img src={img} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}

export function CountUp({ value, suffix = "", duration = 1600 }) {
  const [ref, visible] = useReveal();
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);
  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`cdc-faq-item${open ? " open" : ""}`}>
      <button className="cdc-faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="cdc-faq-icon">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      <div className="cdc-faq-a">
        <p>{a}</p>
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <div className="cdc-cta-band">
      <div className="cdc-shell cdc-cta-inner">
        <div>
          <h2>Join Core Disability Care and live your best life!</h2>
          <p>Contact our friendly team on 1300 022 787 to enquire today.</p>
        </div>
        <Link to="/contact" className="cdc-btn cdc-btn-navy">Learn More Today</Link>
      </div>
    </div>
  );
}
