export interface CleaningService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  startingPrice: number;
  priceUnit: string;
  popular?: boolean;
  features: string[];
  checklist: string[];
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  details: string;
  beforeDesc: string;
  afterDesc: string;
  beforeColor: string;
  afterColor: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  suburb: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const BUSINESS_INFO = {
  name: "Mr Cleaner",
  legalName: "Mr Cleaner Professional Cleaning Services",
  phoneDisplay: "0406 854 593",
  phoneRaw: "+61406854593",
  phoneHref: "tel:0406854593",
  whatsappHref: "https://wa.me/61406854593?text=Hi%20Mr%20Cleaner!%20I'd%20like%20to%20inquire%20about%20a%20cleaning%20service%20in%20Morley%20/%20Perth.",
  email: "mr.cleaner441@gmail.com",
  emailHref: "mailto:mr.cleaner441@gmail.com",
  address: "23 Hollett Road, Morley, Western Australia 6062",
  city: "Morley",
  state: "Western Australia",
  country: "Australia",
  serviceArea: "Morley, Bayswater, Dianella, Bedford & surrounding Perth WA suburbs",
  hours: "Monday – Saturday: 7:00 AM – 7:00 PM | Sunday: By Appointment",
  socials: {
    facebook: {
      name: "Mr Cleaner on Facebook",
      handle: "mr.cleaner.07",
      url: "https://www.facebook.com/mr.cleaner.07",
    },
    instagram: {
      name: "@mr.cleaner.07 on Instagram",
      handle: "@mr.cleaner.07",
      url: "https://www.instagram.com/mr.cleaner.07",
    },
    tiktok: {
      name: "@mr.cleaner.07 on TikTok",
      handle: "@mr.cleaner.07",
      url: "https://www.tiktok.com/@mr.cleaner.07",
    },
  },
  slogans: [
    "A clean space makes life feel easier! 🧹✨",
    "Clean Spaces. Better Places.",
    "Clean Space · Better Living",
    "We clean. You relax!",
  ],
};

