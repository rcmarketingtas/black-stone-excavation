export const SITE = {
  name: "Blackstone Excavations",
  tagline: "Precision Excavation. Built on Strength.",
  description:
    "Premium excavation, earthmoving, and civil works across Melbourne and regional Victoria. Licensed operators, modern fleet, free quotes.",
  url: "https://blackstoneexcavation.com.au",
  phone: "1300 555 0198",
  phoneHref: "tel:+6113005550198",
  email: "quotes@blackstoneexcavation.com.au",
  address: "Melbourne, Victoria, Australia",
  hours: "Mon–Fri: 6:00 AM – 6:00 PM | Sat: 7:00 AM – 2:00 PM",
  emergencyPhone: "1300 555 0199",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Gallery", href: "gallery" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
] as const;

export const SERVICES = [
  {
    title: "Site Cuts",
    description: "Precision benching and cut-and-fill for residential and commercial blocks.",
    icon: "Layers",
  },
  {
    title: "Earthmoving",
    description: "Bulk earthworks, soil relocation, and site preparation at scale.",
    icon: "Mountain",
  },
  {
    title: "General Excavation",
    description: "Versatile excavation for foundations, pools, sheds, and landscaping.",
    icon: "Shovel",
  },
  {
    title: "Rock Removal",
    description: "Rock breaking, hammer work, and removal for challenging terrain.",
    icon: "Pickaxe",
  },
  {
    title: "Trenching",
    description: "Utility trenches for plumbing, electrical, and telecommunications.",
    icon: "Route",
  },
  {
    title: "Drainage",
    description: "Stormwater, agricultural, and property drainage solutions.",
    icon: "Droplets",
  },
  {
    title: "Land Clearing",
    description: "Vegetation removal, stump grinding, and site preparation.",
    icon: "Trees",
  },
  {
    title: "Driveway Preparation",
    description: "Grading, compaction, and base preparation for durable driveways.",
    icon: "Car",
  },
  {
    title: "Retaining Wall Excavation",
    description: "Footings and cut-outs for timber, block, and engineered walls.",
    icon: "BrickWall",
  },
  {
    title: "Post Hole Drilling",
    description: "Accurate auger drilling for fences, decks, and structures.",
    icon: "CircleDot",
  },
  {
    title: "Site Clean-up",
    description: "Final grading, debris removal, and handover-ready finishes.",
    icon: "Sparkles",
  },
  {
    title: "Civil Works",
    description: "Roadworks, carparks, footpaths, and subdivision earthworks.",
    icon: "HardHat",
  },
] as const;

export const WHY_CHOOSE_US = [
  { label: "Years Experience", value: 10, suffix: "+", animate: true },
  { label: "Projects Completed", value: 500, suffix: "+", animate: true },
  { label: "Modern Equipment", value: 0, suffix: "", animate: false },
  { label: "Fully Insured", value: 0, suffix: "", animate: false },
  { label: "Reliable Service", value: 0, suffix: "", animate: false },
  { label: "Free Quotes", value: 0, suffix: "", animate: false },
  { label: "Licensed Operators", value: 0, suffix: "", animate: false },
] as const;

export const FLEET = [
  {
    name: "1.7T Excavator",
    description: "Compact access for tight residential sites and backyard work.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    specs: ["Rubber tracks", "Zero tail swing", "Auger ready"],
  },
  {
    name: "5T Excavator",
    description: "Our workhorse for standard residential and light commercial jobs.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    specs: ["Hammer attachment", "Multiple buckets", "GPS ready"],
  },
  {
    name: "14T Excavator",
    description: "Heavy-duty performance for commercial and civil earthworks.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    specs: ["Rock hammer", "Large capacity", "Long reach"],
  },
  {
    name: "Skid Steer",
    description: "Versatile loader for grading, material handling, and cleanup.",
    image:
      "https://images.unsplash.com/photo-1590856029826-c4a54a5a0492?w=800&q=80",
    specs: ["Box blade", "Forks", "Soil spreader"],
  },
  {
    name: "Tipper Truck",
    description: "Efficient spoil removal and material delivery to keep projects moving.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    specs: ["10T payload", "Site access", "Same-day haulage"],
  },
] as const;

