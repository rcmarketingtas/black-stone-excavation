export const SITE = {
  name: "Blackstone Excavations",
  tagline: "Precision Excavation. Built on Strength.",
  description:
    "Family-owned excavation and earthmoving across Launceston and Tasmania. General excavation, rock landscaping, backyard makeovers, and more.",
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
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Machinery", href: "/machinery" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
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
  { label: "Years Experience", value: 25, suffix: "+", animate: true },
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

export const ABOUT_IMAGE = "/about/owner.webp";
export const ABOUT_IMAGE_ALT =
  "The owner of Blackstone Excavations smiling outdoors with his dog, wearing a branded company shirt.";

export const ABOUT_CONTENT = {
  title: "About Us",
  headline: "Welcome to Blackstone Excavations",
  paragraphs: [
    "We are a small family-owned business operating in Launceston and the surrounding areas.",
    "We are fully licensed, insured, and equipped with all the tools of the trade. We specialise in all types of general excavation, rock landscaping, and backyard makeovers.",
    "With over 25 years experience, we take pride in everything that we do and love a challenge.",
  ],
  cta: "Got a project on the go? Contact us for a free no-obligation quote.",
  highlights: [
    "25+ years experience",
    "Family-owned and local",
    "Fully licensed and insured",
    "Fully equipped for any job",
  ],
} as const;

export const MACHINERY = [
  {
    id: "kobelco-sk55",
    name: "Kobelco SK55 Excavator",
    subtitle: "2 units",
    description:
      "Compact excavators with rubber tracks and a full range of buckets and attachments for residential and tight-access work.",
    image: "/machinery/kobelco-sk55.webp",
    features: [
      "Rubber tracks",
      "Tilting quick hitch",
      "Hydraulic thumb grab",
      "Full set of buckets (1200, 650, 450, 300mm)",
      "Ripper tine",
      "Rock and stick rake",
    ],
    attachments: [
      "Rock breaker",
      "Auger drive (with 600, 450, 300mm drill bits)",
    ],
    capabilities: [] as readonly string[],
  },
  {
    id: "terex-pt50",
    name: "Terex Posi-track PT50",
    subtitle: "Posi-track loader",
    description:
      "Versatile posi-track for grading, clearing, and material handling across varied terrain.",
    image: "/machinery/terex-pt50.webp",
    features: [
      "Rubber tracks",
      "4-in-1 bucket",
      "Smudge bar",
      "Pallet forks",
      "Slasher attachment",
    ],
    attachments: [] as readonly string[],
    capabilities: [] as readonly string[],
  },
  {
    id: "tipper-truck",
    name: "6 Yard Tipper Truck",
    subtitle: "6.3 tonne payload",
    description:
      "Reliable tipper for carting machinery, materials, and supporting driveway and site work.",
    image: "/machinery/tipper-truck.webp",
    features: [
      "UHF 2-way radio",
      "Handy 4.7m tipping body",
      "3-way tailgate",
      "Flashing light",
    ],
    attachments: [] as readonly string[],
    capabilities: [
      "Carting machinery",
      "Relocating fill and concrete",
      "Assisting with gravel driveway construction",
      "Moving any materials needed",
    ],
  },
] as const;

export type GalleryCategory =
  | "All"
  | "Excavation"
  | "Earthmoving"
  | "Site Cuts"
  | "Rock Removal"
  | "Landscaping"
  | "Machinery";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Excavation",
  "Earthmoving",
  "Site Cuts",
  "Rock Removal",
  "Landscaping",
  "Machinery",
];

export const GALLERY_IMAGES = [
  {
    src: "/gallery/raised-garden-beds.webp",
    alt: "Raised corrugated garden beds installed on gravel with excavator on site",
    category: "Landscaping" as GalleryCategory,
    height: 360,
  },
  {
    src: "/gallery/backyard-rock-landscaping.webp",
    alt: "Backyard rock landscaping with fire pit, tiered rock garden, and lawn",
    category: "Landscaping" as GalleryCategory,
    height: 400,
  },
  {
    src: "/gallery/stone-steps-retaining-wall.webp",
    alt: "Sandstone steps and tiered retaining walls with fresh mulch and plantings",
    category: "Landscaping" as GalleryCategory,
    height: 420,
  },
  {
    src: "/gallery/stone-steps-landscaping-progress.webp",
    alt: "Sandstone steps and terraced landscaping under construction with excavator on site",
    category: "Landscaping" as GalleryCategory,
    height: 400,
  },
  {
    src: "/gallery/rural-property-driveway.webp",
    alt: "Rural property driveway and site preparation with excavator on cleared ground",
    category: "Earthmoving" as GalleryCategory,
    height: 360,
  },
  {
    src: "/gallery/kobelco-site-prep.webp",
    alt: "Kobelco excavator on cleared backyard site ready for landscaping",
    category: "Excavation" as GalleryCategory,
    height: 340,
  },
  {
    src: "/gallery/blackstone-backyard-excavation.webp",
    alt: "Blackstone Excavations excavator clearing a backyard site",
    category: "Excavation" as GalleryCategory,
    height: 360,
  },
  {
    src: "/gallery/terex-pt50-graded-site.webp",
    alt: "Terex Posi-track PT50 on freshly graded site",
    category: "Machinery" as GalleryCategory,
    height: 340,
  },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