export const SERVICES: CleaningService[] = [
  {
    id: "home-cleaning",
    title: "Home Cleaning",
    tagline: "A spotless home, a happier you.",
    description: "Comprehensive residential cleaning customized to your home. Whether regular maintenance or a deep seasonal refresh, we bring eco-friendly products and meticulous care to every room.",
    startingPrice: 120,
    priceUnit: "per standard visit",
    popular: true,
    features: [
      "Kitchen benchtops, stovetop, splashbacks & sink",
      "Full bathroom & toilet sanitisation and descaling",
      "Dusting all surfaces, skirting boards & furniture",
      "Vacuuming all floors, rugs & mopping hard tiles",
      "Emptying bins & tidying living spaces",
    ],
    checklist: [
      "Stovetop wiped & grease removed",
      "Countertops disinfected",
      "Microwave cleaned inside & out",
      "Shower glass & tiles scrubbed",
      "Mirrors polished streak-free",
      "Toilets disinfected & sanitized",
      "Beds made / linen changed upon request",
      "All floors thoroughly vacuumed & mopped",
    ],
    iconName: "Home",
  },
  {
    id: "end-of-lease",
    title: "End of Lease Cleaning",
    tagline: "Move out with confidence, leave it spotless.",
    description: "Guaranteed bond return standard cleaning aligned with Western Australia real estate checklists. Complete property restoration from oven interior to window tracks.",
    startingPrice: 280,
    priceUnit: "per property",
    popular: true,
    features: [
      "100% Bond Back inspection standard",
      "Deep oven degreasing & rangehood filters",
      "Window sills, tracks & interior glass panes",
      "Inside cupboards, wardrobes & drawers wiped",
      "Skirting boards, light switches & door frames",
    ],
    checklist: [
      "Oven interior racks, glass & heating elements restored",
      "Rangehood filters degreased & polished",
      "Bathroom lime scale & grout residue removed",
      "All cupboards & pantries vacuumed & wiped clean",
      "Wall spot cleaning for scuffs & marks",
      "Exhaust fans & air conditioning filters dusted",
      "Window tracks vacuumed & wiped clean",
      "Final property manager sign-off checklist verified",
    ],
    iconName: "Key",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    tagline: "Clean workspace, better productivity.",
    description: "Reliable commercial and office cleaning tailored around your business hours. Disinfected communal spaces, pristine boardrooms, and fresh amenities every morning.",
    startingPrice: 150,
    priceUnit: "per service",
    features: [
      "Workstation dusting & sanitisation",
      "Staff kitchen & tea-room deep clean",
      "Restroom replenishment & intensive disinfection",
      "Rubbish & recycling bin collection",
      "High-traffic entryways & vacuumed carpets",
    ],
    checklist: [
      "Sanitising desk peripherals and high-touch areas",
      "Kitchen sinks, coffee stations & fridges wiped",
      "Disinfecting toilets, basin handles & mirrors",
      "Hard floor sweeping and damp micro-mopping",
      "Emptying desk bins and replacing liners",
      "Glass doors & entrance partitions cleaned",
    ],
    iconName: "Building2",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    tagline: "Deep clean for fresher, healthier carpets.",
    description: "Hot water steam extraction that reaches deep into carpet fibers to remove stubborn stains, pet dander, allergens, and odors without harsh toxic chemicals.",
    startingPrice: 90,
    priceUnit: "for 2 rooms",
    features: [
      "Industrial hot-water extraction technology",
      "Pre-treatment for heavy stains & traffic lanes",
      "Dust mite, allergen & pet odor neutralisation",
      "Quick drying time with eco-friendly solutions",
      "Suitable for wool, nylon, and synthetic carpets",
    ],
    checklist: [
      "Pre-vacuuming to extract loose grit",
      "Targeted stain spot-treatment",
      "High-pressure hot steam deep rinse",
      "Deodorising natural treatment",
      "Carpet pile grooming for fast drying",
    ],
    iconName: "Sparkles",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    tagline: "Crystal clear windows, brighter view.",
    description: "Pure water streak-free window cleaning for residential and single-storey commercial properties. Includes sills, screens, and detailed track detailing.",
    startingPrice: 85,
    priceUnit: "starting price",
    features: [
      "Streak-free glass inside & out",
      "Detailed track vacuuming & grime removal",
      "Flyscreen washing & dust removal",
      "Frame & sill wiping",
      "Mirrors & glass pool fencing options",
    ],
    checklist: [
      "Flyscreens removed and gently scrubbed",
      "Tracks vacuumed of dirt, bugs & debris",
      "Glass washed with streak-free solution",
      "Squeegee precision dry finish",
      "Sills wiped clean and dried",
    ],
    iconName: "Layers",
  },
  {
    id: "car-wash",
    title: "Car Wash & Detailing",
    tagline: "Vehicle detailing right at your driveway.",
    description: "Mobile exterior wash and deep interior detailing. From seats vacuuming and leather conditioning to dashboard dressing and high-shine rim finish.",
    startingPrice: 75,
    priceUnit: "per vehicle",
    features: [
      "Hand wash & wax finish with pH-neutral soap",
      "Interior seat & carpet deep vacuuming",
      "Dashboard, console & door card dressing",
      "Interior & exterior streak-free glass",
      "Tire dressing & alloy wheel degreasing",
    ],
    checklist: [
      "Gentle foam wash & microfiber dry",
      "Alloy wheels cleaned and tires dressed",
      "Trunk and footwells vacuumed",
      "Cup holders, vents & console wiped clean",
      "Leather seats wiped or upholstery spot-treated",
    ],
    iconName: "Car",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Booking & Consultation",
    description: "You contact us and share your cleaning needs. We provide the best transparent quote and customized solution for you.",
  },
  {
    step: 2,
    title: "Schedule Confirmation",
    description: "We confirm your preferred date and time slot that suits your schedule, with automated friendly reminders.",
  },
  {
    step: 3,
    title: "Professional Cleaning",
    description: "Our trained, police-checked team arrives punctually with premium eco-friendly equipment and cleans every detail with care.",
  },
  {
    step: 4,
    title: "Quality Check",
    description: "We double-check every zone against our rigorous quality checklist to make sure nothing is missed.",
  },
  {
    step: 5,
    title: "Customer Satisfaction",
    description: "Your happiness is our priority. We don't leave until you are 100% satisfied. We clean. You relax!",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Reliable & Punctual Service",
    description: "We value your time. We arrive on schedule, fully equipped, and complete jobs within the promised window.",
    iconName: "Clock",
  },
  {
    title: "Trained & Police Checked Cleaners",
    description: "Peace of mind matters. Our team members undergo rigorous background checks, training, and vetting.",
    iconName: "ShieldCheck",
  },
  {
    title: "Eco-Friendly Cleaning Products",
    description: "Safe for kids, pets, and the environment. Powerful botanical and biodegradable solutions that clean thoroughly.",
    iconName: "Leaf",
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "Honest upfront estimates with no surprise hidden fees. Exceptional value for Morley and Perth families.",
    iconName: "Tag",
  },
  {
    title: "100% Satisfaction Guaranteed",
    description: "If any area isn't up to standard, we come back and fix it free of charge. Your peace of mind is guaranteed.",
    iconName: "ThumbsUp",
  },
  {
    title: "Locally Owned Morley Business",
    description: "Based at 23 Hollett Road, Morley. Proudly serving our local community with genuine West Australian friendliness.",
    iconName: "MapPin",
  },
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "stovetop",
    title: "Gas Stovetop & Burner Restoration",
    subtitle: "Heavy baked-on grease & oil residue removed to restore gleaming factory steel.",
    category: "Kitchen Deep Clean",
    beforeLabel: "Heavy Burnt Grease",
    afterLabel: "Polished Stainless Finish",
    details: "Degreased cast iron trivets, restored brass burner caps, sanitized surrounding stainless surface.",
    beforeDesc: "Tough burnt-on splatters, discolored stainless steel, carbonized burner rings.",
    afterDesc: "Spotless mirror-like shine, streak-free controls, sparkling clean trivets.",
    beforeColor: "from-amber-950/70 via-stone-800 to-amber-900/60",
    afterColor: "from-slate-700 via-teal-900/50 to-slate-800",
  },
  {
    id: "rangehood",
    title: "Commercial-Grade Rangehood Degrease",
    subtitle: "Sticky grease extraction from mesh filters, canopy interior and polished exterior hood.",
    category: "Kitchen Appliances",
    beforeLabel: "Sticky Yellow Grease",
    afterLabel: "Streak-Free Stainless Steel",
    details: "Submerged filter hot-soak degrease, canopy scrub, and stainless protective polish applied.",
    beforeDesc: "Clogged grease filters, tacky sticky surface, yellowed oil misting.",
    afterDesc: "Porous filters breathing freely, sleek brushed steel texture restored.",
    beforeColor: "from-amber-950/80 via-stone-900 to-amber-900/50",
    afterColor: "from-slate-800 via-sky-950/60 to-slate-700",
  },
  {
    id: "shower-screen",
    title: "Bathroom Shower Screen Limescale Removal",
    subtitle: "Cloudy hard water mineral etching and soap scum dissolved crystal clear.",
    category: "Bathroom Restoration",
    beforeLabel: "Cloudy Hard Water Scum",
    afterLabel: "Crystal Clear Glass",
    details: "Eco-acid descaling treatment followed by hydrophobic streak-free buffer coat.",
    beforeDesc: "Opaque milky film, mold in tile grout crevices, dull chrome taps.",
    afterDesc: "100% transparent glass, sparkling chrome taps, bright sanitized grout lines.",
    beforeColor: "from-stone-800/80 via-zinc-900 to-stone-800/60",
    afterColor: "from-cyan-950/60 via-slate-800 to-teal-950/50",
  },
  {
    id: "carpet-stain",
    title: "Living Room Carpet Steam Extraction",
    subtitle: "Dark walkway traffic marks, coffee spots and pet odors lifted out of wool carpet.",
    category: "Steam Carpet Clean",
    beforeLabel: "Traffic Soil & Spills",
    afterLabel: "Fluffy & Freshly Groomed",
    details: "Deep 85°C hot steam injection and dual-vacuum soil recovery with allergen rinse.",
    beforeDesc: "Matted dirty walking paths, stubborn pet spots, dingy faded color.",
    afterDesc: "Vibrant lifted carpet fibers, clean fresh scent, zero chemical odor.",
    beforeColor: "from-stone-900 via-amber-950/40 to-stone-800",
    afterColor: "from-slate-800 via-emerald-950/40 to-slate-900",
  },
];