export type GalleryCategory =
  | "All"
  | "Excavation"
  | "Earthmoving"
  | "Trenching"
  | "Rock Removal"
  | "Site Cuts"
  | "Machinery";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Excavation",
  "Earthmoving",
  "Trenching",
  "Rock Removal",
  "Site Cuts",
  "Machinery",
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    alt: "Excavator working on residential site",
    category: "Excavation" as GalleryCategory,
    height: 320,
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    alt: "Large excavator at construction site",
    category: "Machinery" as GalleryCategory,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    alt: "Compact excavator trenching",
    category: "Trenching" as GalleryCategory,
    height: 280,
  },
  {
    src: "https://images.unsplash.com/photo-1590856029826-c4a54a5a0492?w=900&q=80",
    alt: "Skid steer grading driveway",
    category: "Earthmoving" as GalleryCategory,
    height: 360,
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    alt: "Site cut preparation",
    category: "Site Cuts" as GalleryCategory,
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    alt: "Commercial excavation project",
    category: "Excavation" as GalleryCategory,
    height: 420,
  },
  {
    src: "https://images.unsplash.com/photo-1577495508048-b5900514ad67?w=900&q=80",
    alt: "Rock removal with hammer",
    category: "Rock Removal" as GalleryCategory,
    height: 340,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    alt: "Utility trench excavation",
    category: "Trenching" as GalleryCategory,
    height: 290,
  },
  {
    src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=80",
    alt: "Bulk earthmoving operation",
    category: "Earthmoving" as GalleryCategory,
    height: 380,
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80",
    alt: "Excavator fleet on site",
    category: "Machinery" as GalleryCategory,
    height: 310,
  },
  {
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
    alt: "Foundation excavation",
    category: "Excavation" as GalleryCategory,
    height: 350,
  },
  {
    src: "https://images.unsplash.com/photo-1605812860427-4021143a370e?w=900&q=80",
    alt: "Residential site cut",
    category: "Site Cuts" as GalleryCategory,
    height: 270,
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Contact Us",
    description: "Reach out by phone, email, or our enquiry form with your project details.",
  },
  {
    title: "Free Site Inspection",
    description: "We visit your site to assess access, soil conditions, and scope of work.",
  },
  {
    title: "Receive Quote",
    description: "Transparent, itemised quote with no hidden fees — valid for 30 days.",
  },
  {
    title: "Excavation Begins",
    description: "Licensed operators arrive on schedule with the right equipment for the job.",
  },
  {
    title: "Project Complete",
    description: "Site left clean, graded, and ready for the next stage of your build.",
  },
] as const;

export const SERVICE_AREAS = [
  { name: "Melbourne Metro", description: "All suburbs within 50km of CBD" },
  { name: "Mornington Peninsula", description: "Coastal and hinterland properties" },
  { name: "Geelong & Bellarine", description: "Residential and commercial sites" },
  { name: "Yarra Valley", description: "Acreage, rural, and lifestyle blocks" },
  { name: "Macedon Ranges", description: "Rocky terrain and challenging access" },
  { name: "Ballarat Region", description: "Subdivision and civil earthworks" },
] as const;

export const REVIEWS = [
  {
    name: "James Mitchell",
    location: "Mornington, VIC",
    rating: 5,
    text: "Blackstone Excavations completed our site cut and driveway prep ahead of schedule. Professional crew, spotless finish, and communication was excellent throughout.",
  },
  {
    name: "Sarah Chen",
    location: "Doncaster, VIC",
    rating: 5,
    text: "We had challenging rocky soil and tight access. They brought the right gear, broke through the rock efficiently, and stayed within the quoted price.",
  },
  {
    name: "Mark Thompson",
    location: "Geelong, VIC",
    rating: 5,
    text: "Used them for trenching and drainage on our commercial build. Reliable, fully insured, and the site was left cleaner than we expected.",
  },
  {
    name: "Emma Walsh",
    location: "Yarra Glen, VIC",
    rating: 5,
    text: "From the free site visit to final clean-up, everything was handled professionally. Highly recommend for acreage and rural blocks.",
  },
  {
    name: "David Nguyen",
    location: "Craigieburn, VIC",
    rating: 5,
    text: "Fast quote, fair pricing, and they showed up when they said they would. The 5T excavator was perfect for our pool dig.",
  },
] as const;

export const FAQS = [
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes. We offer free, no-obligation site inspections and quotes for all excavation work. Quotes are itemised and valid for 30 days.",
  },
  {
    question: "Are your operators licensed and insured?",
    answer:
      "Absolutely. All operators hold current licences and certifications. We carry full public liability and workers compensation insurance.",
  },
  {
    question: "What size excavator do I need for my project?",
    answer:
      "It depends on access, depth, and soil type. Our 1.7T suits tight residential sites, 5T handles most home builds, and 14T is ideal for commercial or rocky terrain. We'll recommend the right machine during your site inspection.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–4 weeks ahead for standard jobs. Emergency and urgent work can often be accommodated — call our emergency line for availability.",
  },
  {
    question: "Do you handle spoil removal?",
    answer:
      "Yes. Our tipper trucks remove spoil and can deliver clean fill, gravel, or road base as needed. Haulage is quoted separately based on volume and distance.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service Melbourne metro, Mornington Peninsula, Geelong, Yarra Valley, Macedon Ranges, Ballarat, and surrounding regional Victoria. Contact us to confirm coverage for your location.",
  },
] as const;

export const BEFORE_AFTER = {
  before:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  after:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  label: "Residential Site Cut — Mornington Peninsula",
} as const;

export const HERO_IMAGE = "/hero-excavation.webp";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80";

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export const ESTIMATE_RATES = {
  siteCut: { min: 80, max: 150, unit: "per m³" },
  trenching: { min: 45, max: 95, unit: "per linear metre" },
  general: { min: 120, max: 180, unit: "per hour" },
  rock: { min: 200, max: 350, unit: "per hour" },
} as const;
