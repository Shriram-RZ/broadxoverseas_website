export type Product = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  desc: string;
  long: string;
  highlights: string[];
  img: string;
  category: "Spice" | "Sweetener" | "Fresh" | "Eco" | "Aromatic" | "Protein" | "Superfruit" | "Bulk";
};

export const PRODUCTS: Product[] = [
  {
    slug: "jaggery",
    name: "100% Natural Jaggery",
    tag: "Natural",
    tagline: "Premium Export Grade",
    desc: "Pure, unrefined sweetener derived from fresh sugarcane — untouched by chemicals or additives.",
    long: "Rich in minerals, deep in flavour and golden in colour, our jaggery meets the growing global demand for clean-label, traditional sweeteners. Supplied to health food retailers, food processors and bulk commodity buyers with consistent quality and taste across every batch.",
    highlights: ["100% Natural", "No Additives", "Block & Powder", "Bulk Supply"],
    img: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?auto=format&fit=crop&w=1200&q=80",
    category: "Sweetener",
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    tag: "Spice",
    tagline: "India's Golden Spice",
    desc: "High curcumin content, vibrant colour and rich aroma — sought after by food, pharma and cosmetic buyers.",
    long: "India is the world's largest producer and exporter of turmeric — our turmeric reflects the very best of this heritage. Available in finger, bulb and powder form, processed to international hygiene and grading standards for spice traders, food manufacturers, nutraceutical and cosmetic industries worldwide.",
    highlights: ["High Curcumin", "Finger & Powder", "Food & Pharma Grade", "FSSAI Compliant"],
    img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=80",
    category: "Spice",
  },
  {
    slug: "lemon",
    name: "Fresh Lemon",
    tag: "Fresh",
    tagline: "Fresh & Zesty",
    desc: "Export-grade lemons harvested at peak ripeness from South India's fertile groves.",
    long: "Known for exceptional juice content, vibrant colour and sharp citrus aroma. Carefully sorted, cleaned and packed to preserve freshness through long transit periods — ideal for retail supermarkets, hospitality chains, beverage manufacturers and wholesale distributors.",
    highlights: ["High Juice Content", "Export Sorted & Graded", "Long Shelf Life", "Fresh Harvest"],
    img: "https://images.unsplash.com/photo-1587496679742-bad432fe8cc0?auto=format&fit=crop&w=1200&q=80",
    category: "Fresh",
  },
  {
    slug: "banana-leaves",
    name: "Banana Leaves",
    tag: "Eco",
    tagline: "Eco-Friendly & Traditional",
    desc: "Harvested fresh, cleaned and packed to maintain size, texture and natural green vibrancy.",
    long: "Globally prized for use in traditional dining, cultural events and eco-friendly packaging. As the world shifts toward sustainable alternatives, banana leaves are in high demand across restaurants, food businesses and eco-product markets worldwide.",
    highlights: ["Natural & Biodegradable", "Restaurant & Retail Grade", "Fresh Packed", "Eco Packaging"],
    img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80",
    category: "Eco",
  },
  {
    slug: "curry-leaves",
    name: "Curry Leaves",
    tag: "Aromatic",
    tagline: "Aromatic & Authentic",
    desc: "Hygienically cleaned, moisture-controlled packing. Ideal for ethnic food distributors worldwide.",
    long: "Bursting with a distinctive aroma and flavour that is irreplaceable in authentic South Asian, Southeast Asian and Middle Eastern cuisines. Carefully packed to retain freshness throughout international transit — ideal for Indian grocery chains, ethnic food distributors and gourmet retail markets worldwide.",
    highlights: ["Fresh Aromatic Grade", "Moisture Controlled", "Restaurant & Retail", "Ethnic Food Markets"],
    img: "https://images.unsplash.com/photo-1599909533733-32b9097a1ce6?auto=format&fit=crop&w=1200&q=80",
    category: "Aromatic",
  },
  {
    slug: "groundnut",
    name: "Raw Groundnut",
    tag: "Protein",
    tagline: "Protein-Rich & Versatile",
    desc: "Machine-cleaned, graded by size and packed to meet international aflatoxin control standards.",
    long: "A premium commodity for global snack food manufacturers, peanut butter producers, oil extraction units and bulk ingredient buyers. Grown in India's leading groundnut-producing belts. Available in shelled, unshelled and blanched variants to meet your procurement needs every season.",
    highlights: ["Machine Cleaned", "Aflatoxin Controlled", "Shelled & Unshelled", "Food Industry Grade"],
    img: "https://images.unsplash.com/photo-1567892737950-30c4db37a4e0?auto=format&fit=crop&w=1200&q=80",
    category: "Protein",
  },
  {
    slug: "red-banana",
    name: "Red Banana",
    tag: "Superfruit",
    tagline: "Exotic Superfruit",
    desc: "A rare South Indian variety packed with Vitamin C, B6, potassium and antioxidants.",
    long: "Far superior in nutrition to the common yellow banana. Highly sought after in premium health food, superfood retail and smoothie markets worldwide.",
    highlights: ["High Nutrition", "Superfood Grade", "Antioxidant Rich", "Premium Exotic"],
    img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1200&q=80",
    category: "Superfruit",
  },
  {
    slug: "coconut",
    name: "Fresh Coconut",
    tag: "Bulk",
    tagline: "The Tree of Life",
    desc: "Tender and matured coconuts with exceptional water content and high oil yield.",
    long: "Premium tender and matured coconuts from South India's finest growing belt. Exceptional water content, thick kernel and high oil yield — supplying beverage brands, oil producers, food processors and cosmetic manufacturers globally.",
    highlights: ["Tender & Matured", "Export Graded", "Food & Cosmetic Grade", "Bulk Supply"],
    img: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=1200&q=80",
    category: "Bulk",
  },
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Spice",
  "Sweetener",
  "Fresh",
  "Eco",
  "Aromatic",
  "Protein",
  "Superfruit",
  "Bulk",
] as const;