export const SUBURBS_SERVICED = [
  { name: "Morley", postcode: "6062", distance: "0 km (Home Base)", zone: "Core" },
  { name: "Bayswater", postcode: "6053", distance: "3 km", zone: "Core" },
  { name: "Bedford", postcode: "6052", distance: "2 km", zone: "Core" },
  { name: "Dianella", postcode: "6059", distance: "3 km", zone: "Core" },
  { name: "Noranda", postcode: "6062", distance: "2 km", zone: "Core" },
  { name: "Beechboro", postcode: "6063", distance: "4 km", zone: "Core" },
  { name: "Embleton", postcode: "6062", distance: "1.5 km", zone: "Core" },
  { name: "Inglewood", postcode: "6052", distance: "4 km", zone: "Surrounding" },
  { name: "Maylands", postcode: "6051", distance: "5 km", zone: "Surrounding" },
  { name: "Bassendean", postcode: "6054", distance: "6 km", zone: "Surrounding" },
  { name: "Mount Lawley", postcode: "6050", distance: "6 km", zone: "Surrounding" },
  { name: "Mirrabooka", postcode: "6061", distance: "5 km", zone: "Surrounding" },
  { name: "Malaga", postcode: "6090", distance: "5 km", zone: "Surrounding" },
  { name: "Ballajura", postcode: "6066", distance: "7 km", zone: "Surrounding" },
  { name: "Stirling", postcode: "6021", distance: "8 km", zone: "Metro" },
  { name: "Perth CBD", postcode: "6000", distance: "9 km", zone: "Metro" },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Jessica M.",
    suburb: "Morley, WA",
    service: "End of Lease Cleaning",
    rating: 5,
    date: "March 2026",
    comment: "I used Mr Cleaner for my end-of-lease clean at our rental on Walter Road. The real estate agent did the exit inspection and approved our full bond on the spot! The oven looked completely brand new. Could not recommend them more.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "David K.",
    suburb: "Bayswater, WA",
    service: "Regular Fortnightly Home Clean",
    rating: 5,
    date: "February 2026",
    comment: "Mr Cleaner has been doing our fortnightly house clean for 4 months now. Always on time, courteous, and respectful of our home. Coming home on cleaning day to fresh sheets and sparkling floors is the best feeling of the week.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Elena R.",
    suburb: "Dianella, WA",
    service: "Deep Kitchen & Oven Clean",
    rating: 5,
    date: "January 2026",
    comment: "I honestly thought our 10-year-old gas stove and rangehood filters were beyond saving. The team spent 3 hours meticulously restoring every inch with eco-friendly products. It looks like a showroom kitchen!",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Marcus T.",
    suburb: "Noranda, WA",
    service: "Office & Carpet Cleaning",
    rating: 5,
    date: "March 2026",
    comment: "We hired Mr Cleaner for our business offices in Noranda. Great communication, reliable key handling, and the steam cleaning on our entrance carpets got rid of years of grime. Highly professional team.",
    verified: true,
  },
];

