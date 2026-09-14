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

// Subtle 3D tilt + cursor-tracked highlight for cards. Spread onto any
// element — reads position straight off e.currentTarget so it needs no ref.
export function tiltHandlers(maxTilt = 7) {
  return {
    onMouseMove: (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      el.style.setProperty("--rx", `${((0.5 - py) * maxTilt * 2).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((px - 0.5) * maxTilt * 2).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    },
    onMouseLeave: (e) => {
      const el = e.currentTarget;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    },
  };
}

// Buttons/badges that drift a few px toward the cursor while hovered.
export function magneticHandlers(strength = 14) {
  return {
    onMouseMove: (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${((mx / rect.width) * strength).toFixed(1)}px, ${((my / rect.height) * strength).toFixed(1)}px)`;
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "";
    },
  };
}

const CONFETTI_COLORS = ["#E91E8C", "#2E9FE0", "#F7941D", "#7AC142", "#8B5CF6", "#FFC93C"];

// A short, joyful burst of confetti from the clicked element. Purely
// decorative — appends plain DOM nodes outside React so it survives
// the SPA route change a CTA click usually triggers.
export function burstConfetti(e) {
  if (typeof window === "undefined" || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const count = 26;
  for (let i = 0; i < count; i++) {
    const bit = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const dist = 70 + Math.random() * 90;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    const rot = Math.random() * 540 - 270;
    const size = 6 + Math.random() * 6;
    bit.style.cssText = `position:fixed;left:${originX}px;top:${originY}px;width:${size}px;height:${size * 0.6}px;` +
      `background:${CONFETTI_COLORS[i % CONFETTI_COLORS.length]};border-radius:2px;pointer-events:none;z-index:9999;` +
      `--dx:${dx}px;--dy:${dy}px;--rot:${rot}deg;animation:cdc-confetti .9s cubic-bezier(.2,.7,.3,1) forwards;`;
    document.body.appendChild(bit);
    setTimeout(() => bit.remove(), 950);
  }
}

// Ambient sparkle dots drifting inside a hero/dark section. Purely decorative.
export function FloatingBits({ count = 7, className = "" }) {
  const bits = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${8 + Math.random() * 84}%`,
        top: `${8 + Math.random() * 84}%`,
        delay: `${(i * 0.7).toFixed(1)}s`,
        duration: `${(5 + Math.random() * 4).toFixed(1)}s`,
        size: 4 + Math.round(Math.random() * 5),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      })),
    [count]
  );
  return (
    <div className={`cdc-floating-bits${className ? " " + className : ""}`} aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          style={{ left: b.left, top: b.top, width: b.size, height: b.size, background: b.color, animationDelay: b.delay, animationDuration: b.duration }}
        />
      ))}
    </div>
  );
}

// Seamless infinite scrolling strip.
export function Marquee({ items, speed = 28 }) {
  return (
    <div className="cdc-marquee">
      <div className="cdc-marquee-track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((it, i) => (
          <span className="cdc-marquee-item" key={i}>{it}</span>
        ))}
      </div>
    </div>
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
      <FloatingBits count={6} className="on-band" />
      <div className="cdc-shell cdc-cta-inner">
        <div>
          <h2>Join Core Disability Care and live your best life!</h2>
          <p>Contact our friendly team on 1300 022 787 to enquire today.</p>
        </div>
        <Link
          to="/contact"
          className="cdc-btn cdc-btn-navy"
          onClick={burstConfetti}
          {...magneticHandlers(10)}
        >
          Learn More Today
        </Link>
      </div>
    </div>
  );
}
