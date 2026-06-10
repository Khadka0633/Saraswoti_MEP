// ── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "hvac",
    short: "01",
    img: "/images/HVAC.jpg",
    label: "HVAC Systems",
    desc: "Precision-engineered heating, ventilation & air conditioning for commercial and industrial environments — from split systems to large-scale chillers.",
    path: "/services/hvac",
  },
  {
    id: "electrical",
    short: "02",
    img: "/images/Electric.jpg",
    label: "Electrical Works",
    desc: "Comprehensive LT/HT electrical installations, generator systems, UPS, BMS integration, and energy audits for institutional clients.",
    path: "/services/electrical",
  },
  {
    id: "plumbing",
    short: "03",
    img: "/images/plumb.jpg",
    label: "Plumbing & Sanitation",
    desc: "Whole-building plumbing design with a focus on water efficiency, sustainability, and compliance with international standards.",
    path: "/services/plumbing",
  },
  {
    id: "fire",
    short: "04",
    img: "/images/Fire.jpg",
    label: "Fire Safety Systems",
    desc: "State-of-the-art fire detection, suppression, and life-safety systems engineered to protect people and critical infrastructure.",
    path: "/services/fire-safety",
  },
  {
    id: "amc",
    short: "05",
    img: "/images/AMC.jpg",
    label: "AMC & Service Support",
    desc: "Post-project annual maintenance contracts and rapid-response field support teams to maximize uptime for your systems.",
    path: "/services/amc",
  },

    {
    id: "civil",
    short: "06",
   img: "/images/civil.jpg",
    label: "Civil Engineering & construction",
    desc: "From permit submission to site supervision and final handover. Our team coordinates contractors, manages QA/QC, and ensures delivery on time and budget.",
    path: "/services/amc",
  },

    {
    id: "steel",
    short: "07",
    img: "/images/steel.jpg",
    label: "Steel Structures",
    desc: "Design, analysis, and detailed fabrication drawings for industrial sheds, portal frames, trusses, and composite structures using Tekla, ETABS and SAP2000..",
    path: "/services/amc",
  },
    {
    id: "Architectural",
    short: "08",
    img: "/images/arch.jpg",
    label: "Architectural Design",
    desc: "Space planning, conceptual design, and full working drawing packages. We bridge aesthetics and function, producing construction-ready architectural documentation.",
    path: "/services/amc",
  },
  {
    id: "maintenance",
    short: "09",
    img: "/images/maintain.png",
    label: "Maintainance",
    desc: "Reliable maintenance services to keep your systems running at peak performance — with scheduled visits, rapid emergency response, and dedicated support teams.",
    path: "/services/amc",
  },
];

// ── Sectors ─────────────────────────────────────────────────────────────────
export const SECTORS = [
  { label: "Hospitality",     color: "#c9a84c", sub: "Hotels · Resorts · Restaurants" , img: "/images/Hospitality.png" },
  { label: "Healthcare",      color: "#3dd9c0", sub: "Hospitals · Labs · Pharma" ,          img: "/images/Healthcare.jpeg" },
  { label: "Corporate",       color: "#d94f3d", sub: "Banks · HQs · Embassies" ,          img: "/images/Corporate.jpg" },
  { label: "Infrastructure",  color: "#7b8fff", sub: "Airports · Telecom · Data Centers" ,          img: "/images/Infrastructure.webp" },
  { label: "Education",       color: "#f0a04b", sub: "Universities · Schools" ,          img: "/images/Education.jpg" },
  { label: "Industrial",      color: "#a0d490", sub: "Factories · Warehouses" ,          img: "/images/Industrial.jpg" },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  { id: 1, title: "Navratna Star Hotel",            type: "Hospitality",    tag: "Completed", color: "#c9a84c" },
  { id: 2, title: "Maa Laxmi Health Care",  type: "Healthcare",     tag: "Ongoing", color: "#3dd9c0" },
  { id: 3, title: "Janak Drug",                 type: "Corporate",      tag: "Completed", color: "#7b8fff" },
  { id: 4, title: "MAK Automobile",    type: "Industrial",     tag: "Completed",   color: "#f0a04b" },
  { id: 5, title: "Madhuwan Jewellers",                type: "Corporate",      tag: "Completed", color: "#a0d490" },
   { id: 6, title: "RS Tower",                 type: "Corporate",      tag: "Completed", color: "#4c537a" },
   { id: 7, title: "RK English Boarding School",                 type: "Education",      tag: "Completed", color: "#806036" },
   { id: 8, title: "Maa Laxmi Pharmacy",                 type: "Healthcare",      tag: "Completed", color: "#c28434" },
    { id: 9, title: "RS Drug and Distributors",                 type: "Healthcare",      tag: "Completed", color: "#398b7a" },
    { id: 10, title: "Mangpahang Unisex Salon",                 type: "Corporate",      tag: "Completed", color: "#635083" },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The SaraswotiMEP team delivered every milestone ahead of schedule and their technical depth is unmatched in Nepal. Their HVAC design for our Salon exceeded our energy targets.",
    name: "Sudip Rai",
    role: "CEO - Mangpahang Unisex Salon",
  },
  {
    id: 2,
    quote: "From design to commissioning, SaraswotiMEP handled our entire hospital MEP works with zero defects. Highly recommended for critical infrastructure projects.",
    name: "Kalyan Shah",
    role: "Managing Director - Mahalaxmi Health Care",
  },
  {
    id: 3,
    quote: "Outstanding after-sales support. Whenever we needed them, they responded within hours. That level of commitment is rare in this industry.",
    name: "Ram Kumar Sah",
    role: "Founder - RK English Boarding School",
  },
];

// ── Clients ──────────────────────────────────────────────────────────────────
export const CLIENTS = [
  "Navratna Star Hotel", "Maa Laxmi Health Care", "Janak Drug", "MAK Automobile",
  "Madhuwan Jewellers", "RS Tower", "RK English Boarding School", "Maa Laxmi Pharmacy",
  "RS Drug and Distributors", "Mangpahang Unisex Salon", 
];

// ── Nav Items ─────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  {
    label: "Services", path: "/services",
    children: [
      { label: "HVAC Systems",       path: "/services/hvac" },
      { label: "Electrical Works",   path: "/services/electrical" },
      { label: "Plumbing",           path: "/services/plumbing" },
      { label: "Fire Safety",        path: "/services/fire-safety" },
      { label: "AMC Support",        path: "/services/amc" },
    ],
  },
  {
    label: "Sectors", path: "/sectors",
    children: [
      { label: "Hospitality",    path: "/sectors" },
      { label: "Healthcare",     path: "/sectors" },
      { label: "Corporate",      path: "/sectors" },
      { label: "Infrastructure", path: "/sectors" },
      { label: "Industrial",     path: "/sectors" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Contact",  path: "/contact" },
];

// ── About Features ────────────────────────────────────────────────────────────
export const ABOUT_FEATURES = [
  "🏛️ Integrated Team",
  "💻 Software-Driven Accuracy",
  "🔄 End-to-End Delivery",
  "📞 24/7 Service Response",
  "⚡ Fast Turnaround",
  "💡 Value Engineering",
];


