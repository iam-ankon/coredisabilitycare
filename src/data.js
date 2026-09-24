// Shared content and image references used across pages.
// Photos are free-license Unsplash images (Unsplash License —
// free for commercial use, no attribution required), hotlinked
// directly. Swap these for real photography whenever you have it.

export const REAL_PHOTOS = {
  familyGlasses: "/photos/family-glasses.jpg",
  boyBlocks: "/photos/boy-blocks.jpg",
  grandmaTablet: "/photos/grandma-tablet.jpg",
};

export const IMG = {
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
  g1: REAL_PHOTOS.familyGlasses,
  g2: REAL_PHOTOS.boyBlocks,
  g3: REAL_PHOTOS.grandmaTablet,
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

export const HERO_SLIDES = [
  { img: REAL_PHOTOS.familyGlasses, eyebrow: "Person-Centred NDIS Support" },
  { img: REAL_PHOTOS.boyBlocks, eyebrow: "Sydney's Favourite Day Programs" },
  { img: REAL_PHOTOS.grandmaTablet, eyebrow: "Respite That Feels Like a Holiday" },
];

export const SERVICES = [
  { slug: "group-home-sil", img: IMG.sil, title: "Fabulous Group Homes (SIL)", desc: "Experience the Core Lifestyle with 24/7 tailored supports." },
  { slug: "respite", img: IMG.respite, title: "Respite (STA)", desc: "A safe, fun home for your loved one, so everyone can relax and recharge." },
  { slug: "day-programs", img: IMG.dayprograms, title: "Day Programs", desc: "Check out our low-cost activities, where everyone has fun. A leading Sydney day program provider." },
  { slug: "other-services", img: IMG.home, title: "Supports at Home", desc: "Domestic assistance and daily living support delivered right where you live." },
  { slug: "other-services", img: IMG.coordination, title: "Support Coordination", desc: "A dedicated coordinator to help you get the most from your NDIS plan." },
  { slug: "other-services", img: IMG.social, title: "Core Social Club", desc: "The weekend social club everyone wants to join — outings, sport and new friends." },
];

export const BLOCKS = [
  { key: "day", title: "Day Programs", color: "#7AC142", img: IMG.blockDay, to: "/day-programs" },
  { key: "sil", title: "SIL", color: "#E91E8C", img: IMG.blockSil, to: "/group-home-sil" },
  { key: "respite", title: "Respite", color: "#2E9FE0", img: IMG.blockRespite, to: "/respite" },
  { key: "coord", title: "Support Coordination", color: "#F7941D", img: IMG.blockCoord, to: "/other-services" },
];

export const GALLERY = [IMG.g1, IMG.g2, IMG.g3, IMG.g4];

export const TESTIMONIALS = [
  {
    quote: "The Day Program is very successful, offering my daughter a happy, friendly and safe place to meet new friends and be out in the community. The staff are welcoming and communication with our family is a blessing.",
    name: "Maria",
    role: "Parent of a participant",
  },
  {
    quote: "I moved into my own place through SIL support from Core. Nine months on, I'm cooking my own meals and catching the bus by myself.",
    name: "Daniel",
    role: "NDIS participant",
  },
  {
    quote: "As a support coordinator I recommend Core because they actually communicate. No chasing invoices, no chasing updates.",
    name: "Priya",
    role: "Support Coordinator",
  },
];

// Day Program hub locations. Each has a slug used for its own page (/day-programs/:slug).
export const NSW_SUBURBS = [
  { slug: "bankstown", name: "Bankstown", region: "Canterbury-Bankstown", postcode: "2200" },
  { slug: "liverpool", name: "Liverpool", region: "Liverpool", postcode: "2170" },
  { slug: "cabramatta", name: "Cabramatta", region: "Fairfield", postcode: "2166" },
  { slug: "merrylands", name: "Merrylands", region: "Cumberland", postcode: "2160" },
  { slug: "auburn", name: "Auburn", region: "Cumberland", postcode: "2144" },
  { slug: "guildford", name: "Guildford", region: "Cumberland", postcode: "2161" },
  { slug: "blacktown", name: "Blacktown", region: "Blacktown", postcode: "2148" },
  { slug: "granville", name: "Granville", region: "Cumberland", postcode: "2142" },
  { slug: "villawood", name: "Villawood", region: "Fairfield", postcode: "2163" },
  { slug: "fairfield", name: "Fairfield", region: "Fairfield", postcode: "2165" },
];

export const MILESTONES = [
  { year: "2018", title: "Doors open in Bankstown", desc: "Core Disability Care launches with a single mission: honest, person-centred NDIS support for Greater Sydney." },
  { year: "2020", title: "Day Programs go weekly", desc: "Demand for community access grows fast — regular Day Programs launch across Bankstown and Liverpool." },
  { year: "2021", title: "First SIL homes open", desc: "Our first Supported Independent Living homes welcome participants into 24/7 tailored care." },
  { year: "2023", title: "High Intensity registration", desc: "Core becomes a registered High Intensity Support provider, expanding the complexity of care we can offer." },
  { year: "2025", title: "10 suburbs, one team", desc: "Day Programs, SIL, Respite and Homecare now run across ten Greater Sydney suburbs." },
  { year: "2026", title: "900+ families and counting", desc: "Today, Core supports hundreds of participants and families with the same honesty we started with." },
];

export const WHY_CORE = [
  { title: "High Intensity Support Provider", desc: "We are a registered high intensity support provider, ensuring comprehensive support tailored to your needs." },
  { title: "Decades of Combined Experience", desc: "Our team brings decades of combined experience, offering unparalleled expertise and knowledge in disability support." },
  { title: "Super Experienced Team", desc: "Our team consists of experienced, passionate and reliable professionals dedicated to providing exceptional support with a smile." },
  { title: "Fabulous, Reliable Staff", desc: "Our staff are committed to delivering outstanding service, ensuring every participant feels valued and supported." },
  { title: "Holistic and Personalised Approach", desc: "We focus on the overall well-being of our participants, offering personalised services that cater to individual needs." },
  { title: "Savvy and Innovative", desc: "Core Disability Care is not your typical NDIS provider. We're savvy, innovative, and proud of the work we do." },
];

export const SIL_FEATURE_TABS = [
  {
    key: "rooms",
    label: "Rooms",
    img: IMG.silRoom,
    title: "It's Your Room",
    desc: "Every participant's room is set up around what matters to them — comfort, privacy and a space that genuinely feels like home.",
    features: ["Private, lockable bedroom", "Personalised decor welcome", "Adjustable beds available", "Ceiling hoists on request"],
  },
  {
    key: "lounge",
    label: "Lounge",
    img: IMG.silLiving,
    title: "Spacious Living Rooms",
    desc: "Shared spaces designed for connection — comfortable, accessible and easy to relax in with housemates and visitors.",
    features: ["Smart TV and streaming", "Accessible, wide walkways", "Quiet corners for downtime", "Room for visitors to stay"],
  },
  {
    key: "kitchen",
    label: "Kitchen",
    img: IMG.home,
    title: "A Kitchen You Can Use",
    desc: "Height-adjustable benches and accessible appliances mean you can cook, or learn to, at your own pace.",
    features: ["Height-adjustable benchtops", "Accessible appliances", "Support to build cooking skills", "Dietary needs catered for"],
  },
  {
    key: "food",
    label: "Food",
    img: IMG.social,
    title: "Meals Your Way",
    desc: "From meal planning to grocery runs, support workers help you eat well without losing choice over what's on your plate.",
    features: ["Weekly meal planning", "Grocery shopping support", "Cultural and dietary preferences", "Cooking skills program"],
  },
  {
    key: "transport",
    label: "Transport",
    img: IMG.hero2,
    title: "Accessible Transport, On Your Terms",
    desc: "Whether you prefer our accessible vehicles or want to build your own travel skills, we support you every step of the way.",
    features: ["Wheelchair-accessible vehicles", "NDIS transport allowance accepted", "Travel training available", "Trips to appointments and outings"],
  },
  {
    key: "laundry",
    label: "Laundry",
    img: IMG.home,
    title: "Laundry Made Easy",
    desc: "Accessible laundry facilities and as much or as little support as you need to keep on top of it.",
    features: ["Front-loading accessible machines", "Rostered support available", "Skill-building encouraged", "Linen service on request"],
  },
  {
    key: "outdoor",
    label: "Outdoor",
    img: IMG.respiteBeach,
    title: "Room to Breathe Outside",
    desc: "Every home has an outdoor space to unwind, garden or just get some fresh air with housemates.",
    features: ["Accessible outdoor areas", "Undercover alfresco seating", "Garden beds at some homes", "Pet-friendly by arrangement"],
  },
  {
    key: "hobbies",
    label: "Hobbies",
    img: IMG.g2,
    title: "Time for What You Love",
    desc: "Support workers help you keep doing the hobbies you love, or discover new ones close to home.",
    features: ["1:1 hobby time built into your plan", "Local clubs and classes", "Art, music and craft supplies", "Community group outings"],
  },
  {
    key: "support",
    label: "Active Support",
    img: IMG.coordination,
    title: "24/7 Active Support",
    desc: "Our team uses an Active Support model — helping you do things with you, not for you, so you build skills every day.",
    features: ["24/7 on-site support team", "Active Support trained staff", "Individual support plans", "Regular family check-ins"],
  },
];

export const ACTIVITIES = [
  {
    title: "Fishing Club",
    img: IMG.fishing,
    desc: "Whatever the weather, the health benefits of fishing are so much more than you'd think.",
    outcomes: ["Promotes outdoor time and relaxation", "Learn a new skill", "Combat stress and anxiety", "Improve concentration and patience", "Build strong bonds with friends", "Program cost — low-cost"],
  },
  {
    title: "Sailability",
    img: IMG.sailing,
    desc: "Specially designed boats that are safe and easy to handle, so everyone can enjoy the adventure of sailing.",
    outcomes: ["Inclusive sailing experience", "Skill development", "Build confidence", "Social interaction", "Therapeutic benefits", "Program cost — low-cost"],
  },
];

export const RESPITE_BENEFITS = [
  { title: "Improving Relationships", desc: "Time away from caregiving duties can reduce stress and improve family dynamics, leading to stronger, more positive relationships." },
  { title: "Rest and Recharge", desc: "Families and carers can take a break from daily responsibilities, allowing them to rest and recharge." },
  { title: "Peace of Mind", desc: "Knowing your loved one is in a safe, supportive environment provides real peace of mind." },
  { title: "Preventing Burnout", desc: "Continuous caregiving without breaks can lead to physical and emotional exhaustion — regular respite helps prevent it." },
  { title: "Personal Growth", desc: "Breaks provide opportunities for personal growth and self-care, so carers can pursue hobbies and interests too." },
];

export const OTHER_SERVICES = [
  { title: "Support Coordination", img: IMG.coordination, desc: "Navigating the NDIS can be challenging, but with Core's Support Coordination, you're never alone. We help you understand your plan, connect with providers and get the most from your funding." },
  { title: "Homecare", img: IMG.home, desc: "Domestic assistance, personal care and daily living support delivered right where you live, on a schedule built around you." },
  { title: "Community Access", img: IMG.hero2, desc: "One-on-one or small group support to get out, build friendships and take part in the things you enjoy." },
  { title: "Core Social Club", img: IMG.social, desc: "The weekend social club everyone wants to join — outings, sport, day trips and new friends, every week." },
];

export const OPEN_ROLES = [
  { title: "Support Worker — Community Access", type: "Casual" },
  { title: "Support Worker — SIL, Overnight", type: "Part-time" },
  { title: "Occupational Therapist", type: "Full-time" },
  { title: "Support Coordinator", type: "Full-time" },
  { title: "Day Program Facilitator", type: "Full-time" },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Reach out", desc: "Call, email or submit an enquiry. Tell us a little about your situation and what support looks like for you." },
  { step: "02", title: "Free plan chat", desc: "We'll walk through your NDIS plan together, at no cost, and map your funding to the right supports." },
  { step: "03", title: "Meet your match", desc: "We match you with support workers and homes that genuinely suit your personality, culture and goals." },
  { step: "04", title: "Start living your best life", desc: "Support kicks off on your schedule, with a dedicated coordinator checking in every step of the way." },
];

export const FAQS = [
  { q: "How do I know if I'm eligible for the NDIS?", a: "You're generally eligible if you're under 65, live in Australia, and have a permanent and significant disability that affects your ability to take part in everyday activities. Our team can help you check your eligibility and start an access request, free of charge." },
  { q: "What's the difference between SIL and Respite (STA)?", a: "Supported Independent Living (SIL) is ongoing, 24/7 support in a home you live in permanently. Respite, or Short Term Accommodation (STA), is a short stay — a few days to a couple of weeks — that gives participants a change of scenery and gives carers a break." },
  { q: "Do I need a Support Coordinator to work with Core?", a: "No — you can self-manage, plan-manage or work with any Support Coordinator and still access Core's services. If you don't have one yet, we can also provide Support Coordination as part of your plan." },
  { q: "How much do Day Programs cost?", a: "Most of our Day Program activities are low-cost and covered under Core Supports or Capacity Building funding. Where an external contractor or venue is involved (like an entry fee), a small additional fee may apply — we'll always tell you upfront." },
  { q: "Can I choose my own support worker?", a: "Yes. We match you with a small, consistent team based on your interests, communication style and cultural needs, and you can request a change at any time if it's not the right fit." },
  { q: "What areas do you service?", a: "We provide Day Programs, SIL, Respite and in-home support across Greater Sydney, including Bankstown, Liverpool, Cabramatta, Merrylands, Auburn, Guildford, Blacktown, Granville, Villawood and Fairfield." },
];

export const RESOURCES = [
  { tag: "Choosing a provider", title: "How to choose the right SIL provider for you", desc: "Six questions to ask before you sign on with a Supported Independent Living provider — from staff ratios to how they handle changes.", img: IMG.silLiving },
  { tag: "NDIS plans", title: "NDIS plan management, explained simply", desc: "Self-managed, plan-managed or agency-managed — what each option actually means for your day-to-day funding and paperwork.", img: IMG.coordination },
  { tag: "Getting started", title: "Getting the most out of your NDIS plan review", desc: "How to prepare for your plan review so your funding actually reflects the support you need this year.", img: IMG.social },
];
