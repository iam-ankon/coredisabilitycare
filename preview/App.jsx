import React, { useEffect, useState } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight,
  Instagram, Facebook, Youtube, ShieldCheck, BadgeCheck, Award, Quote, CheckCircle2,
  Home as HomeIcon, Car, Clock3, Send,
} from "lucide-react";

/* ---------------------------------------------------------
   PREVIEW BUILD NOTE: this single file simulates the real
   multi-page site (which uses react-router-dom with actual
   URLs like /day-programs/bankstown) using component state
   instead, since this chat preview sandbox can't run a
   router. The downloadable project is the real multi-page
   version — this is just for you to click through here.
--------------------------------------------------------- */

const IMG = {
  hero1: "https://images.unsplash.com/photo-1732194439368-4655fd0ea955?auto=format&fit=crop&w=1400&q=80",
  hero2: "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?auto=format&fit=crop&w=1400&q=80",
  hero3: "https://images.unsplash.com/photo-1595687973201-0095ff7a302e?auto=format&fit=crop&w=1400&q=80",
  sil: "https://images.unsplash.com/photo-1732194438396-394d2b7c2436?auto=format&fit=crop&w=800&q=80",
  respite: "https://images.unsplash.com/photo-1595687973201-0095ff7a302e?auto=format&fit=crop&w=800&q=80",
  dayprograms: "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=800&q=80",
  home: "https://images.unsplash.com/photo-1732194438396-394d2b7c2436?auto=format&fit=crop&w=800&q=80",
  coordination: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=800&q=80",
  social: "https://images.unsplash.com/photo-1732194439368-4655fd0ea955?auto=format&fit=crop&w=800&q=80",
  blockDay: "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=600&q=80",
  blockSil: "https://images.unsplash.com/photo-1732194438396-394d2b7c2436?auto=format&fit=crop&w=600&q=80",
  blockRespite: "https://images.unsplash.com/photo-1595687973201-0095ff7a302e?auto=format&fit=crop&w=600&q=80",
  blockCoord: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=600&q=80",
  g1: "https://images.unsplash.com/photo-1570793005299-c091be91bbad?auto=format&fit=crop&w=500&q=80",
  g2: "https://images.unsplash.com/photo-1709880754472-be89c13abc52?auto=format&fit=crop&w=500&q=80",
  g3: "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?auto=format&fit=crop&w=500&q=80",
  g4: "https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=500&q=80",
  about: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=1200&q=80",
  aboutStory: "https://images.unsplash.com/photo-1570793005299-c091be91bbad?auto=format&fit=crop&w=1200&q=80",
  silRoom: "https://images.unsplash.com/photo-1732194438396-394d2b7c2436?auto=format&fit=crop&w=900&q=80",
  silLiving: "https://images.unsplash.com/photo-1709880754472-be89c13abc52?auto=format&fit=crop&w=900&q=80",
  respiteBeach: "https://images.unsplash.com/photo-1595687973201-0095ff7a302e?auto=format&fit=crop&w=1200&q=80",
  fishing: "https://images.unsplash.com/photo-1570793005299-c091be91bbad?auto=format&fit=crop&w=900&q=80",
  sailing: "https://images.unsplash.com/photo-1723433892471-62f113c8c9a0?auto=format&fit=crop&w=900&q=80",
  careers: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&w=1200&q=80",
};

const HERO_SLIDES = [
  { img: IMG.hero1, eyebrow: "Registered NDIS Provider" },
  { img: IMG.hero2, eyebrow: "Sydney's Favourite Day Programs" },
  { img: IMG.hero3, eyebrow: "Respite That Feels Like a Holiday" },
];
const SERVICES = [
  { page: "sil", img: IMG.sil, title: "Fabulous Group Homes (SIL)", desc: "Experience the Core Lifestyle with 24/7 tailored supports." },
  { page: "respite", img: IMG.respite, title: "Respite (STA)", desc: "A safe, fun home for your loved one, so everyone can relax and recharge." },
  { page: "dayprograms", img: IMG.dayprograms, title: "Day Programs", desc: "Check out our low-cost activities, where everyone has fun. A leading Sydney day program provider." },
  { page: "other", img: IMG.home, title: "Supports at Home", desc: "Domestic assistance and daily living support delivered right where you live." },
  { page: "other", img: IMG.coordination, title: "Support Coordination", desc: "A dedicated coordinator to help you get the most from your NDIS plan." },
  { page: "other", img: IMG.social, title: "Core Social Club", desc: "The weekend social club everyone wants to join — outings, sport and new friends." },
];
const BLOCKS = [
  { key: "day", title: "Day Programs", color: "#7AC142", img: IMG.blockDay, page: "dayprograms" },
  { key: "sil", title: "SIL", color: "#E91E8C", img: IMG.blockSil, page: "sil" },
  { key: "respite", title: "Respite", color: "#2E9FE0", img: IMG.blockRespite, page: "respite" },
  { key: "coord", title: "Support Coordination", color: "#F7941D", img: IMG.blockCoord, page: "other" },
];
const GALLERY = [IMG.g1, IMG.g2, IMG.g3, IMG.g4];
const TESTIMONIALS = [
  { quote: "The Day Program is very successful, offering my daughter a happy, friendly and safe place to meet new friends and be out in the community. The staff are welcoming and communication with our family is a blessing.", name: "Maria", role: "Parent of a participant" },
  { quote: "I moved into my own place through SIL support from Core. Nine months on, I'm cooking my own meals and catching the bus by myself.", name: "Daniel", role: "NDIS participant" },
  { quote: "As a support coordinator I recommend Core because they actually communicate. No chasing invoices, no chasing updates.", name: "Priya", role: "Support Coordinator" },
];
const NSW_SUBURBS = ["Bankstown", "Liverpool", "Cabramatta", "Merrylands", "Auburn", "Guildford", "Blacktown", "Granville", "Villawood", "Fairfield"];
const WHY_CORE = [
  { title: "Registered NDIS Provider", desc: "We are a registered NDIS provider and also a registered high intensity provider, ensuring comprehensive support tailored to your needs." },
  { title: "Decades of Combined Experience", desc: "Our team brings decades of combined experience, offering unparalleled expertise and knowledge in disability support." },
  { title: "Super Experienced Team", desc: "Our team consists of experienced, passionate and reliable professionals dedicated to providing exceptional support with a smile." },
  { title: "Fabulous, Reliable Staff", desc: "Our staff are committed to delivering outstanding service, ensuring every participant feels valued and supported." },
  { title: "Holistic and Personalised Approach", desc: "We focus on the overall well-being of our participants, offering personalised services that cater to individual needs." },
  { title: "Savvy and Innovative", desc: "Core Disability Care is not your typical NDIS provider. We're savvy, innovative, and proud of the work we do." },
];
const ACTIVITIES = [
  { title: "Fishing Club", img: IMG.fishing, desc: "Whatever the weather, the health benefits of fishing are so much more than you'd think.", outcomes: ["Promotes outdoor time and relaxation", "Learn a new skill", "Combat stress and anxiety", "Build strong bonds with friends", "Program cost — low-cost"] },
  { title: "Sailability", img: IMG.sailing, desc: "Specially designed boats that are safe and easy to handle, so everyone can enjoy the adventure of sailing.", outcomes: ["Inclusive sailing experience", "Skill development", "Build confidence", "Social interaction", "Program cost — low-cost"] },
];
const RESPITE_BENEFITS = [
  { title: "Improving Relationships", desc: "Time away from caregiving duties can reduce stress and improve family dynamics." },
  { title: "Rest and Recharge", desc: "Families and carers can take a break from daily responsibilities, allowing them to rest and recharge." },
  { title: "Peace of Mind", desc: "Knowing your loved one is in a safe, supportive environment provides real peace of mind." },
  { title: "Preventing Burnout", desc: "Continuous caregiving without breaks can lead to physical and emotional exhaustion — regular respite helps prevent it." },
  { title: "Personal Growth", desc: "Breaks provide opportunities for personal growth and self-care, so carers can pursue hobbies too." },
];
const OTHER_SERVICES = [
  { title: "Support Coordination", img: IMG.coordination, desc: "Navigating the NDIS can be challenging, but with Core's Support Coordination, you're never alone." },
  { title: "Homecare", img: IMG.home, desc: "Domestic assistance, personal care and daily living support delivered right where you live." },
  { title: "Community Access", img: IMG.hero2, desc: "One-on-one or small group support to get out, build friendships and take part in the things you enjoy." },
  { title: "Core Social Club", img: IMG.social, desc: "The weekend social club everyone wants to join — outings, sport, day trips and new friends." },
];
const OPEN_ROLES = [
  { title: "Support Worker — Community Access", type: "Casual" },
  { title: "Support Worker — SIL, Overnight", type: "Part-time" },
  { title: "Occupational Therapist", type: "Full-time" },
  { title: "Support Coordinator", type: "Full-time" },
  { title: "Day Program Facilitator", type: "Full-time" },
];
const NAV_LINKS = [
  { label: "About Us", page: "about" },
  { label: "Day Programs", page: "dayprograms", dropdown: true },
  { label: "Group Home SIL", page: "sil" },
  { label: "Respite", page: "respite" },
  { label: "Other Services", page: "other" },
  { label: "Careers", page: "careers" },
];

