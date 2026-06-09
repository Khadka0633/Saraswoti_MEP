// ── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "hvac",
    short: "01",
    label: "HVAC Systems",
    desc: "Precision-engineered heating, ventilation & air conditioning for commercial and industrial environments — from split systems to large-scale chillers.",
    path: "/services/hvac",
  },
  {
    id: "electrical",
    short: "02",
    label: "Electrical Works",
    desc: "Comprehensive LT/HT electrical installations, generator systems, UPS, BMS integration, and energy audits for institutional clients.",
    path: "/services/electrical",
  },
  {
    id: "plumbing",
    short: "03",
    label: "Plumbing & Sanitation",
    desc: "Whole-building plumbing design with a focus on water efficiency, sustainability, and compliance with international standards.",
    path: "/services/plumbing",
  },
  {
    id: "fire",
    short: "04",
    label: "Fire Safety Systems",
    desc: "State-of-the-art fire detection, suppression, and life-safety systems engineered to protect people and critical infrastructure.",
    path: "/services/fire-safety",
  },
  {
    id: "amc",
    short: "05",
    label: "AMC & Service Support",
    desc: "Post-project annual maintenance contracts and rapid-response field support teams to maximize uptime for your systems.",
    path: "/services/amc",
  },

    {
    id: "civil",
    short: "06",
    label: "Civil Engineering",
    desc: "From permit submission to site supervision and final handover. Our team coordinates contractors, manages QA/QC, and ensures delivery on time and budget.",
    path: "/services/amc",
  },

    {
    id: "steel",
    short: "07",
    label: "Steel Structures",
    desc: "Design, analysis, and detailed fabrication drawings for industrial sheds, portal frames, trusses, and composite structures using Tekla, ETABS and SAP2000..",
    path: "/services/amc",
  },
    {
    id: "Architectural",
    short: "08",
    label: "Architectural Design",
    desc: "Space planning, conceptual design, and full working drawing packages. We bridge aesthetics and function, producing construction-ready architectural documentation.",
    path: "/services/amc",
  },
];

// ── Sectors ─────────────────────────────────────────────────────────────────
export const SECTORS = [
  { label: "Hospitality",     color: "#c9a84c", sub: "Hotels · Resorts · Restaurants" },
  { label: "Healthcare",      color: "#3dd9c0", sub: "Hospitals · Labs · Pharma" },
  { label: "Corporate",       color: "#d94f3d", sub: "Banks · HQs · Embassies" },
  { label: "Infrastructure",  color: "#7b8fff", sub: "Airports · Telecom · Data Centers" },
  { label: "Education",       color: "#f0a04b", sub: "Universities · Schools" },
  { label: "Industrial",      color: "#a0d490", sub: "Factories · Warehouses" },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  { id: 1, title: "Grand Hyatt Kathmandu",            type: "Hospitality",    tag: "Completed", color: "#c9a84c" },
  { id: 2, title: "Norvic Int'l Hospital Expansion",  type: "Healthcare",     tag: "Completed", color: "#3dd9c0" },
  { id: 3, title: "TIA New Terminal MEP",             type: "Infrastructure", tag: "Ongoing",   color: "#d94f3d" },
  { id: 4, title: "NCB Corporate HQ",                 type: "Corporate",      tag: "Completed", color: "#7b8fff" },
  { id: 5, title: "Patanjali Manufacturing Plant",    type: "Industrial",     tag: "Ongoing",   color: "#f0a04b" },
  { id: 6, title: "UNDP Nepal Office",                type: "Corporate",      tag: "Completed", color: "#a0d490" },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The SaraswotiMEP team delivered every milestone ahead of schedule and their technical depth is unmatched in Nepal. Their HVAC design for our hotel exceeded our energy targets.",
    name: "Arya Shrestha",
    role: "Managing Director",
  },
  {
    id: 2,
    quote: "From design to commissioning, SaraswotiMEP handled our entire hospital MEP works with zero defects. Highly recommended for critical infrastructure projects.",
    name: "Rakesh Pal",
    role: "GM Projects",
  },
  {
    id: 3,
    quote: "Outstanding after-sales support. Whenever we needed them, they responded within hours. That level of commitment is rare in this industry.",
    name: "Abin Rai",
    role: "Managing Director",
  },
];

// ── Clients ──────────────────────────────────────────────────────────────────
export const CLIENTS = [
  "UNDP", "World Bank", "Marriott", "Ncell",
  "Dabur", "Soaltee", "KFC", "Radisson",
  "Patanjali", "Siddhartha Bank", "Nepal Mediciti", "Kantipur TV",
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