export const FAQS = [
  {
    question: "Do I need to be at home during the cleaning?",
    answer: "No, you don't need to be home! Many of our clients leave a key in a lockbox or let our team in before heading to work. We are fully police-checked and insured, and we lock up securely when finished.",
  },
  {
    question: "What is your 100% Satisfaction Guarantee?",
    answer: "If you notice any corner or detail that doesn't meet your expectations, simply notify us within 24 hours. We will promptly return and re-clean the specific area at no additional cost.",
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer: "Yes, we bring our own industrial vacuums, steam extractors, microfiber cloths, and commercial-grade eco-friendly cleaning detergents. You don't need to supply anything.",
  },
  {
    question: "How does the End of Lease Bond Guarantee work?",
    answer: "Our End of Lease service strictly follows the Western Australia Department of Commerce and REIWA exit checklist. If your property manager requests any touch-ups during their official inspection report, we return free of charge to rectify it.",
  },
  {
    question: "Which areas in Western Australia do you cover?",
    answer: "Our home base is 23 Hollett Road, Morley (6062). We service Morley and all nearby suburbs including Bayswater, Bedford, Dianella, Noranda, Beechboro, Embleton, Inglewood, Maylands, Bassendean, Mount Lawley, and greater Perth metro.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept EFT / Bank Transfer, instant PayID, major Credit/Debit Cards, and Cash upon inspection. Invoices with tax receipts are provided for all residential and business jobs.",
  },
];