function Spark({ className = "", color = "#E91E8C", size = 30 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 1c.6 4.2 1.8 6.9 4 9 2.1 2.1 4.8 3.4 9 4-4.2.6-6.9 1.8-9 4-2.2 2.1-3.4 4.8-4 9-.6-4.2-1.8-6.9-4-9-2.1-2.1-4.8-3.4-9-4 4.2-.6 6.9-1.8 9-4 2.2-2.1 3.4-4.8 4-9z" fill={color} />
    </svg>
  );
}
function CoreMark({ size = 42, dark = false }) {
  const dots = [
    { a: 0, r: 15, c: "#2E9FE0" }, { a: 40, r: 16, c: "#E91E8C" }, { a: 80, r: 14, c: "#F7941D" },
    { a: 120, r: 16, c: "#7AC142" }, { a: 160, r: 15, c: "#2E9FE0" }, { a: 200, r: 16, c: "#E91E8C" },
    { a: 240, r: 14, c: "#F7941D" }, { a: 280, r: 16, c: "#7AC142" }, { a: 320, r: 15, c: "#2E9FE0" },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {dots.map((d, i) => {
        const rad = (d.a * Math.PI) / 180;
        const x = 24 + d.r * Math.cos(rad), y = 24 + d.r * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 3.4 : 2.6} fill={d.c} />;
      })}
      <circle cx="24" cy="24" r="7" fill={dark ? "#FFFFFF" : "#16213E"} />
    </svg>
  );
}
function PageHero({ eyebrow, title, sub, img, color }) {
  return (
    <section className="cdc-pagehero" style={{ background: color }}>
      <div className="cdc-shell cdc-pagehero-inner">
        <div className="cdc-pagehero-copy">
          {eyebrow && <span className="cdc-script" style={{ color: "rgba(255,255,255,.85)" }}>{eyebrow}</span>}
          <h1>{title}</h1>
          {sub && <p>{sub}</p>}
        </div>
        {img && <div className="cdc-pagehero-media"><img src={img} alt="" /></div>}
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [suburb, setSuburb] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dayOpen, setDayOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [tIndex, setTIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [page, suburb]);

  const go = (p, sub) => { setPage(p); setSuburb(sub || null); setMenuOpen(false); setDayOpen(false); };
  const nextT = () => setTIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prevT = () => setTIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const onSubmit = (e) => { e.preventDefault(); if (!form.name || !form.email || !form.message) return; setSubmitted(true); };

  return (
    <div className="cdc">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" />
      <style>{`
        .cdc { --sky:#2E9FE0; --sky-dark:#1C7DB8; --pink:#E91E8C; --pink-dark:#C0126E; --navy:#16213E; --navy-2:#1E2C52; --graybg:#ECECEE; --green:#7AC142; --orange:#F7941D; --white:#FFFFFF; --ink:#1C2331; --ink-soft:#5B6472; --line:#DEDFE3;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; color:var(--ink); background:var(--white); line-height:1.6; -webkit-font-smoothing:antialiased; }
        .cdc * { box-sizing:border-box; }
        .cdc h1,.cdc h2,.cdc h3,.cdc h4 { font-family:'Baloo 2','Inter',sans-serif; color:var(--navy); line-height:1.15; margin:0; font-weight:700; }
        .cdc p { margin:0; }
        .cdc button { font-family:inherit; cursor:pointer; border:none; background:none; text-align:left; }
        .cdc ul { margin:0; padding:0; list-style:none; }
        .cdc img { max-width:100%; display:block; }
        .cdc :focus-visible { outline:2.5px solid var(--pink); outline-offset:2px; }
        .cdc-script { font-family:'Caveat',cursive; color:var(--pink); font-size:1.7rem; font-weight:700; }
        .cdc-reveal { opacity:1; }
        .cdc-shell { max-width:1240px; margin:0 auto; padding:0 1.5rem; }
        .cdc-utility { background:var(--white); border-bottom:1px solid var(--line); }
        .cdc-utility-inner { display:flex; align-items:center; justify-content:space-between; gap:1.5rem; padding:.85rem 0; }
        .cdc-brand { display:flex; align-items:center; gap:.6rem; }
        .cdc-brand strong { font-family:'Baloo 2',sans-serif; font-size:1.5rem; font-weight:700; color:var(--sky); }
        .cdc-brand strong span { color:var(--navy); }
        .cdc-badges { display:flex; align-items:center; gap:.6rem; flex-wrap:wrap; }
        .cdc-badge-pill { display:inline-flex; align-items:center; gap:.35rem; font-size:.7rem; font-weight:700; padding:.4rem .7rem; border-radius:999px; white-space:nowrap; }
        .cdc-badge-pill.green { background:#E9F6DE; color:#4C7A21; border:1px solid #B9E197; }
        .cdc-badge-pill.navy { background:#EAF0FB; color:var(--navy); border:1px solid #C6D5F2; }
        .cdc-badge-pill.dark { background:var(--navy); color:var(--white); }
        .cdc-utility-actions { display:flex; align-items:center; gap:1rem; }
        .cdc-call { display:flex; align-items:center; gap:.55rem; }
        .cdc-call .ic { width:34px; height:34px; border-radius:50%; background:var(--sky); display:flex; align-items:center; justify-content:center; color:var(--white); flex:none; }
        .cdc-call div { display:flex; flex-direction:column; line-height:1.15; }
        .cdc-call span { font-size:.68rem; color:var(--ink-soft); }
        .cdc-call strong { font-size:.92rem; color:var(--navy); }
        .cdc-btn { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.75rem 1.4rem; border-radius:999px; font-weight:700; font-size:.9rem; border:1.5px solid transparent; transition:transform .18s ease,box-shadow .18s ease,background .18s ease; white-space:nowrap; }
        .cdc-btn:hover { transform:translateY(-2px); }
        .cdc-btn-pink { background:var(--pink); color:var(--white); }
        .cdc-btn-pink:hover { background:var(--pink-dark); box-shadow:0 14px 26px -14px rgba(233,30,140,.55); }
        .cdc-btn-navy { background:var(--navy); color:var(--white); }
        .cdc-btn-navy:hover { background:var(--navy-2); box-shadow:0 14px 26px -14px rgba(22,33,62,.5); }
        .cdc-btn-white { background:var(--white); color:var(--pink); }
        .cdc-btn-ghost { background:var(--graybg); color:var(--navy); }
        .cdc-btn-ghost:hover { background:#DFDFE3; }
        .cdc-btn-sm { padding:.55rem 1.1rem; font-size:.82rem; }
        .cdc-menu-btn { display:none; width:40px; height:40px; border-radius:50%; background:var(--navy); color:var(--white); align-items:center; justify-content:center; }
        .cdc-navbar { background:var(--navy); }
        .cdc-navbar-inner { display:flex; align-items:center; justify-content:space-between; gap:1rem; }
        .cdc-nav { display:flex; align-items:center; gap:1.8rem; }
        .cdc-nav-item { position:relative; }
        .cdc-nav-link { display:flex; align-items:center; gap:.3rem; color:var(--white); font-size:.88rem; font-weight:600; padding:.95rem 0; opacity:.92; }
        .cdc-nav-link:hover, .cdc-nav-item.open .cdc-nav-link, .cdc-nav-link.active { opacity:1; color:var(--pink); }
        .cdc-dropdown { position:absolute; top:100%; left:0; background:var(--navy-2); min-width:220px; border-radius:0 0 .6rem .6rem; box-shadow:0 20px 40px -20px rgba(0,0,0,.5); overflow:hidden; z-index:50; }
        .cdc-dropdown button { display:block; width:100%; padding:.7rem 1rem; color:var(--white); font-size:.85rem; font-weight:600; }
        .cdc-dropdown button:hover { background:var(--pink); }
        .cdc-navbar-right { display:flex; align-items:center; gap:1.1rem; }
        .cdc-social { display:flex; align-items:center; gap:.5rem; }
        .cdc-social a { width:28px; height:28px; border-radius:50%; border:1px solid rgba(255,255,255,.4); display:flex; align-items:center; justify-content:center; color:var(--white); }
        .cdc-navbar-links { display:flex; align-items:center; gap:.9rem; font-size:.82rem; font-weight:600; color:rgba(255,255,255,.85); }
        .cdc-navbar-links button:hover { color:var(--pink); }
        .cdc-navbar-sep { width:1px; height:14px; background:rgba(255,255,255,.25); }
        .cdc-mobile-nav { display:none; flex-direction:column; background:var(--navy-2); padding:.5rem 0 1rem; }
        .cdc-mobile-nav.open { display:flex; }
        .cdc-mobile-nav button { color:var(--white); padding:.75rem 1.5rem; font-weight:600; font-size:.92rem; width:100%; }
        .cdc-hero { background:var(--graybg); position:relative; overflow:hidden; }
        .cdc-hero-inner { display:grid; grid-template-columns:1fr 1fr; align-items:stretch; min-height:560px; }
        .cdc-hero-copy { padding:4rem 1.5rem 4rem 0; display:flex; flex-direction:column; justify-content:center; max-width:560px; margin-left:auto; position:relative; }
        .cdc-hero-copy .spark1 { position:absolute; left:-6px; top:2.2rem; }
        .cdc-hero-copy .spark2 { position:absolute; left:46%; top:-6px; }
        .cdc-hero h1 { font-size:clamp(2.4rem,3.4vw + 1rem,3.6rem); margin-top:1.3rem; }
        .cdc-hero h1 .l2 { color:var(--pink); display:block; }
        .cdc-hero-sub { color:var(--ink-soft); font-size:1.08rem; margin:1.4rem 0 1.8rem; max-width:480px; }
        .cdc-hero-media { position:relative; overflow:hidden; border-radius:0 0 0 160px; }
        .cdc-hero-media img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; animation:cdc-fadein .8s ease; }
        @keyframes cdc-fadein { from{opacity:0;} to{opacity:1;} }
        .cdc-hero-dots { position:absolute; bottom:1.4rem; right:1.4rem; display:flex; gap:.4rem; z-index:5; }
        .cdc-hero-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.5); padding:0; }
        .cdc-hero-dot.active { background:var(--white); width:22px; border-radius:4px; }
        .cdc-pagehero { position:relative; overflow:hidden; }
        .cdc-pagehero-inner { display:grid; grid-template-columns:1fr 1fr; align-items:center; min-height:380px; gap:2rem; }
        .cdc-pagehero-copy { padding:3.2rem 0; max-width:520px; }
        .cdc-pagehero h1 { color:var(--white); font-size:clamp(2rem,2.4vw + 1rem,2.8rem); margin-top:.8rem; }
        .cdc-pagehero-copy p { color:rgba(255,255,255,.9); margin-top:1rem; font-size:1.02rem; }
        .cdc-pagehero-media { height:100%; min-height:380px; }
        .cdc-pagehero-media img { width:100%; height:100%; object-fit:cover; }
        .cdc-section { padding:5rem 0; }
        .cdc-section-head { text-align:center; max-width:640px; margin:0 auto 2.6rem; }
        .cdc-section-head h2 { font-size:clamp(1.8rem,1.6vw + 1.1rem,2.4rem); margin-top:.5rem; }
        .cdc-section-head p { color:var(--ink-soft); margin-top:1rem; font-size:1.02rem; }
        .cdc-services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; }
        .cdc-card { background:var(--white); border:1px solid var(--line); border-radius:1.2rem; overflow:hidden; }
        .cdc-card img { height:180px; width:100%; object-fit:cover; }
        .cdc-card-body { padding:1.4rem; }
        .cdc-card h3 { font-size:1.15rem; margin-bottom:.5rem; }
        .cdc-card p { color:var(--ink-soft); font-size:.9rem; margin-bottom:1.1rem; }
        .cdc-blocks { display:grid; grid-template-columns:repeat(4,1fr); }
        .cdc-block { position:relative; min-height:420px; display:flex; flex-direction:column; overflow:hidden; width:100%; }
        .cdc-block-top { padding:1.6rem; display:flex; align-items:flex-start; justify-content:space-between; position:relative; z-index:2; }
        .cdc-block-top h3 { color:var(--white); font-size:1.4rem; }
        .cdc-block-arrow { width:36px; height:36px; border-radius:50%; background:rgba(255,255,255,.9); display:flex; align-items:center; justify-content:center; color:var(--navy); flex:none; }
        .cdc-block-img { flex:1; position:relative; }
        .cdc-block-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.92; }
        .cdc-block-img::after { content:''; position:absolute; inset:0; background:linear-gradient(0deg,rgba(0,0,0,.28),transparent 55%); }
        .cdc-gallery-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.1rem; }
        .cdc-gallery-grid img { border-radius:1.1rem; width:100%; height:250px; object-fit:cover; }
        .cdc-testi-section { background:var(--navy); color:var(--white); }
        .cdc-testi-wrap { max-width:740px; margin:0 auto; text-align:center; }
        .cdc-testi-wrap svg.quote { color:var(--pink); margin:0 auto 1.2rem; }
        .cdc-testi-text { font-family:'Baloo 2',sans-serif; font-size:clamp(1.15rem,1vw + 1rem,1.5rem); font-weight:600; line-height:1.45; color:var(--white); }
        .cdc-testi-name { margin-top:1.4rem; font-weight:700; color:var(--white); }
        .cdc-testi-role { font-size:.85rem; color:rgba(255,255,255,.6); }
        .cdc-testi-controls { display:flex; align-items:center; justify-content:center; gap:1.2rem; margin-top:1.8rem; }
        .cdc-testi-arrow { width:38px; height:38px; border-radius:50%; border:1.5px solid rgba(255,255,255,.4); color:var(--white); display:flex; align-items:center; justify-content:center; }
        .cdc-testi-dots { display:flex; gap:.5rem; }
        .cdc-testi-dot { width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,.35); padding:0; }
        .cdc-testi-dot.active { background:var(--pink); }
        .cdc-feature-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.6rem; }
        .cdc-feature-card { background:var(--white); border:1px solid var(--line); border-radius:1.1rem; padding:1.6rem; }
        .cdc-feature-card.photo { padding:0; overflow:hidden; }
        .cdc-feature-card.photo img { height:160px; width:100%; object-fit:cover; }
        .cdc-feature-card.photo .body { padding:1.4rem; }
        .cdc-feature-card h3 { font-size:1.05rem; margin-bottom:.5rem; }
        .cdc-feature-card p { color:var(--ink-soft); font-size:.9rem; }
        .cdc-activity { display:grid; grid-template-columns:1fr 1fr; gap:2.6rem; align-items:center; margin-bottom:3rem; }
        .cdc-activity.reverse { direction:rtl; }
        .cdc-activity.reverse > * { direction:ltr; }
        .cdc-activity img { border-radius:1.2rem; width:100%; height:300px; object-fit:cover; }
        .cdc-activity h3 { font-size:1.4rem; }
        .cdc-activity p.desc { color:var(--ink-soft); margin-top:.7rem; }
        .cdc-outcomes { margin-top:1.1rem; display:flex; flex-direction:column; gap:.45rem; }
        .cdc-outcomes li { display:flex; gap:.55rem; align-items:flex-start; font-size:.92rem; }
        .cdc-outcomes li svg { color:var(--pink); flex:none; margin-top:.2rem; }
        .cdc-benefit { margin-bottom:1.2rem; }
        .cdc-benefit strong { color:var(--navy); font-family:'Baloo 2',sans-serif; }
        .cdc-benefit p { color:var(--ink-soft); margin-top:.3rem; font-size:.94rem; display:inline; }
        .cdc-cta-card { border:2px solid var(--line); border-radius:1.3rem; padding:1.5rem 1.8rem; display:flex; align-items:center; justify-content:space-between; gap:1.4rem; flex-wrap:wrap; }
        .cdc-cta-card p { font-family:'Baloo 2',sans-serif; font-size:1.15rem; color:var(--navy); }
        .cdc-cta-band { background:var(--pink); padding:2.6rem 0; }
        .cdc-cta-inner { display:flex; align-items:center; justify-content:space-between; gap:2rem; flex-wrap:wrap; }
        .cdc-cta-inner h2 { color:var(--white); font-size:clamp(1.4rem,1.6vw + 1rem,2rem); }
        .cdc-cta-inner p { color:#FBD6E8; margin-top:.4rem; }
        .cdc-suburb-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:.9rem; }
        .cdc-suburb-card { background:var(--graybg); border-radius:1rem; padding:1.3rem 1rem; text-align:center; font-family:'Baloo 2',sans-serif; font-weight:700; color:var(--navy); width:100%; }
        .cdc-suburb-card:hover { background:var(--pink); color:var(--white); }
        .cdc-roles-list { display:flex; flex-direction:column; border-top:1px solid var(--line); }
        .cdc-role-row { display:flex; align-items:center; justify-content:space-between; padding:1rem 0; border-bottom:1px solid var(--line); font-family:'Baloo 2',sans-serif; font-weight:600; color:var(--navy); }
        .cdc-role-row .pill { font-size:.7rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase; color:var(--pink); border:1px solid var(--pink); border-radius:999px; padding:.25rem .65rem; }
        .cdc-contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:2.6rem; }
        .cdc-contact-info-row { display:flex; align-items:center; gap:.55rem; color:var(--navy); font-size:.94rem; margin-bottom:1rem; }
        .cdc-form-card { background:var(--graybg); border-radius:1.3rem; padding:1.8rem; display:flex; flex-direction:column; gap:.9rem; }
        .cdc-form-card input, .cdc-form-card textarea { padding:.8rem 1rem; border-radius:.7rem; border:1.5px solid var(--line); font-family:inherit; font-size:.94rem; background:var(--white); width:100%; }
        .cdc-form-card textarea { resize:vertical; }
        .cdc-footer { background:var(--navy); color:#B9C2D6; padding:4rem 0 1.6rem; }
        .cdc-footer-top { display:grid; grid-template-columns:1.3fr 1fr 1fr 1.1fr; gap:2.2rem; padding-bottom:2.2rem; }
        .cdc-footer-brand p { font-size:.88rem; margin-top:1rem; color:#9AA6BE; max-width:290px; }
        .cdc-footer h4 { color:var(--white); font-family:'Baloo 2',sans-serif; font-size:1.02rem; margin-bottom:1rem; }
        .cdc-footer ul li { margin-bottom:.6rem; font-size:.87rem; }
        .cdc-footer ul li button:hover { color:var(--pink); }
        .cdc-footer-contact { display:flex; flex-direction:column; gap:.9rem; }
        .cdc-footer-contact-row { display:flex; align-items:center; gap:.55rem; font-size:.88rem; color:var(--white); }
        .cdc-footer-badges { display:flex; align-items:center; gap:.6rem; flex-wrap:wrap; margin-top:1.3rem; }
        .cdc-footer-divider { border:none; border-top:1px solid rgba(255,255,255,.12); margin:1rem 0 1.8rem; }
        .cdc-footer-locations { display:grid; grid-template-columns:1fr 1fr; gap:1.8rem; }
        .cdc-loc-cols { display:grid; grid-template-columns:1fr 1fr; gap:.4rem 1.4rem; }
        .cdc-loc-cols button { display:flex; align-items:center; gap:.3rem; font-size:.87rem; padding:.3rem 0; color:#B9C2D6; }
        .cdc-loc-cols button:hover { color:var(--pink); }
        .cdc-footer-bottom { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding-top:1.6rem; border-top:1px solid rgba(255,255,255,.12); font-size:.8rem; }
        .cdc-footer-bottom .cdc-social a { border-color:rgba(255,255,255,.25); }
        button.cdc-linkish { color:inherit; font: inherit; }
        @media (max-width:980px) {
          .cdc-services-grid,.cdc-feature-grid,.cdc-blocks,.cdc-gallery-grid { grid-template-columns:repeat(2,1fr); }
          .cdc-hero-inner { grid-template-columns:1fr; min-height:unset; }
          .cdc-hero-copy { margin:0 auto; padding:3rem 1.5rem; max-width:100%; }
          .cdc-hero-media { height:340px; border-radius:0; }
          .cdc-pagehero-inner { grid-template-columns:1fr; min-height:unset; }
          .cdc-pagehero-copy { padding:2.6rem 1.5rem; max-width:100%; margin:0 auto; }
          .cdc-pagehero-media { height:260px; }
          .cdc-activity,.cdc-activity.reverse { grid-template-columns:1fr; direction:ltr; }
          .cdc-suburb-grid { grid-template-columns:repeat(3,1fr); }
          .cdc-contact-grid { grid-template-columns:1fr; }
          .cdc-footer-top { grid-template-columns:1fr 1fr; }
          .cdc-footer-locations { grid-template-columns:1fr; }
          .cdc-badges { display:none; }
        }
        @media (max-width:720px) {
          .cdc-nav,.cdc-navbar-right { display:none; }
          .cdc-menu-btn { display:flex; }
          .cdc-utility-actions .cdc-call { display:none; }
          .cdc-services-grid,.cdc-blocks,.cdc-gallery-grid,.cdc-feature-grid,.cdc-footer-top { grid-template-columns:1fr; }
          .cdc-loc-cols { grid-template-columns:1fr 1fr; }
          .cdc-suburb-grid { grid-template-columns:repeat(2,1fr); }
        }
      `}</style>

      {/* Utility bar */}
      <div className="cdc-utility">
        <div className="cdc-shell cdc-utility-inner">
          <button className="cdc-brand" onClick={() => go("home")} aria-label="Core Disability Care — home">
            <CoreMark size={40} /><strong>core<span> care</span></strong>
          </button>
          <div className="cdc-badges">
            <span className="cdc-badge-pill green"><ShieldCheck size={13} /> High Intensity Registered</span>
            <span className="cdc-badge-pill navy"><BadgeCheck size={13} /> NDIS Registered Provider</span>
            <span className="cdc-badge-pill dark"><Award size={13} /> Best Workplace 2026</span>
          </div>
          <div className="cdc-utility-actions">
            <a href="tel:1300022787" className="cdc-call">
              <span className="ic"><Phone size={15} /></span>
              <div><span>Call Us on</span><strong>1300 022 787</strong></div>
            </a>
            <button className="cdc-btn cdc-btn-pink cdc-btn-sm" onClick={() => go("contact")}>Contact Us</button>
            <button className="cdc-menu-btn" aria-label="menu" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <div className="cdc-navbar">
        <div className="cdc-shell cdc-navbar-inner">
          <nav className="cdc-nav">
            {NAV_LINKS.map((l) => (
              <div className={`cdc-nav-item${l.dropdown && dayOpen ? " open" : ""}`} key={l.label}
                onMouseEnter={() => l.dropdown && setDayOpen(true)} onMouseLeave={() => l.dropdown && setDayOpen(false)}>
                <button className={`cdc-nav-link${page === l.page ? " active" : ""}`} onClick={() => go(l.page)}>{l.label}</button>
                {l.dropdown && dayOpen && (
                  <div className="cdc-dropdown">
                    {NSW_SUBURBS.map((s) => <button key={s} onClick={() => go("suburb", s)}>{s} Day Program</button>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="cdc-navbar-right">
            <div className="cdc-social">
              <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={13} /></a>
            </div>
            <div className="cdc-navbar-sep" />
            <div className="cdc-navbar-links">
              <button onClick={() => go("dayprograms")}>Locations</button>
              <button onClick={() => go("careers")}>Careers</button>
            </div>
          </div>
        </div>
        <div className={`cdc-mobile-nav${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((l) => <button key={l.label} onClick={() => go(l.page)}>{l.label}</button>)}
          <button onClick={() => go("dayprograms")}>Locations</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
      </div>

      <main>
        {page === "home" && (
          <>
            <section className="cdc-hero">
              <div className="cdc-hero-inner">
                <div className="cdc-hero-copy">
                  <Spark className="spark1" color="#E91E8C" size={26} />
                  <Spark className="spark2" color="#2E9FE0" size={18} />
                  <span className="cdc-script">{HERO_SLIDES[slide].eyebrow}</span>
                  <h1>Live your<span className="l2">best life!</span></h1>
                  <p className="cdc-hero-sub">At Core Disability Care, we provide fabulous SIL homes, Day Programs with low-cost activities, Respite/STA homes and other NDIS services!</p>
                  <button className="cdc-btn cdc-btn-navy" onClick={() => go("contact")}>Contact Us <ArrowUpRight size={17} /></button>
                </div>
                <div className="cdc-hero-media">
                  <img key={slide} src={HERO_SLIDES[slide].img} alt="Core Disability Care participants and support workers enjoying an activity together" />
                  <div className="cdc-hero-dots">{HERO_SLIDES.map((_, i) => <button key={i} className={`cdc-hero-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />)}</div>
                </div>
              </div>
            </section>

            <section className="cdc-section">
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Our Services</span><h2>Everything you need, all in one place</h2></div>
                <div className="cdc-services-grid">
                  {SERVICES.map((s) => (
                    <article className="cdc-card" key={s.title}>
                      <img src={s.img} alt="" />
                      <div className="cdc-card-body">
                        <h3>{s.title}</h3><p>{s.desc}</p>
                        <button className="cdc-btn cdc-btn-ghost cdc-btn-sm" onClick={() => go(s.page)}>View Service <ArrowUpRight size={15} /></button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section><div className="cdc-blocks">
              {BLOCKS.map((b) => (
                <button className="cdc-block" key={b.key} style={{ background: b.color }} onClick={() => go(b.page)}>
                  <div className="cdc-block-top"><h3>{b.title}</h3><span className="cdc-block-arrow"><ArrowRight size={17} /></span></div>
                  <div className="cdc-block-img"><img src={b.img} alt={b.title} /></div>
                </button>
              ))}
            </div></section>

            <section className="cdc-section">
              <div className="cdc-shell">
                <div style={{ marginBottom: "2.2rem" }}><span className="cdc-script">Follow our journey</span><h2 style={{ marginTop: ".4rem" }}>See what we're up to</h2></div>
                <div className="cdc-gallery-grid">{GALLERY.map((src, i) => <img src={src} alt="Core Disability Care community activity" key={i} />)}</div>
              </div>
            </section>

            <section className="cdc-section cdc-testi-section">
              <div className="cdc-shell cdc-testi-wrap">
                <Quote size={26} className="quote" />
                <p className="cdc-testi-text">&ldquo;{TESTIMONIALS[tIndex].quote}&rdquo;</p>
                <p className="cdc-testi-name">{TESTIMONIALS[tIndex].name}</p>
                <p className="cdc-testi-role">{TESTIMONIALS[tIndex].role}</p>
                <div className="cdc-testi-controls">
                  <button className="cdc-testi-arrow" onClick={prevT}><ChevronLeft size={17} /></button>
                  <div className="cdc-testi-dots">{TESTIMONIALS.map((t, i) => <button key={t.name} className={`cdc-testi-dot${i === tIndex ? " active" : ""}`} onClick={() => setTIndex(i)} />)}</div>
                  <button className="cdc-testi-arrow" onClick={nextT}><ChevronRight size={17} /></button>
                </div>
              </div>
            </section>

            <section className="cdc-section">
              <div className="cdc-shell" style={{ maxWidth: 800, textAlign: "center", margin: "0 auto" }}>
                <span className="cdc-script">About Core</span>
                <h2 style={{ marginTop: ".4rem" }}>Not your typical NDIS provider</h2>
                <p style={{ color: "var(--ink-soft)", marginTop: "1.1rem" }}>Core Disability Care is a registered NDIS provider dedicated to offering a range of services tailored to the diverse needs of our participants.</p>
                <button className="cdc-btn cdc-btn-navy" style={{ marginTop: "1.6rem" }} onClick={() => go("about")}>Learn More <ArrowUpRight size={17} /></button>
              </div>
            </section>
          </>
        )}

        {page === "about" && (
          <>
            <PageHero eyebrow="Our Story" title="About Core Disability Care" sub="NDIS Registered Provider and Registered High Intensity Support Provider, proudly serving Greater Sydney since 2018." img={IMG.about} color="var(--sky)" />
            <section className="cdc-section">
              <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.6rem", alignItems: "center" }}>
                <img src={IMG.aboutStory} alt="" style={{ borderRadius: "1.3rem", width: "100%", height: 340, objectFit: "cover" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: ".9rem", color: "var(--ink-soft)" }}>
                  <p>We are a registered NDIS provider dedicated to offering a range of services tailored to meet the diverse needs of our participants.</p>
                  <p>Honesty and integrity are at the core of Core Disability Care's operations and values. We are committed to transparency and building trust with every participant and their families.</p>
                  <p>Our commitment to delighting our participants is unwavering — we go the extra mile and listen to feedback to continuously improve.</p>
                </div>
              </div>
            </section>
            <section className="cdc-section" style={{ background: "var(--graybg)" }}>
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Why Core</span><h2>Why families choose us</h2></div>
                <div className="cdc-feature-grid">{WHY_CORE.map((f) => <div className="cdc-feature-card" key={f.title}><h3>{f.title}</h3><p>{f.desc}</p></div>)}</div>
              </div>
            </section>
          </>
        )}

        {page === "dayprograms" && (
          <>
            <PageHero eyebrow="We have vacancies" title="Day Programs" sub="Make connections with your local community through centre-based and community-based activities of your choosing." img={IMG.dayprograms} color="var(--green)" />
            <div className="cdc-cta-band" style={{ background: "var(--sky)" }}>
              <div className="cdc-shell" style={{ textAlign: "center" }}>
                <h2 style={{ color: "var(--white)" }}>All Activities Are Low-Cost!*</h2>
                <p style={{ color: "#DDF0FF", marginTop: ".4rem" }}>*Most programs are low-cost, except when external contractors are engaged.</p>
                <button className="cdc-btn cdc-btn-white" style={{ marginTop: "1.2rem" }} onClick={() => go("contact")}>Contact Us</button>
              </div>
            </div>
            <section className="cdc-section">
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Find your local hub</span><h2>Day Program locations across NSW</h2></div>
                <div className="cdc-suburb-grid">{NSW_SUBURBS.map((s) => <button key={s} className="cdc-suburb-card" onClick={() => go("suburb", s)}>{s}</button>)}</div>
              </div>
            </section>
            <section className="cdc-section" style={{ background: "var(--graybg)" }}>
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">A day in the life</span><h2>Activity spotlights</h2></div>
                {ACTIVITIES.map((a, i) => (
                  <div className={`cdc-activity${i % 2 ? " reverse" : ""}`} key={a.title}>
                    <img src={a.img} alt={a.title} />
                    <div>
                      <h3>{a.title}</h3><p className="desc">{a.desc}</p>
                      <ul className="cdc-outcomes">{a.outcomes.map((o) => <li key={o}><CheckCircle2 size={16} /> {o}</li>)}</ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {page === "suburb" && suburb && (
          <>
            <PageHero eyebrow="Day Program" title={`${suburb} Day Program`} sub="A hub of fun and activities, staffed by qualified support workers who love what they do." img={IMG.dayprograms} color="var(--green)" />
            <section className="cdc-section">
              <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.6rem", alignItems: "center" }}>
                <div>
                  <span className="cdc-script">Welcome to {suburb}</span>
                  <h2 style={{ marginTop: ".4rem" }}>Fun, friendship and new skills</h2>
                  <p style={{ color: "var(--ink-soft)", marginTop: ".9rem" }}>Our {suburb} hub offers a wide range of fun, educational and interactive activities to suit all levels and abilities, in a safe and welcoming environment.</p>
                  <div className="cdc-contact-info-row" style={{ marginTop: "1.1rem" }}><MapPin size={16} color="var(--pink)" /> {suburb} NSW — call for the exact hub address</div>
                  <button className="cdc-btn cdc-btn-navy" style={{ marginTop: "1.2rem" }} onClick={() => go("contact")}>Enquire About This Hub <ArrowUpRight size={16} /></button>
                </div>
                <img src={IMG.dayprograms} alt="" style={{ borderRadius: "1.3rem", width: "100%", height: 340, objectFit: "cover" }} />
              </div>
            </section>
            <section className="cdc-section" style={{ background: "var(--graybg)" }}>
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Other locations</span><h2>More Day Program hubs nearby</h2></div>
                <div className="cdc-suburb-grid">{NSW_SUBURBS.filter((s) => s !== suburb).map((s) => <button key={s} className="cdc-suburb-card" onClick={() => go("suburb", s)}>{s}</button>)}</div>
              </div>
            </section>
          </>
        )}

        {page === "sil" && (
          <>
            <PageHero eyebrow="Supported Independent Living" title="Fabulous Group Homes (SIL)" sub="Experience the Core Lifestyle with 24/7 tailored supports, in a home that's genuinely yours." img={IMG.silRoom} color="var(--pink)" />
            <section className="cdc-section">
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Core Home Features</span><h2>It's your room, your way</h2></div>
                <div className="cdc-activity"><img src={IMG.silRoom} alt="" /><div><h3>It's Your Room</h3><p className="desc">Every participant's room is set up around what matters to them — comfort, privacy and a space that feels like home.</p></div></div>
                <div className="cdc-activity reverse"><img src={IMG.silLiving} alt="" /><div><h3>Spacious Living Rooms</h3><p className="desc">Shared spaces designed for connection — comfortable, accessible and easy to relax in.</p></div></div>
              </div>
            </section>
            <section className="cdc-section" style={{ background: "var(--graybg)" }}>
              <div className="cdc-shell">
                <div className="cdc-section-head"><span className="cdc-script">Core Services in SIL</span><h2>Everything included in your plan</h2></div>
                <div className="cdc-feature-grid">
                  <div className="cdc-feature-card"><HomeIcon size={24} color="var(--pink)" style={{ marginBottom: ".7rem" }} /><h3>Accommodation</h3><p>We have a range of homes available across Sydney, matched to your needs.</p></div>
                  <div className="cdc-feature-card"><Car size={24} color="var(--pink)" style={{ marginBottom: ".7rem" }} /><h3>Accessible Transport</h3><p>Access everything you need within your community with our vehicle fleet.</p></div>
                  <div className="cdc-feature-card"><Clock3 size={24} color="var(--pink)" style={{ marginBottom: ".7rem" }} /><h3>24/7 Supports</h3><p>Support from our reliable and trained Core Care team, day and night.</p></div>
                </div>
              </div>
            </section>
            <section className="cdc-section"><div className="cdc-shell"><div className="cdc-cta-card"><p>Ready to move in? Your SIL journey starts here.</p><button className="cdc-btn cdc-btn-pink" onClick={() => go("contact")}>Contact Us <ArrowUpRight size={16} /></button></div></div></section>
          </>
        )}

        {page === "respite" && (
          <>
            <PageHero eyebrow="Respite (STA)" title="A break that feels like a holiday" sub="We provide a safe and fun home for your loved one, so everyone can relax and re-energise with peace of mind." img={IMG.respiteBeach} color="var(--sky)" />
            <section className="cdc-section">
              <div className="cdc-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.6rem", alignItems: "center" }}>
                <div>
                  <span className="cdc-script">Why respite matters</span>
                  <h2 style={{ marginTop: ".4rem", marginBottom: "1.2rem" }}>Rest for carers, adventure for participants</h2>
                  {RESPITE_BENEFITS.map((b) => <div className="cdc-benefit" key={b.title}><strong>{b.title}: </strong><p>{b.desc}</p></div>)}
                </div>
                <img src={IMG.respiteBeach} alt="" style={{ borderRadius: "1.3rem", width: "100%", height: 420, objectFit: "cover" }} />
              </div>
            </section>
            <section className="cdc-section" style={{ background: "var(--graybg)" }}><div className="cdc-shell"><div className="cdc-cta-card"><p>Your respite starts here with Core!</p><button className="cdc-btn cdc-btn-pink" onClick={() => go("contact")}>Contact Us <ArrowUpRight size={16} /></button></div></div></section>
          </>
        )}

        {page === "other" && (
          <>
            <PageHero eyebrow="Other Services" title="More ways we support you" sub="From support coordination to homecare and our social club — the extras that make everyday life easier." img={IMG.coordination} color="var(--orange)" />
            <section className="cdc-section"><div className="cdc-shell"><div className="cdc-feature-grid">
              {OTHER_SERVICES.map((s) => <article className="cdc-feature-card photo" key={s.title}><img src={s.img} alt="" /><div className="body"><h3>{s.title}</h3><p>{s.desc}</p></div></article>)}
            </div></div></section>
          </>
        )}

        {page === "careers" && (
          <>
            <PageHero eyebrow="Careers" title="Join a team that shows up" sub="We're always looking for support workers, allied health professionals and coordinators who bring patience, curiosity and consistency to their work." img={IMG.careers} color="var(--navy)" />
            <section className="cdc-section">
              <div className="cdc-shell" style={{ maxWidth: 740, margin: "0 auto" }}>
                <div className="cdc-section-head"><span className="cdc-script">Current Openings</span><h2>Roles we're hiring for</h2></div>
                <div className="cdc-roles-list">{OPEN_ROLES.map((r) => <div className="cdc-role-row" key={r.title}>{r.title} <span className="pill">{r.type}</span></div>)}</div>
                <div style={{ textAlign: "center", marginTop: "2.2rem" }}>
                  <p style={{ color: "var(--ink-soft)" }}>Don't see the right role? We also welcome Work Experience placements.</p>
                  <button className="cdc-btn cdc-btn-pink" style={{ marginTop: "1.2rem" }} onClick={() => go("contact")}>Send Us Your Resume <ArrowUpRight size={16} /></button>
                </div>
              </div>
            </section>
          </>
        )}

        {page === "contact" && (
          <>
            <PageHero eyebrow="Get In Touch" title="Your support starts here" sub="Call, email or send an enquiry and our friendly team will be in touch within one business day." img={IMG.hero1} color="var(--pink)" />
            <section className="cdc-section">
              <div className="cdc-shell cdc-contact-grid">
                <div>
                  <div className="cdc-contact-info-row"><Phone size={17} color="var(--pink)" /> 1300 022 787</div>
                  <div className="cdc-contact-info-row"><Mail size={17} color="var(--pink)" /> info@coredisabilitycare.com.au</div>
                  <div className="cdc-contact-info-row"><MapPin size={17} color="var(--pink)" /> Suite 4, 88 Restwell Street, Bankstown NSW 2200</div>
                </div>
                {submitted ? (
                  <div className="cdc-form-card">
                    <CheckCircle2 size={24} color="var(--pink)" />
                    <strong style={{ fontFamily: "'Baloo 2',sans-serif", color: "var(--navy)" }}>Thanks — your enquiry is in!</strong>
                    <p style={{ color: "var(--ink-soft)" }}>We'll be in touch within one business day.</p>
                    <button className="cdc-btn cdc-btn-ghost cdc-btn-sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>Send another enquiry</button>
                  </div>
                ) : (
                  <form className="cdc-form-card" onSubmit={onSubmit}>
                    <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <textarea placeholder="How can we help?" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                    <button type="submit" className="cdc-btn cdc-btn-pink" style={{ alignSelf: "flex-start" }}>Send Enquiry <Send size={16} /></button>
                  </form>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <div className="cdc-cta-band">
        <div className="cdc-shell cdc-cta-inner">
          <div><h2>Join Core Disability Care and live your best life!</h2><p>Contact our friendly team on 1300 022 787 to enquire today.</p></div>
          <button className="cdc-btn cdc-btn-navy" onClick={() => go("contact")}>Learn More Today <ArrowUpRight size={17} /></button>
        </div>
      </div>

      <footer className="cdc-footer">
        <div className="cdc-shell">
          <div className="cdc-footer-top">
            <div className="cdc-footer-brand">
              <CoreMark size={60} dark />
              <div style={{ marginTop: "1rem", fontFamily: "'Baloo 2',sans-serif", fontSize: "1.6rem", fontWeight: 700 }}><span style={{ color: "var(--sky)" }}>core</span> <span style={{ color: "var(--white)" }}>care</span></div>
              <p>NDIS Registered Provider and Registered High Intensity Support Provider. We're passionate about creating opportunities for people with disability to live the life they love.</p>
              <div className="cdc-footer-badges">
                <span className="cdc-badge-pill green"><ShieldCheck size={13} /> High Intensity</span>
                <span className="cdc-badge-pill navy" style={{ background: "rgba(255,255,255,.08)", color: "var(--white)", border: "1px solid rgba(255,255,255,.2)" }}><BadgeCheck size={13} /> NDIS Registered</span>
              </div>
            </div>
            <div><h4>Types of Care</h4><ul>
              <li><button onClick={() => go("other")}>Support Coordination</button></li>
              <li><button onClick={() => go("sil")}>Group Homes (SIL)</button></li>
              <li><button onClick={() => go("respite")}>Respite (STA)</button></li>
              <li><button onClick={() => go("other")}>Core Social Club</button></li>
              <li><button onClick={() => go("other")}>Homecare</button></li>
            </ul></div>
            <div><h4>Quick Links</h4><ul>
              <li><button onClick={() => go("about")}>About Us</button></li>
              <li><button onClick={() => go("dayprograms")}>Day Programs</button></li>
              <li><button onClick={() => go("careers")}>Careers</button></li>
              <li><button onClick={() => go("contact")}>Contact Us</button></li>
            </ul></div>
            <div className="cdc-footer-contact">
              <h4>Contact Us</h4>
              <div className="cdc-footer-contact-row"><Phone size={16} color="var(--pink)" /> 1300 022 787</div>
              <div className="cdc-footer-contact-row"><Mail size={16} color="var(--pink)" /> info@coredisabilitycare.com.au</div>
              <button className="cdc-btn cdc-btn-white" style={{ alignSelf: "flex-start" }} onClick={() => go("contact")}>Get In Touch</button>
            </div>
          </div>
          <hr className="cdc-footer-divider" />
          <div className="cdc-footer-locations">
            <div><h4>NSW — Day Programs</h4><div className="cdc-loc-cols">{NSW_SUBURBS.map((s) => <button key={s} onClick={() => go("suburb", s)}>{s} <ArrowRight size={12} /></button>)}</div></div>
            <div><h4>Other Services</h4><div className="cdc-loc-cols">
              <button onClick={() => go("other")}>Community Access <ArrowRight size={12} /></button>
              <button onClick={() => go("other")}>Support Coordination <ArrowRight size={12} /></button>
              <button onClick={() => go("other")}>Homecare <ArrowRight size={12} /></button>
              <button onClick={() => go("careers")}>Work Experience <ArrowRight size={12} /></button>
            </div></div>
          </div>
          <div className="cdc-footer-bottom">
            <span>© {new Date().getFullYear()} Core Disability Care Pty Ltd. ABN 45 123 456 789.</span>
            <div className="cdc-social"><a href="#" aria-label="Instagram"><Instagram size={13} /></a><a href="#" aria-label="Facebook"><Facebook size={13} /></a><a href="#" aria-label="YouTube"><Youtube size={13} /></a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
