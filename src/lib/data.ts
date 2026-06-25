export const SITE = {
  name: "Blackstone Excavations",
  tagline: "Precision Excavation. Built on Strength.",
  description:
    "Professional excavation and earthmoving across Launceston and Tasmania. Licensed operators, modern fleet, reliable service.",
  url: "https://blackstoneexcavation.com.au",
  phone: "1300 555 0198",
  phoneHref: "tel:+6113005550198",
  email: "info@blackstoneexcavation.com.au",
  address: "Launceston, Tasmania, Australia",
  hours: "Mon–Fri: 6:00 AM – 6:00 PM | Sat: 7:00 AM – 2:00 PM",
  emergencyPhone: "1300 555 0199",
} as const;

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Launceston+Tasmania+Australia&output=embed";

export const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
] as const;

export const SERVICES = [
  {
    title: "Site Cuts",
    description: "Precision benching and cut-and-fill for residential and commercial blocks.",
    icon: "Layers",
    image: "/services/site-cuts.webp",
  },
  {
    title: "Earthmoving",
    description: "Bulk earthworks, soil relocation, and site preparation.",
    icon: "Mountain",
    image: "/services/earthmoving.webp",
  },
  {
    title: "General Excavation",
    description: "Foundations, pools, sheds, and landscaping excavation.",
    icon: "Shovel",
    image: "/services/general-excavation.webp",
  },
  {
    title: "Rock Removal",
    description: "Rock breaking, hammer work, and removal for tough terrain.",
    icon: "Pickaxe",
    image: "/services/rock-removal.webp",
  },
  {
    title: "Trenching",
    description: "Utility trenches for plumbing, electrical, and telecom.",
    icon: "Route",
    image: "/services/trenching.webp",
  },
  {
    title: "Drainage",
    description: "Stormwater and property drainage solutions.",
    icon: "Droplets",
    image: "/services/drainage.webp",
  },
  {
    title: "Land Clearing",
    description: "Vegetation removal and site preparation.",
    icon: "Trees",
    image: "/services/land-clearing.webp",
  },
  {
    title: "Driveway Preparation",
    description: "Grading and base prep for durable driveways.",
    icon: "Car",
    image: "/services/driveway-preparation.webp",
  },
] as const;

export const WHY_CHOOSE_US = [
  { label: "Years Experience", value: 10, suffix: "+", animate: true },
  { label: "Projects Completed", value: 500, suffix: "+", animate: true },
  { label: "Fully Insured", value: 0, suffix: "", animate: false },
  { label: "Licensed Operators", value: 0, suffix: "", animate: false },
] as const;

export const SERVICE_AREAS = [
  { name: "Launceston & Surrounds", description: "City and nearby suburbs" },
  { name: "Northern Tasmania", description: "Regional excavation and earthmoving" },
  { name: "Tamar Valley", description: "Acreage, rural, and lifestyle blocks" },
  { name: "North West Coast", description: "Devonport, Burnie, and surrounds" },
  { name: "Statewide", description: "Tasmania-wide by arrangement" },
] as const;

export const REVIEWS = [
  {
    name: "James Mitchell",
    location: "Launceston, TAS",
    rating: 5,
    text: "Blackstone Excavations completed our site cut ahead of schedule. Professional crew, spotless finish, and communication was excellent throughout.",
  },
  {
    name: "Sarah Chen",
    location: "Devonport, TAS",
    rating: 5,
    text: "We had challenging rocky soil and tight access. They brought the right gear, broke through efficiently, and stayed on budget.",
  },
  {
    name: "Mark Thompson",
    location: "George Town, TAS",
    rating: 5,
    text: "Used them for trenching and drainage on our build. Reliable, fully insured, and the site was left cleaner than we expected.",
  },
] as const;

export const HERO_IMAGE = "/hero-excavation.webp";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80";

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
